import React from "react";

export const Button = ({ className, value, id, onClick, children }) => (
  <button className="className" value={value} id={id} onClick={onClick}>
    {children}
  </button>
);
