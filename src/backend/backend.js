import { Configuration, OpenAIApi } from "openai";
require('dotenv').config()
console.log(process.env)

const configuration = new Configuration({
    organization: "",
    apiKey: "",
});

const openai = new OpenAIApi(configuration);


export default function Home() {
  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    const chatExample = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Hello! Am I reaching Chat-GPT?",
    });
    console.log(chatExample.data.choices[0].text)
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput"/>
        </label>
        <hr />
        <button type="submit">Submit form</button>
      </form>
    </>
  );
}
