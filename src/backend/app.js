// const { Configuration, OpenAIApi } = require("openai");
// require('dotenv').config()

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// async function runCompletion () {
// const completion = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "How are you today?",
// });
// console.log(completion.data.choices[0].text);
// }

// runCompletion();


export const callChatGPTAPI = async (inputText) => {
    // API endpoint URL
    const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";
    // Request headers
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
    };
    // Request body
    const body = {
        "prompt": inputText,
        "max_tokens": 50,
        "n": 1,
        "stop": "\n"
    };
    try {
        // Make a POST request to the API endpoint
        const response = await fetch(endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
        });
        // Parse the response as JSON
        const responseData = await response.json();
        // Return the generated response
        return responseData.choices[0].text.trim();
    } catch (error) {
        console.error(error);
    }
    }




await callChatGPTAPI("Hello world");