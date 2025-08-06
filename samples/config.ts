// This file sets up the configuration for using gpt-oss models with different
// providers.

import process from "node:process";
import "dotenv/config";

// Configuration for using GitHub models
const GITHUB_MODELS_CONFIG = {
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN!,
  model: "gpt-oss-120b",
};

// Configuration for using Azure AI Foundry models
export const AZURE_AI_CONFIG = {
  baseURL: process.env.AZURE_AI_BASE_URL!,
  apiKey: process.env.AZURE_AI_API_KEY!,
  model: "gpt-oss-120b",
};

// Configuration for using Ollama models
export const OLLAMA_CONFIG = {
  baseURL: "http://localhost:11434/v1",
  apiKey: "__not_needed__",
  model: "gpt-oss",
};

// Set the configuration to use with all the examples
export default GITHUB_MODELS_CONFIG;
// export default AZURE_AI_CONFIG;
// export default OLLAMA_CONFIG;
