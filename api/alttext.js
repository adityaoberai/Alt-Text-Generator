import { OpenAIClient, AzureKeyCredential, OpenAIKeyCredential } from "@azure/openai";

export default async function alttext (request, response) {
  try {
    let client;
    let deploymentName;

    switch(process.env.USE_METHOD){
      case 'azureopenai': {
        deploymentName = process.env.AZUREOPENAI_DEPLOYMENTNAME;
        const endpoint = process.env.AZUREOPENAI_ENDPOINT;
        const apiKey = process.env.AZUREOPENAI_APIKEY;
        client= new OpenAIClient(endpoint, new AzureKeyCredential(apiKey)); 
        break;
      }
      case 'openai': {
        deploymentName = 'gpt-4-turbo';
        const apiKey = process.env.OPENAI_APIKEY;
        client= new OpenAIClient(new OpenAIKeyCredential(apiKey)); 
        break;
      }
    }
    
    const image = request.body.image;

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

    const result = await client.getChatCompletions(deploymentName, messages, { maxTokens: 100 });
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
