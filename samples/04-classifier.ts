// This example demonstrates how to extract structured information from a
// a given input text using a JSON schema.

import { OpenAI } from "openai";
import config from "./config.js";

const openai = new OpenAI({ ...config });

const systemPrompt = `You are a data extraction tool that extracts structured JSON information from the user input using this JSON schema:

{
  // The sentiment of the text
  "sentiment": "positive" | "neutral" | "negative",
  // How aggressive the text is on a scale from 1 to 10
  "aggressiveness": 1-10,
  // The language the text is written in
  "language": "string"
}`;

const input = `Cet exemple est pas trop mal!`;

const result = await openai.chat.completions.create({
  model: config.model,
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: input },
  ],
  // Note: structured outputs currently do not work with Ollama,
  // see issue: https://github.com/ollama/ollama/issues/11691
  // Meanwhile, you can comment out response_format to use the default output
  response_format: {
    type: "json_object",
  },
  // Randomness of the completion (0: deterministic, 1: maximum randomness)
  temperature: 0.2,
  // Effort level for reasoning (low, medium, high)
  // Higher levels may yield more accurate results but take longer
  reasoning_effort: "low",
});

console.log(
  "Thoughts:\n" +
  (result.choices[0].message as any).reasoning +
  "\n---\n" +
  result.choices[0].message.content
);
