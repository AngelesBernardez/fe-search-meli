import React from "react";
import PriceItem from "../PriceItem/PriceItem";
import ImageItem from "../ImageItem/ImageItem";
import SmallText from "../SmallText/SmallText";
import ProductTitle from "../ProductTitle/ProductTitle";
import PropTypes from "prop-types";
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
      <ImageItem picture={picture} altText={title} />
      <div className="item-info">
        <div className="top-block">
          <PriceItem freeShipping={freeShipping} price={price} />
          <div className="item-location">
            <SmallText text={location} smaller grey />
          </div>
        </div>
        <ProductTitle title={title} />
      </div>
    </li>
  );
};

export default ResultItem;

ResultItem.propTypes = {
  freeShipping: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired,
};
