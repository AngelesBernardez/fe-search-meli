/**
 * Receives a decimal number and removes them from it..
 * @param {Number} amount - Number with decimals.
 * @returns {Number} Whole number.
 */
const getWholeNumber = (amount) => {
  return parseInt(amount.toString().split(".")[0]);
};

/**
 * Receives a decimal number and removes the whole part from it..
 * @param {Number} amount - Number with decimals.
 * @returns {Number} Decimals.
 */
const getDecimals = (amount) => {
  return amount.toString().split(".")[1];
};

/**
 * Receives a full item from the MELI API and
 * formats it according to what we need
 * @param {Object} item - A full item's object.
 * @returns {SingleItem} An item formatted.
 */
const formatSingleItem = (item) => {
  var location =
    item.address !== null &&
    item.address != "null" &&
    typeof item.address !== "undefined"
      ? item.address
      : "";

  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: getWholeNumber(item.price),
      decimals: getDecimals(item.price),
    },
    picture: item.thumbnail,
    condition: item.condition,
    location:
      location !== null && typeof location !== "undefined"
        ? location.state_name
        : "", //The requirements did't ask for this but the Front End did.
    sold_quantity: item.sold_quantity,
    free_shipping: item.shipping.free_shipping,
  };
};

/**
 * Formats all the items in the response
 * @param {Array} response - A full item's object.
 * @returns {Array} An array of formatted items..
 */
const formatItemsResponse = (response) => {
  return response.map((item) => {
    return formatSingleItem(item);
  });
};

/**
 * Adds an object with the autor´s name
 * @returns {Author} An object with the autor´s data.
 */
const addAuthor = () => {
  return {
    name: "Maria de los Angeles",
    lastName: "Bernardez",
  };
};

/**
 * Formats the categories.
 * @param {Array} categories - An array of the categories tree.
 * @returns {Array} An array strings with the categories names.
 */
const formatCategories = (categories) => {
  const categoriesTree = categories
    .filter((category) => category.id === "category")[0]
    .values[0].path_from_root.map((cat) => cat.name);

  return categoriesTree;
};

/**
 * Formats items results.
 * @param {Object} response - An object with the original API response.
 * @returns {Items} An object formatted accordingly.
 *
 */
const formatItemsResults = (response) => {
  //Sometimes filters array comes empty.
  const categories =
    response.filters.length !== 0 ? formatCategories(response.filters) : [];
  return {
    author: addAuthor(),
    categories,
    items: formatItemsResponse(response.results),
  };
};

module.exports = {
  addAuthor,
  formatCategories,
  formatSingleItem,
  formatItemsResponse,
  formatItemsResults,
};

/**
 * @typedef {Object} Items
 * @property {Object} author - The author's data
 * @property {Array<String>} categories - An array of Strings with the categories
 * @property {Array<Object>} items - An array of items
 */

/**
 * @typedef {Object} SingleItem
 * @property {String} id - Item's ID
 * @property {Object} price - An object with currency, amount and decimals keys.
 * @property {String} picture - A URL for a picture.
 * @property {String} condition - The item's condition.
 * @property {String} condition - The item's condition.
 * @property {Number} sold_quantity - The item's sold quantity.
 * @property {Boolean} free_shipping - If the item has free shipping.
 */

/**
 * @typedef {Object} Author
 * @property {String} name - The author's name
 * @property {String} lastName - The author's lastname.
 */
