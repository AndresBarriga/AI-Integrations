const OpenAI = require('openai');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')({origin: true});
const functions = require("firebase-functions");
const app = express();

require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const allowedOrigins = ['https://ai-integrations-front.vercel.app'];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post("/MeetingNotesWriter", async (req, res) => {
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
  });
exports.meetingNotes = functions.https.onRequest(app);