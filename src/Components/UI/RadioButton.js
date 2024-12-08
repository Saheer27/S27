import React from "react";

const RadioButton = ({ type, className, value, name, id, labelClassName }) => {
  return (
    <input
      type={type}
      className={className}
      value={value}
      name={name}
      id={id}
      labelClassName={labelClassName}
    />
  );
};

export default RadioButton;
