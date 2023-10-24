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

 app.post("/code/automatic-comments", async (req, res) => {
    const {
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

  exports.generateComments = functions.https.onRequest(app);