import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    organization: "org-w48mxUVhVu0hjgTOP2FW2fHg",
    apiKey: "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",
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