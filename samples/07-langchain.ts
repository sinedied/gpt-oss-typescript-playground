// This example demonstrates how to use LangChain.js with gpt-oss models.

import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import config from "./config.js";

const model = new ChatOpenAI({
  configuration: {
    ...config
  },
  model: config.model,
  // Effort level for reasoning (low, medium, high)
  reasoning: {
    effort: "low",
  }
});

const response = await ChatPromptTemplate.fromMessages([["human", "{input}"]])
  .pipe(model)
  .invoke({ input: "Say hello!" });

console.log({ response });
