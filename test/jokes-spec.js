const { expect, assert } = require("chai");
const jokesApi = require("../api/random-api");
const should = requre("chai").should();

describe("Random Jokes", async function () {
  it("should get random joke", async function () {
    const joke1 = await jokesApi.getRandomJoke();
    const joke2 = await jokesApi.getRandomJoke();

    // Verify status code
    expect(joke1.status).to.equal(200);
    assert.equal(joke1.status, 200);
    should.equal(joke1.status, 200);
    //expect(joke2.status).to.equal(200);

    // Verify user gets different jokes upon every request
    expect(joke1.data.value).not.to.equal(joke2.data.value);
    assert.notEqual(joke1.data.value, joke2.data.value);
    should.not.equal(joke1.data.value, joke2.data.value);

    // Verify URL contains expected base of the url
    expect(joke1.data.url).to.include("https://api.chucknorris.io/jokes");
    assert.include(joke1.data.url, "https://api.chucknorris.io/jokes");
    should.include(joke1.data.url, "https://api.chucknorris.io/jokes");
  });
});