// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const functions = require("firebase-functions");
const cors = require('cors')({ origin: true });

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const OpenAI = require('openai');

initializeApp();

exports.coverLetterWriter = functions.https.onRequest(async(req, res) => {
    // Enable CORS using the 'cors' middleware
    cors(req, res, async() => {
      const openai = new OpenAI({
        apiKey: functions.config().openai.api_key
      });
  
      const {
        cv,
        joboffer,
        lengthAsString,
        selectedTone,
        interest,
        achievements,
        skills,
        company
      } = req.body;
  
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "You are a professional cover letter writer who writes customized cover letters as per user input"
          },
          {
            "role": "user",
            "content": `
              You are an expert at drafting customized cover letters and adhering at word count requirements, I need you to write a cover letter relevant for the job description provided and suited for the CV provided.
              Important requirement, Length should be approximately ${lengthAsString} words. Maximum deviation allowance is +-30. It is very important to adhere to this criteria; otherwise, the letter would not be considered. If a letter is concise following the word indication, the message is more powerful, this count is recommended by the best practices that cover letter must follow.
              Write a cover letter for this job offer ${joboffer}.
              The candidate applying has this CV, use only the most relevant experiences: ${cv}.
              Additionally, I need you to follow the next indications.
              1. Do not use any buzzwords.
              2. Use the ${selectedTone} style. Formal: for professional and corporate jobs, StartUp: More casual, for startups or less formal environments.
              4. If given, address special motivations/interest about the role or industry: ${interest}.
              5. If given, mention in the cover letter a past achievement that matches the job description: ${achievements}.
              6. If given, highlight relevant skills that the candidate has for the job: ${skills}.
              7. If given, show interest in the company or its values: ${company}.
              8. Open the letter strong, start with a punchline, why the job is exciting and what the candidate brings to the table, for this combine the job description and CV.
            `
          }
        ],
        temperature: 1,
        max_tokens: 700,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      if (completion.choices) {
        res.json({
          message: completion.choices[0].message.content
        });
      } else {
        res.status(500).send("Error generating the cover letter");
      }
    });
  });

