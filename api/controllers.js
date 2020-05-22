const {
  addAuthor,
  formatSingleItem,
  formatItemsResponse,
} = require("./helpers");
const axios = require("axios");
const api = axios.create({
  baseURL: "https://api.mercadolibre.com/",
});

const items = (req, res) => {
  const { q } = req.query;
  api
    .get(`/sites/MLA/search?q=${q}`)
    .then((response) => {
      res.send(formatItemsResults(response.data.results));
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const itemDetails = (id) => {
  return api.get(`/items/${id}`);
};

const itemDescription = (id) => {
  return api.get(`/items/${id}/description`);
};

const itemDetailsAndDescription = (req, res) => {
  const { id } = req.params;
  let finalResponse = {};
  axios
    .all([
      itemDetails(id),
      itemDescription(id),
      //   .catch((error) => {
      //   throw new Error(error);
      // }),
    ])
    .then(
      axios.spread((resDetails, resDescription) => {
        let item = {
          ...formatSingleItem(resDetails.data),
          ["description"]: resDescription.data.plain_text,
        };

        finalResponse = {
          author: addAuthor(),
          item,
        };

        res.send(finalResponse);
      })
    );
};

const formatItemsResults = (results) => {
  return {
    author: addAuthor(),
    // categories: results.filters,
    //COMES EMPTY IN THE API RESPONSE
    items: formatItemsResponse(results),
  };
};

module.exports = {
  items,
  itemDetailsAndDescription,
};
