import fetch from 'node-fetch';

export default async function alttext (request, response) {
  try {
    let endpoint = process.env.AZURECV_ENDPOINT + 'computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=caption';
    let apiKey = process.env.AZURECV_APIKEY;
    let image = request.body;

    let azureResponse = await fetch(endpoint, {
      method: 'POST',
      body: image,
      headers: {
          'Content-Type': 'application/octet-stream',
          'Ocp-Apim-Subscription-Key': apiKey
      },
    });

    let azureResponseBody = await azureResponse.json();

    response.status(200).json({
      message: azureResponseBody.captionResult.text
    });
  } catch(error) {
    console.error(error)
    response.status(500).json({
      message: error.message
    });
  }
}