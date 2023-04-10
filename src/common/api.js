// export const callChatGPTAPI = async (inputText) => {
//     // API endpoint URL
//     const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";
//     // Request headers
//     const headers = {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer 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"
//     };
//     // Request body
//     const body = {
//         "prompt": inputText,
//         "max_tokens": 50,
//         "n": 1,
//         "stop": "\n"
//     };
//     try {
//         // Make a POST request to the API endpoint
//         const response = await fetch(endpoint, {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(body)
//         });
//         // Parse the response as JSON
//         const responseData = await response.json();
//         // Return the generated response
//         return responseData.choices[0].text.trim();
//     } catch (error) {
//         console.error(error);
//     }
// }

import { Configuration, OpenAIApi } from "openai";



const configuration = new Configuration({
    organization: process.env.OPENAI_API_KEY,
    apiKey: process.env.OPENAI_ORG_NAME,
});

const openai = new OpenAIApi(configuration);


export const callChatGPTAPI = async (inputText) => {

    const chatExample = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Hello! Am I reaching Chat-GPT?",
      });

    const response = chatExample.data.choices[0].text

      return response
}