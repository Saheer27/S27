import React from "react";

const InputButton = ({
  type,
  className,
  name,
  autoFocus,
  value,
  onClick,
  ref,
  key,
  placeholder,
  onChange,
  onKeyDown,
  validation,
  maxLength,
  minLength,
}) => {
  return (
    <input
      key={key}
      ref={ref}
      type={type}
      name={name}
      className={className}
      value={value}
      onClick={onClick}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      validation={validation}
      maxLength={maxLength}
      minLength={minLength}
      autoFocus={autoFocus}
    />
  );
};

export default InputButton;
