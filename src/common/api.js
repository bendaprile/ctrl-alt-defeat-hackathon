import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    organization: process.env.OPENAI_API_KEY,
    apiKey: process.env.OPENAI_ORG_NAME,
});

const openai = new OpenAIApi(configuration);

export const callChatGPTAPI = async (inputText) => {

    const chatExample = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: inputText,
      });

    const response = chatExample.data.choices[0].text

    return response
}