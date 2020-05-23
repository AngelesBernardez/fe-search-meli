import React from "react";

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
