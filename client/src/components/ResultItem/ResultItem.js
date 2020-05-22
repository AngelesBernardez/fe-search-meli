import React from "react";

import "./ResultItem.css";

const ResultItem = ({
  freeShipping,
  handleClick,
  location,
  title,
  picture,
  price,
}) => {
  return (
    <li className="item centered-in-grid" onClick={handleClick}>
      <div className="item-image">
        <img src={picture} alt={title} />
      </div>
      <div className="item-info">
        <div className="top-block">
          <p className="item-price">
            ${new Intl.NumberFormat("es-AR").format(price.amount)}
            {price.decimals > 0 && (
              <span className="decimals">
                {price.decimals > 9 ? price.decimals : "0" + price.decimals}
              </span>
            )}
            {freeShipping && (
              <img src="/ic_shipping@2x.png" alt="Envio gratis" />
            )}
          </p>
          <p className="item-location">{location}</p>
        </div>
        <p className="item-title">{title}</p>
      </div>
    </li>
  );
};

export default ResultItem;
