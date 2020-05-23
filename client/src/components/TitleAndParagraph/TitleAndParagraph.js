import React from "react";

import "./TitleAndParagraph.css";

const TitleAndParagraph = ({ paragraph, title }) => {
  return (
    <React.Fragment>
      <h4 class="paragraph-title">{title}</h4>
      <p class="paragraph">{paragraph}</p>
    </React.Fragment>
  );
};

export default TitleAndParagraph;
