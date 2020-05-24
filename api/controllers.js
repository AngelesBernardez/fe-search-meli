const {
  addAuthor,
  formatSingleItem,
  formatItemsResults,
} = require("./helpers");
const axios = require("axios");
const api = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

/**
 * Makes the items request to MELI API.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {undefined}.
 */
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

/**
 * Makes the item's details request to MELI API.
 * @param {string} id - The item's ID.
 * @returns {Object}.API's response.
 */
const itemDetails = (id) => {
  return api.get(`/items/${id}`);
};

/**
 * Makes the item's description request to MELI API.
 * @param {string} id - The item's ID.
 * @returns {Object}.API's response.
 */
const itemDescription = (id) => {
  return api.get(`/items/${id}/description`);
};

/**
 * Makes a categories request to MELI API.
 * @param {string} id - The categories ID.
 * @returns {Object}.API's response.
 */
const itemCategories = (id) => {
  return api.get(`/categories/${id}`);
};

/**
 * Makes the item's details, description and categories request to MELI API.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {undefined}.
 */
const itemDetailsDescriptionAndCategories = (req, res) => {
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

module.exports = {
  items,
  itemDetailsDescriptionAndCategories,
};
