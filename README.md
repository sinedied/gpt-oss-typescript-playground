<div align="center">

<img src="./docs/images/icon.png" alt="" align="center" height="128" />

# gpt-oss TypeScript Playground

[![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/sinedied/gpt-oss-typescript-playground?hide_repo_select=true&ref=main&quickstart=true)
![Node version](https://img.shields.io/badge/Node.js-20+-grass?style=flat-square)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-orange?style=flat-square)](LICENSE)

⭐ If you like this repo, star it on GitHub — it helps a lot!

[Overview](#overview) • [Get started](#get-started) • [Run the samples](#run-the-samples) • [Resources](#resources)

</div>

## Overview

OpenAI's `gpt-oss` models series [has been released](https://openai.com/index/introducing-gpt-oss/), you can explore how to use these new models in this TypeScript playground.

Using [GitHub Codespaces](https://github.com/features/codespaces) and [GitHub Models](https://github.com/marketplace/models), you'll be able to run these models directly in your browser, without having to install anything, or you can run them locally on your machine with [Ollama](https://ollama.com/).

When you're ready to explored hosted options, you can also use [Azure AI Foundry](https://azure.microsoft.com/en-us/blog/openais-open%e2%80%91source-model-gpt%e2%80%91oss-on-azure-ai-foundry-and-windows-ai-foundry/) to deploy the models on Azure.

> [!TIP]
> You can run any of these demos right in your browser for free using [GitHub Codespaces](https://github.com/features/codespaces) and [GitHub Models](https://github.com/marketplace/models)! ✨
 
## Get started

There are multiple ways to get started with this project.

The quickest way is to use [GitHub Codespaces](#use-github-codespaces) that provides a preconfigured environment for you, directly from your browser. Alternatively, you can [set up your local environment](#use-your-local-environment) following the instructions below.

<details open>
<summary><h3>Use GitHub Codespaces</h3></summary>

You can run this project directly in your browser by using GitHub Codespaces, which will open a web-based VS Code:

[![Open in GitHub Codespaces](https://img.shields.io/static/v1?style=flat-square&label=GitHub+Codespaces&message=Open&color=blue&logo=github)](https://codespaces.new/sinedied/gpt-oss-typescript-playground?hide_repo_select=true&ref&quickstart=true)

</details>

<details>
<summary><h3>Use a VSCode dev container</h3></summary>

A similar option to Codespaces is VS Code Dev Containers, that will open the project in your local VS Code instance using the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

You will also need to have [Docker](https://www.docker.com/get-started/) installed on your machine to run the container.

[![Open in Dev Containers](https://img.shields.io/static/v1?style=flat-square&label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/sinedied/gpt-oss-typescript-playground)

</details>

<details>
<summary><h3>Use your local environment</h3></summary>

You need to install following tools to work on your local machine:

- [Node.js LTS](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)
- [Ollama](https://ollama.com/) _(optional)_ - For using the models locally

Then you can get the project code:

1. [**Fork**](https://github.com/sinedied/gpt-oss-typescript-playground/fork) the project to create your own copy of this repository.
2. On your forked repository, select the **Code** button, then the **Local** tab, and copy the URL of your forked repository.

   ![Screenshot showing how to copy the repository URL](./docs/images/clone-url.png)
3. Open a terminal and run this command to clone the repo: `git clone <your-repo-url>`
4. Open the cloned project in your favorite IDE, then run this command in a terminal: `npm install`

</details>

## Run the samples

In the [samples](./samples) folder of this repository, you'll find examples of how to use the gpt-oss models with different use cases and SDKs. You can run them by executing the following command in the terminal:

```bash
npx tsx samples/<filename>
```

Alternatively, you can open a sample file in the editor and run it directly by clicking the "Run" (▶️) button in the top right corner of the editor.

The samples are configured by default to run using GitHub models, which should run without any additional configuration if you're using GitHub Codespaces. There are multiple ways to run the samples using either GitHub Models, Azure AI Foundry or even locally using Ollama. Open the `samples/config.ts` and change the default export to the desired configuration.

### Using GitHub Models

To use GitHub Models, you need to have a [GitHub account](https://github.com/signup) and a [personal access token (PAT)](https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token).

Once you have created you PAT, create a `.env` file in the root of the project and add the following content:

```env
GITHUB_TOKEN=<your-github-token>
```

> [!TIP]
> If you're using GitHub Codespaces, you can run the samples using GitHub Models without any additional configuration.
> Codespaces already sets up the environment variables for you, and you don't need to create a PAT.

Open the `samples/config.ts` file and update the default export:

```ts
export default GITHUB_MODELS_CONFIG;
```

### Using Azure AI Foundry

To use Azure AI Foundry, you need to have an [Azure account](https://azure.com/free). Then follow this [quickstart guide](https://learn.microsoft.com/azure/ai-studio/how-to/deploy-models-serverless?tabs=azure-ai-studio) to deploy a serverless endpoint with the model. When it's time to choose the model, select the `gpt-oss-120b` model in the catalog.

Once your endpoint is deployed, you should be able to see your endpoint details and retrieve the URL and API key:

![Screenshot showing the endpoint details in Azure AI Foundry](./docs/images/ai-foundry-endpoint.png)

Then create a `.env` file in the root of the project and add the following content:

```env
AZURE_AI_BASE_URL="https://<your-deployment-name>.<region>.models.services.azure.com/"
AZURE_AI_API_KEY="<your-api-key>"
```

> [!TIP]
> If you're copying the endpoint from the Azure AI Foundry portal, make sure to only keep the base URL with the `/models` at the end of the URL.

Open the `samples/config.ts` file and update the default export:

```ts
export default AZURE_AI_CONFIG;
```

### Using Ollama

To use Ollama, you first need to use a [local dev environment](#use-your-local-environment) and install [Ollama](https://ollama.com/). Then, open a terminal and use the Ollama CLI to download the [gpt-oss model](https://ollama.com/library/gpt-oss):

```bash
ollama pull gpt-oss
```

> [!TIP]
> Different model sizes are [available](https://ollama.com/library/gpt-oss), you can pick the one that fits your needs and resources.
> Larger model will provide better results but will require more resources to run. You can switch the model used by example by editing the `samples/config.ts` file.

Once the model is downloaded, open the `samples/config.ts` file and update the default export:

```ts
export default OLLAMA_CONFIG;
```

## Resources

Here are some additional resources to help you learn more and experiment with generative AI:

- [Generative AI with JavaScript](https://github.com/microsoft/generative-ai-with-javascript) - Learn how to build Generative AI applications with JavaScript
- [MCP for Beginners](https://github.com/microsoft/mcp-for-beginners) - A beginner-friendly introduction to MCP
- [Azure AI Foundry](https://ai.azure.com/) (Azure): a web portal to create, train, deploy and experiment with AI models.
- [Azure AI Travel Agents with Llamaindex.TS and MCP](https://github.com/Azure-Samples/azure-ai-travel-agents/) - Sample for building AI agents using Llamaindex.TS and MCP
- [Serverless AI Chat with RAG using LangChain.js](https://github.com/Azure-Samples/serverless-chat-langchainjs) - Sample for building a serverless AI chat grounded on your own data with LangChain.js

You can also find [more Azure AI samples here](https://github.com/Azure-Samples/azureai-samples).

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
