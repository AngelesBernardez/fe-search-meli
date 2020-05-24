import React from "react";
import PropTypes from "prop-types";

import "./ImageItem.css";

const ImageItem = ({ altText, bigger, picture }) => {
  return (
    <div className={`item-image${bigger ? "-bigger" : ""}`}>
      <img src={picture} alt={altText} />
    </div>
  );
};

export default ImageItem;

ImageItem.propTypes = {
  altText: PropTypes.string.isRequired,
  bigger: PropTypes.bool,
  picture: PropTypes.string.isRequired,
};
