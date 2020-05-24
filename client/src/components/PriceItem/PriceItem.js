import React from "react";

import "./PriceItem.css";

const PriceItem = ({ bigger, freeShipping, price }) => {
  let formatCurrency =
    typeof price !== "undefined" &&
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: price.currency,
      minimumFractionDigits: 0,
    }).format(price.amount);

  return (
    <React.Fragment>
      {typeof price !== "undefined" && (
        <p
          className={`price-item ${
            typeof bigger !== "undefined" ? "bigger" : ""
          }`}
        >
          {formatCurrency}
          {price.decimals > 0 && (
            <span className="decimals">
              {price.decimals > 9 ? price.decimals : "0" + price.decimals}
            </span>
          )}
          {freeShipping && <img src="/ic_shipping@2x.png" alt="Envio gratis" />}
        </p>
      )}
    </React.Fragment>
  );
};

export default PriceItem;
