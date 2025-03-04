import React from "react";

const InputComponent = ({ value, onChange, label }) => {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </>
  );
};

export default InputComponent;
