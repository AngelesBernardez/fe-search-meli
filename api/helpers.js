module.exports = {
  formatItemsResponse: (response) => {
    return response.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: Number,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    });
  },

  addAuthor: () => {
    return {
      name: "Maria de los Angeles",
      lastName: "Bernardez",
    };
  },
};
