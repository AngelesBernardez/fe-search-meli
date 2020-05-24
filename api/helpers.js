const getWholeNumber = (amount) => {
  return parseInt(amount.toString().split(".")[0]);
};

const getDecimals = (amount) => {
  return amount.toString().split(".")[1];
};

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

const formatItemsResponse = (response) => {
  return response.map((item) => {
    return formatSingleItem(item);
  });
};

const addAuthor = () => {
  return {
    name: "Maria de los Angeles",
    lastName: "Bernardez",
  };
};

const formatCategories = (categories) => {
  const categoriesTree = categories
    .filter((category) => category.id === "category")[0]
    .values[0].path_from_root.map((cat) => cat.name);

  return categoriesTree;
};

module.exports = {
  addAuthor,
  formatCategories,
  formatSingleItem,
  formatItemsResponse,
};
