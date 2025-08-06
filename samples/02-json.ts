// This example demonstrates how to use the OpenAI API to generate structured
// JSON output to chat prompts.

import { OpenAI } from "openai";
import config from "./config.js";

const openai = new OpenAI({ ...config });

const chatCompletion = await openai.chat.completions.create({
  model: config.model,
  messages: [
    {
      role: "user",
      content: 'Say hello 5 different languages. Answer in JSON using { "<language>": "<result>" } format.',
    },
  ],
  // Note: structured outputs currently do not work with Ollama,
  // see issue: https://github.com/ollama/ollama/issues/11691
  // Meanwhile, you can comment out response_format to use the default output
  response_format: {
    type: "json_object",
  },
  // Effort level for reasoning (low, medium, high)
  // Higher levels may yield more accurate results but take longer
  reasoning_effort: "low",
});

console.log(
  "Thoughts:\n" +
  (chatCompletion.choices[0].message as any).reasoning +
  "\n---\n" +
  chatCompletion.choices[0].message.content
);
