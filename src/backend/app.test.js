const request = require('supertest');
jest.mock("")

const app = require('./app');

describe('POST /chat', () => {
  it('returns response', () => {
    const expected = {
        message: "I am a potato"
    };
    return request(app)
      .post('/chat')
      .send({message: "Hey GPT"})
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expected);
      });
  });
});