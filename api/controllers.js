const {
  addAuthor,
  formatCategories,
  formatSingleItem,
  formatItemsResponse,
} = require("./helpers");
const axios = require("axios");
const api = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

const items = (req, res) => {
  const { q } = req.query;

  api
    .get(`/sites/MLA/search?q=${q}`)
    .then((response) => {
      res.send(formatItemsResults(response.data));
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

const itemCategories = (id) => {
  return api.get(`/categories/${id}`);
};

const itemDetailsAndDescription = (req, res) => {
  const { id } = req.params;
  let finalResponse = {};
  try {
    axios.all([itemDetails(id), itemDescription(id)]).then(
      axios.spread((resDetails, resDescription) => {
        itemCategories(resDetails.data.category_id).then((resCategories) => {
          const categories = resCategories.data.path_from_root.map(
            (cat) => cat.name
          );
          let item = {
            ...formatSingleItem(resDetails.data),
            ["description"]: resDescription.data.plain_text,
          };
          finalResponse = {
            author: addAuthor(),
            item,
            categories,
          };
          res.send(finalResponse);
        });
      })
    );
  } catch (error) {
    throw new Error(error);
  }
};

const formatItemsResults = (results) => {
  return {
    author: addAuthor(),
    categories: formatCategories(results.filters[0]),
    items: formatItemsResponse(results.results),
  };
};

module.exports = {
  items,
  itemDetailsAndDescription,
};
