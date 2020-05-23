import React from "react";

import "./ProductTitle.css";

const ProductTitle = ({ bold, title }) => {
  return <p className={`product-title ${bold && "bold"}`}>{title}</p>;
};

export default ProductTitle;
