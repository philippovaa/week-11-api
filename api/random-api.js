const Client = require("../api/api-client");

class Random {
  async getRandomJoke(token) {
    const response = await Client.get("jokes/random", token);

    return response;
  }

  async getJokeBYID(token) {
    const response = await Client.get("jokes/random", token);

    return response;
  }

  async getJokeBYName(token) {
    const response = await Client.get("jokes/random", token);

    return response;
  }
}
module.exports = new Random();
