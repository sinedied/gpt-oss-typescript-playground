// This example demonstrates how to use the OpenAI API to chat with the model.

import { OpenAI } from "openai";
import config from "./config.js";

const openai = new OpenAI({ ...config });

const chatCompletion = await openai.chat.completions.create({
  model: config.model,
  messages: [{ role: "user", content: "Say hello in French!" }],
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
