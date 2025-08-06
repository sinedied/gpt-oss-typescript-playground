import { OpenAI } from "@llamaindex/openai";
import config from "./config.js";

const openai = new OpenAI({
  ...config,
  // Effort level for reasoning (low, medium, high)
  reasoningEffort: "low",
});

const response = await openai.chat({
  messages: [{ content: "Tell me a joke.", role: "user" }],
});

console.log(response.message.content);
