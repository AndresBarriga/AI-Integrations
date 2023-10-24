// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");

const cors = require('cors')({ origin: true });
const OpenAI = require('openai');

initializeApp();

exports.coverLetterWriter = functions.https.onRequest(async (req, res) => {
  // Enable CORS using the 'cors' middleware
  cors(req, res, async () => {
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

exports.codeCommenting = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const openai = new OpenAI({
      apiKey: functions.config().openai.api_key
    }); const {
      language,
      code,
      featurePurpose,
      proficiencyLevel,
      documentationStandards,
    } = req.body;

    console.log(language);
    console.log(documentationStandards)


    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are a senior full stack developer engineer"
        },
        {
          "role": "user",
          "content": `Your goal is to add comprehensive comments to the code provided. You will answer only with the commented code, comments within lines. All explanations should be contained within the code
          Consider the following scenarios and provide appropriate comments for the code:
          1 - The code is written in ${language}
          2 - it's main functionality is to ${featurePurpose} 3
          3- IMPORTANT - Take into account that people looking at the code will have ${proficiencyLevel} proficiency level, so make the comments suitable for them. (i.E, a beginner will need different explanations that an advanced)
          4- Please follow the documentation standars accoriding to ${documentationStandards}
          5- Expected use of the comments is: Code Review and easy comprehension
          6 - Code for you to analyse and comment :${code}
          Code Review Comments -Yes
          `
        }
      ],
      temperature: 1,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (completion.choices) {
      res.json({
        message: completion.choices[0].message.content
      })
    }
  });
});


exports.coverLetter = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const openai = new OpenAI({
      apiKey: functions.config().openai.api_key
    })
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

    console.log(cv)
    console.log(selectedTone)

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are a professional cover letter writer who writes customized cover letters as per user input"
        },
        {
          "role": "user",
          "content":
            `
    You are an expert at drafting customized cover letters and adhering at word count requirements, I need you to write a cover letter relevant for the job description provided and suited for the CV provided.
    Important requirement, Length should be approximately ${lengthAsString} words. Maximum deviation allowance is +-30. It is very important to adhere to this criteria otherwise the letter would not be considered. If a letter is concise following the word indication the message is more powerful, this count is recommended by the best practices that cover letter must follow
    Write a cover letter for this job offer ${joboffer}
    The candidate applying has this CV, use only the most relevant experiences:  ${cv}
    Additionally, I need you to follow the next indications.
    1. Do not use any buzzwords.
    2. Use the ${selectedTone} style. Formal: for professional and corporate jobs, StartUp: More casual, for startups or less formal environments.
    4. If given, address special motivations / interest about the role or industry: ${interest}
    5. If given, mention in the cover letter a past achievement that matches the job description: ${achievements}
    6. If given, highlight relevant skills that the candidate has for the job: ${skills}
    7. If given, show interest in the company or its values: ${company}
    8. Open the letter strong, start with a punchline, why the job is exciting and what the candidate brings to the table, for this combine the job description and CV.
  `}
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
      })

    }
  })
});

exports.meetingNotes = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const openai = new OpenAI({
      apiKey: functions.config().openai.api_key
    })
    const {
      title,
      date,
      time,
      agenda,
      participants,
      decisions,
      topics,
      actionitems,
      selectedTone
    } = req.body;



    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are the best employee at taking notes and documenting results, your mission is to write meeting notes (email style)."
        },
        {
          "role": "user",
          "content":
            `
      I need you to write meeting notes in a ${selectedTone} style, a for the meeting that have took place so everyone that was participating knows what was discussed and what are the next steps.
      The meeting title is ${title} and was held on ${date} and ${time}.
      The people taking part in the meeting were ${participants}. The meeting's agenda covered ${agenda}. 
      During the meeting, the following key points were discussed: ${topics}. 
      The decisions made during the meeting were [${decisions}.
      The action meeting agreed were ${actionitems} (if deadline provided include it,
        IMPORTANT*  if person asigned to an action item, and email is known, mention in @"Email address" format "
        Example: @andresbarriga@gmail.com needs to send status update by friday EOD
      For the tone follow the next indications:
      Formal Tone: Write a professional email with a structured and formal language.
      Casual Tone: Draft a friendly message for an internal team meeting in a relaxed and approachable style.
      Technical Tone: Compose a communication for a highly technical meeting, incorporating specialized terminology and jargon.
      Business Tone: Write a concise message suitable for a general business meeting, maintaining a neutral and clear language.
      Executive Tone: Create a brief and focused message for a meeting with top-level executives, emphasizing key points.
      Project-Specific Tone: Develop a communication tailored to a specific project or industry, adapting the tone accordingly.
      Pushing Tone: Draft an email with a sense of urgency, clear call-to-action statements, positive reinforcement, politeness, and a commitment to follow up
    `}
      ],
      temperature: 1,
      max_tokens: 700,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.5,
    });

    if (completion.choices) {
      res.json({
        message: completion.choices[0].message.content
      })
    }
  })
});


exports.testAutomatedUS = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const openai = new OpenAI({
      apiKey: functions.config().openai.api_key
    })
    const {
      userStory
    } = req.body;



    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are a very senior QA engineer"
        },
        {
          "role": "user",
          "content":
            `As part of our software testing efforts, we need assistance in creating automated test scripts for a new feature
      in our AI Content Generator website that allows users to paste their code and have it back with proper commenting. 
      Please help with the following: Generate test cases (incl. action and expected result) for the feature based on the
      given description.
      Present only test scenarios, including positive, negative cases. Highlight potential edge cases for testing. 
      ${userStory}
          
      Example format for response:
      Positive Scenarios: 
      1. (Scenario Description)
      Action: (Expected action)
      Expected Result_ (Expected Result)
      2...
      3...
      Negative Scenarios:
      4....
      5...
      Edge Scenarios:
      6...
      7...
    `}
      ],
      temperature: 1,
      max_tokens: 700,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.5,
    });

    if (completion.choices) {
      res.json({
        message: completion.choices[0].message.content
      })
    }
  })
});

exports.testAutomatedCode = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const openai = new OpenAI({
      apiKey: functions.config().openai.api_key
    })
    const {
      choosenTestScenario,
      userStory,
      code,
    } = req.body;


    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          "role": "system",
          "content": "You are an expert QA engineer"
        },
        {
          "role": "user",
          "content": `I need you to create a Unit Test focusing on the next scenario for the following code, explanation of the feature provided on the user story.
          Please answer only with the Unit Test Code
          Context/ Scenario that the test will cover : ${choosenTestScenario}
          The purpose of the feature is : ${userStory}
          The code to test is : ${code}
          `,
        }
      ],
      temperature: 1,
      max_tokens: 2499,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (response.choices) {
      console.log(response.choices[0].message.content)
      res.json({
        response: response.choices[0].message.content
      })
    }

  })
});

