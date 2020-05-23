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

const itemDetailsAndDescription = (req, res) => {
  const { id } = req.params;
  let finalResponse = {};
  try {
    axios.all([itemDetails(id), itemDescription(id)]).then(
      axios.spread((resDetails, resDescription) => {
        let item = {
          ...formatSingleItem(resDetails.data),
          category_id: resDetails.data.category_id,
          ["description"]: resDescription.data.plain_text,
        };

        finalResponse = {
          author: addAuthor(),
          item,
        };

        res.send(finalResponse);
      })
    );
  } catch (error) {
    throw new Error(error);
  }
};

const itemCategories = (req, res) => {
  const { id } = req.params;
  api
    .get(`/categories/${id}`)
    .then((response) => {
      const categories = response.data.path_from_root.map((cat) => cat.name);
      res.send(categories);
    })
    .catch((error) => {
      throw new Error(error);
    });
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
  itemCategories,
  itemDetailsAndDescription,
};
