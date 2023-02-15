# [EmolResume](https://www.emolresumen.vercel.app)

This project summarizes Emol articles for you using AI.

[![Emol Summary Tool](./public/screenshot.png)](https://www.emolresumen.vercel.app)

## Inspired by

This project was inspired by [TechCrunchSummary.com](https://www.techcrunchsummary.com/), which is a similar project built by [@Nutlope](https://github.com/Nutlope).

## How it works

This project uses the [OpenAI GPT-3 API](https://openai.com/api/) (specifically, text-davinci-003) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It fetches the content on a Emol article, sends it in a prompt to the GPT-3 API to summarize it via a Vercel Edge function, then streams the response back to the application.

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
pnpm dev
```
