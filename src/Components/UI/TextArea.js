import React from 'react';

const TextArea = ({
  rows = 40,
  cols = 50,
  type,
  className,
  name,
  value,
  onClick,
  ref,
  placeholder,
  onChange,
  validation = {},
  maxLength,
  minLength,
  autoFocus
}) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      cols={cols}
      type={type}
      autoFocus={autoFocus}
      className={className}
      name={name}
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
    />
  );
};

export default TextArea;