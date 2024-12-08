import React from "react";

const Button = ({
  type,
  className,
  value,
  name,
  id,
  labelClassName,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={className}
      value={value}
      onClick={onClick}
      name={name}
      id={id}
    >
      <span className={labelClassName}>{children}</span>
    </button>
  );
};

export default Button;
