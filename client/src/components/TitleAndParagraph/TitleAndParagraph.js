import React from "react";
import PropTypes from "prop-types";
import "./TitleAndParagraph.css";

const TitleAndParagraph = ({ paragraph, title }) => {
  return (
    <React.Fragment>
      <h4 className="paragraph-title">{title}</h4>
      <p className="paragraph">{paragraph}</p>
    </React.Fragment>
  );
};

export default TitleAndParagraph;

TitleAndParagraph.propTypes = {
  paragraph: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
