import React from "react";
import BreadcrumbItem from "./BreadcrumbItem/BreadcrumbItem";
import "./Breadcrumb.css";

const Breadcrumb = ({ content }) => {
  const renderItems = (categories) => {
    return categories.map((category, index) => {
      return <BreadcrumbItem key={index} text={category} />;
    });
  };

  return (
    <ul className="breadcrumb">{content.length > 0 && renderItems(content)}</ul>
  );
};

export default Breadcrumb;
