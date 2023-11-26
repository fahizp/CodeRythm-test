import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get(async(req, res) => {
  res.status(200).json({ message: 'Hello from CodeRythm!' });
});

router.route('/').post(async (req, res) => {
  try {
    console.log(req.body);
    const { pre, post } = req.body;
    const response = await openai.createCompletion({
      model: 'davinci:ft-coderythm-technology-private-limited-2023-11-25-11-10-57',
      prompt: `Pretest data: Silence & Violence: ${pre}\nPosttest data: Silence & Violence: ${post}`,
      max_tokens: 200
    });

    console.log(response.data.choices);
    res.status(200).json({ data: response.data.choices });
  } catch (error) {
    console.error(error.response.data.error.message); 
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;
