import React from "react";

import "./input.estilo.css";

function Input({
  name,
  value = "",
  placeholder,
  label,
  type = "text",
  onChange,
}) {
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        className="input"
      />
    </div>
  );
}

export default Input;
