// components/Divider.js
import React from "react";
import PropTypes from "prop-types";

const Divider = () => {
  const dividerStyle = {
    width: "100%",
    height: "2px",
    background: "#ccc",
    margin: ` "20px" 0`,
  };

  return <div style={dividerStyle}></div>;
};

Divider.propTypes = {
  color: PropTypes.string, // Color de fondo del divisor
  thickness: PropTypes.string, // Grosor del divisor (píxeles, em, rem, etc.)
  marginY: PropTypes.string, // Margen vertical del divisor (píxeles, em, rem, etc.)
};

export default Divider;
