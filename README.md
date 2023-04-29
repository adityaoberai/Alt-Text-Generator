# Alt Text Generator

## Description

Vite + Svelte app that uses Azure Cognitive Services to analyse an image and provide you with a caption to use as alt text

## Demo Recording

https://user-images.githubusercontent.com/31401437/235306227-ad0e5f3a-1533-4d59-ad6b-32cdfd6b1a32.mp4

## Steps to Run

- Create a [Microsoft Azure account](https://azure.microsoft.com/free/cognitive-services/), followed by a [Computer Vision Resource](https://portal.azure.com/#create/Microsoft.CognitiveServicesComputerVision)
    - Make sure to choose one of the following Azure regions: `East US`, `France Central`, `Korea Central`, `North Europe`, `Southeast Asia`, `West Europe`, `West US` (since we're using Image Analysis 4.0, which is in preview)
- Clone this repository
- Change the file `.env.example` to `.env`
- Add your Azure Computer Vision endpoint and API key to the .env file
- Run `npm install` followed by `npm run dev`
