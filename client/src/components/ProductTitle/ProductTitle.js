import React from "react";
import PropTypes from "prop-types";
import "./ProductTitle.css";

const ProductTitle = ({ bold, title }) => {
  return (
    <p className={`product-title ${typeof bold !== "undefined" ? "bold" : ""}`}>
      {title}
    </p>
  );
};

export default ProductTitle;

ProductTitle.propTypes = {
  bold: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
