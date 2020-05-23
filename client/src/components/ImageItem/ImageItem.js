import React from "react";

import "./ImageItem.css";

const ImageItem = ({ altText, bigger, picture }) => {
  return (
    <div className={`item-image${bigger ? "-bigger" : ""}`}>
      <img src={picture} alt={altText} />
    </div>
  );
};

export default ImageItem;
