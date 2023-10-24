
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


app.post("/code/automatic-tests/user-story", async (req, res) => {
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
  });

  exports.testAutomatedUS = functions.https.onRequest(app);