import React from "react";

import "./PriceItem.css";

const PriceItem = ({ bigger, freeShipping, price }) => {
  console.log(
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: price.currency,
    }).format(price.amount)
  );
  return (
    <React.Fragment>
      {typeof price !== "undefined" && (
        <p className={`price-item ${bigger && "bigger"}`}>
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: price.currency,
            minimumFractionDigits: 0,
          }).format(price.amount)}
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
