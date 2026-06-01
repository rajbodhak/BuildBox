# AI Libraries — OpenAI + Anthropic Claude Wrappers

Clean, reusable API client libraries for **OpenAI** and **Anthropic Claude**, plus a **Unified Client** to use both from a single interface.

---

## 📦 Installation

```bash
npm install openai @anthropic-ai/sdk
```

---

## 🔑 Setup

Set your API keys as environment variables:

```bash
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-ant-...
```

Or pass them directly in code (not recommended for production).

---

## 🗂 File Structure

```
ai-libraries/
├── openai-client.js   # OpenAI wrapper
├── claude-client.js   # Anthropic Claude wrapper
├── index.js           # Unified client (uses both)
├── examples.js        # Usage examples
└── README.md
```

---

## 🚀 Quick Start

```js
const { AIClient, OpenAIClient, ClaudeClient } = require("./index");
```

---

## OpenAI Client

```js
const ai = new OpenAIClient(); // uses OPENAI_API_KEY

// Basic chat
const reply = await ai.chat("What is the capital of France?");

// With options
const reply = await ai.chat("Write a poem", {
  systemPrompt: "You are a poet.",
  temperature: 0.9,
  maxTokens: 500,
  model: "gpt-4o",       // optional override
});

// Multi-turn conversation
let history = [];
const r1 = await ai.converse(history, "My name is Alex.");
const r2 = await ai.converse(r1.updatedHistory, "What's my name?");

// Streaming
await ai.stream("Tell me a story", (chunk) => process.stdout.write(chunk));

// JSON output
const data = await ai.generateJSON("Return a user object with name and age.");

// Embeddings
const vector = await ai.embed("Hello world");
const vectors = await ai.embedBatch(["text one", "text two"]);

// Image generation (DALL·E)
const imageUrl = await ai.generateImage("A futuristic city at sunset");

// Vision (image analysis)
const description = await ai.analyzeImage("https://example.com/img.jpg", "What's in this image?");

// Content moderation
const { flagged, categories } = await ai.moderate("some text to check");
```

---

## Claude Client

```js
const ai = new ClaudeClient(); // uses ANTHROPIC_API_KEY

// Basic chat
const reply = await ai.chat("Explain recursion simply.");

// With options
const reply = await ai.chat("Summarize this", {
  systemPrompt: "You are a concise summarizer.",
  temperature: 0.5,
  maxTokens: 300,
  model: "claude-opus-4-5", // optional override
});

// Multi-turn conversation
let history = [];
const r1 = await ai.converse(history, "I'm learning Python.");
const r2 = await ai.converse(r1.updatedHistory, "What should I learn first?");

// Streaming
await ai.stream("Tell me about the moon", (chunk) => process.stdout.write(chunk));

// JSON output
const data = await ai.generateJSON("Return 3 programming languages as JSON array.");

// Tool use (function calling)
const result = await ai.chatWithTools("What's the weather in Tokyo?", tools);
// result.toolUse => { name, input, id }

// Image analysis from URL
const desc = await ai.analyzeImageFromURL("https://example.com/img.jpg", "Describe this.");

// Image analysis from base64
const desc = await ai.analyzeImageFromBase64(base64String, "image/png", "What do you see?");

// Document analysis
const summary = await ai.analyzeDocument(documentText, "Summarize the key points.");

// Token counting
const count = await ai.countTokens("How many tokens is this?");
```

---

## Unified Client

Use both providers from one interface with automatic fallback:

```js
const ai = new AIClient({
  openaiKey: process.env.OPENAI_API_KEY,
  claudeKey: process.env.ANTHROPIC_API_KEY,
  default: "openai",  // "openai" | "claude"
});

// Use default provider
const reply = await ai.chat("Hello!");

// Override provider per call
const reply = await ai.chat("Hello!", { provider: "claude" });

// Compare both providers
const { openai, claude } = await ai.compareProviders("What is AI?");

// Automatic fallback (try OpenAI → fall back to Claude on error)
const { reply, usedProvider } = await ai.chatWithFallback("What year is it?");
```

---

## 🔄 Available Methods Summary

| Method | OpenAI | Claude |
|---|---|---|
| `chat(prompt, opts)` | ✅ | ✅ |
| `converse(history, msg, opts)` | ✅ | ✅ |
| `stream(prompt, onChunk, opts)` | ✅ | ✅ |
| `generateJSON(prompt, opts)` | ✅ | ✅ |
| `analyzeImage(...)` | ✅ (URL) | ✅ (URL + base64) |
| `embed(text)` | ✅ | ❌ |
| `embedBatch(texts)` | ✅ | ❌ |
| `generateImage(prompt)` | ✅ (DALL·E) | ❌ |
| `moderate(text)` | ✅ | ❌ |
| `chatWithTools(prompt, tools)` | ❌* | ✅ |
| `analyzeDocument(doc, instruction)` | ❌* | ✅ |
| `countTokens(prompt)` | ❌* | ✅ |

> *OpenAI supports these natively via the SDK — extend `openai-client.js` as needed.

---

## 📄 License

MIT
