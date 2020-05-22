import React from "react";

import "./ResultItem.css";

const ResultItem = ({ freeShipping, title, picture, price }) => {
  return (
    <React.Fragment>
      <div className="item-image">
        <img src={picture} alt={title} />
      </div>
      <div className="item-info">
        <p className="item-price">
          {price.amount}
          {freeShipping && <img src="/ic_shipping@2x.png" alt="Envio gratis" />}
        </p>
        <p className="item-title">{title}</p>
      </div>
    </React.Fragment>
  );
};

export default ResultItem;
