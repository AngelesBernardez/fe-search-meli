import React from "react";
import "./BreadcrumbItem.css";

const BreadcrumbItem = ({ text }) => {
  return <li className="breadcrumb-item">{text}</li>;
};

export default BreadcrumbItem;
