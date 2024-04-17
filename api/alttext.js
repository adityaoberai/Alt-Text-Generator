import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

export const maxDuration = 60;

export default async function alttext (request, response) {
  try {
    const endpoint = process.env.AZUREOPENAI_ENDPOINT;
    const apiKey = process.env.AZUREOPENAI_APIKEY;
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));
    
    const image = request.body.image;

    const deploymentName = process.env.AZUREOPENAI_DEPLOYMENTNAME;
    const messages = [{ role: "user", content: [  
    { 
        type: "text", 
        text: "Generate alt text for the following image (do not add any extra text at the start or the end of the alt text):" 
    },
    { 
        type: "image_url",
        imageUrl: {
          url: image,
          detail: "auto"
        }
    }]}];

    const result = await client.getChatCompletions(deploymentName, messages, { maxTokens: 200 });
    console.log(result.choices[0].message?.content);

    let alttext = result.choices[0].message?.content;

    response.status(200).json({
      message: alttext
    });
  } catch(error) {
    console.error(error)
    response.status(500).json({
      message: error.message
    });
  }
}
