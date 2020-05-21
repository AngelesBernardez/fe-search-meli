const axios = require("axios");
const api = axios.create({
  baseURL: "https://api.mercadolibre.com/",
});

const helpers = require("./helpers");

module.exports = {
  items: (req, res) => {
    const { q } = req.query;
    api
      .get(`/sites/MLA/search?q=${q}`)
      .then((response) => res.send(formatItemsResults(response.data.results)))
      .catch((error) => {
        throw new Error(error);
      });
  },
};

const formatItemsResults = (results) => {
  return {
    author: helpers.addAuthor(),
    // categories: results.filters[0].values,
    items: helpers.formatItemsResponse(results),
  };
};
