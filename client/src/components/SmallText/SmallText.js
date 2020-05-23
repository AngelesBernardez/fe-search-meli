import React from "react";

import "./SmallText.css";

const SmallText = ({ grey, smaller, text }) => {
  return (
    <p className={`small-text ${grey && "grey"} ${smaller && "smaller"}`}>
      {text}
    </p>
  );
};

export default SmallText;
