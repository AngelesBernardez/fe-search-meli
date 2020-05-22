const getWholeNumber = (amount) => {
  return parseInt(amount.toString().split(".")[0]);
};

const getDecimals = (amount) => {
  return amount.toString().split(".")[1];
};

const formatSingleItem = (item) => {
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
    location: item.address.state_name, //The requirements did't ask for this but the Front End did.
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

module.exports = {
  addAuthor,
  formatSingleItem,
  formatItemsResponse,
};
