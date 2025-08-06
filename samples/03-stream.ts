// This example demonstrates how to use the OpenAI API to stream the chat
// response to the console, to provide a more interactive experience.

import { OpenAI } from "openai";
import config from "./config.js";

const openai = new OpenAI({ ...config });

const chunks = await openai.chat.completions.create({
  model: config.model,
  messages: [{ role: "user", content: "Say hello in pirate style, then tell a pirate joke." }],
  stream: true,
  // Effort level for reasoning (low, medium, high)
  // Higher levels may yield more accurate results but take longer
  reasoning_effort: "low",
});

let reasoning = true;
console.log("Thoughts:");

for await (const chunk of chunks) {
  const delta = chunk.choices[0]?.delta;

  if ((delta as any)?.reasoning) {
    process.stdout.write((delta as any).reasoning);
  }

  // Check if reasoning is complete
  if (reasoning && delta?.content) {
    console.log("\n---");
    reasoning = false;
  }

  if (delta?.content) {
    process.stdout.write(delta.content);
  }
}
