import React from "react";

import "./ResultItem.css";
import PriceItem from "../PriceItem/PriceItem";
import ImageItem from "../ImageItem/ImageItem";

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
      <ImageItem picture={picture} altText={title} />
      <div className="item-info">
        <div className="top-block">
          <PriceItem freeShipping={freeShipping} price={price} />
          <p className="item-location">{location}</p>
        </div>
        <p className="item-title">{title}</p>
      </div>
    </li>
  );
};

export default ResultItem;
