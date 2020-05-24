const getWholeNumber = (amount) => {
  return parseInt(amount.toString().split(".")[0]);
};

const getDecimals = (amount) => {
  return amount.toString().split(".")[1];
};

const formatSingleItem = (item) => {
  var location =
    typeof item.address !== "undefined"
      ? item.address.state_name
      : item.seller_address.state.name;

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
    location: location, //The requirements did't ask for this but the Front End did.
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
  const mainCategory = categories.values[0];
  const subCategories = mainCategory.path_from_root.filter((item) => item.name);
  return [mainCategory.name, ...subCategories.map((cat) => cat.name)];
};

module.exports = {
  addAuthor,
  formatCategories,
  formatSingleItem,
  formatItemsResponse,
};
