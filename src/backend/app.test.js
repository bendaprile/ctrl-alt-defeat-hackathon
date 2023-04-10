const request = require('supertest');
jest.mock("")

import App from "./app"

describe('POST /chat', () => {
  it('returns response', async () => {
    // const expected = {
    //     message: "I am a potato"
    // };
    // return request(app)
    //   .post('/chat')
    //   .send({message: "Hey GPT"})
    //   .expect('Content-Type', /json/)
    //   .expect(200)
    //   .then((response) => {
    //     expect(response.body).toEqual(expected);
    //   });
    const app = new App();
    await app.callChatGPTAPI("Hello world");
  });
});