import React from "react";
import "./BreadcrumbItem.css";
import PropTypes from "prop-types";

const BreadcrumbItem = ({ text }) => {
  return <li className="breadcrumb-item">{text}</li>;
};

export default BreadcrumbItem;

BreadcrumbItem.propTypes = {
  text: PropTypes.string.isRequired,
};
