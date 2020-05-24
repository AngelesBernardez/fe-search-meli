import React from "react";
import PropTypes from "prop-types";
import "./MainButton.css";

const MainButton = ({ text }) => {
  return <button className="button">{text}</button>;
};

export default MainButton;

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
};
