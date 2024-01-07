<a href="https://alttext.in" target="_blank">
    <img src="https://user-images.githubusercontent.com/31401437/235480543-f89912d6-19bf-4761-9f22-86c2ea523b46.png" alt="Alt Text Generator" width="1000">
</a>

# Alt Text Generator
[![RepoRater](https://repo-rater.eddiehub.io/api/badge?owner=adityaoberai&name=Alt-Text-Generator)](https://repo-rater.eddiehub.io/rate?owner=adityaoberai&name=Alt-Text-Generator)

## Description

**Svelte** app that uses **Azure Cognitive Services** and a **Vercel Serverless Function** to analyse an image and provide you with a caption to use as alt text!

## Demo Recording

https://github.com/adityaoberai/Alt-Text-Generator/assets/31401437/cdf2ce3c-0c72-47e0-bab2-8bac8e0cd4cc

## Steps to Run Locally

- Create a [Microsoft Azure account](https://azure.microsoft.com/free/cognitive-services/), followed by a [Computer Vision Resource](https://portal.azure.com/#create/Microsoft.CognitiveServicesComputerVision)
    - Make sure to choose one of the following Azure regions: `East US`, `France Central`, `Korea Central`, `North Europe`, `Southeast Asia`, `West Europe`, `West US` (since we're using Image Analysis 4.0, which is in preview)
- Install [Vercel CLI](https://vercel.com/docs/cli)
- Clone this repository
- Run `npm install`
- Change the file `.env.example` to `.env`
- Add your Azure Computer Vision endpoint and API key to the .env file
- Add your environment variables to the Vercel project using `vercel env add ENV_VAR` command (replace `ENV_VAR` with your environment variables)
- Run `vercel dev`

## Using REST API

### POST `/api/alttext`


**Parameters**

| Name              | Description                          | Location | Type                       |
| ----------------- | ------------------------------------ | -------- | -------------------------- |
| Content-Type      | The content type of the request body | Header   | `application/octet-stream` |
| image             | Image to get alt text for            | Body     | Image (Binary data)        |

**Request**

Byte array in request body

**Response**

Sample Response:

```json
{
  "message": "a black and white image of a couple of cards"
}
```
