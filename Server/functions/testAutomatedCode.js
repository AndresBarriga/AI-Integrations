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
app.post("/code/automatic-tests/unit-testing", async (req, res) => {
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
});

exports.testAutomatedCode = functions.https.onRequest(app);