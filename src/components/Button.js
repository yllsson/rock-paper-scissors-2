import React from "react";
import PropTypes from "prop-types";

export const Button = ({ className, value, id, onClick, children }) => (
  <button className="className" value={value} id={id} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
