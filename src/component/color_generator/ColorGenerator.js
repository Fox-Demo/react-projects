import React from "react";
import "./style.css";

const ColorGenerator = () => {
  return (
    <div className="color">
      <header className="color__header">
        <p className="color__header--title">Color Generator</p>
        <input alt="#000000" />
        <button>Submit</button>
      </header>
    </div>
  );
};

export default ColorGenerator;
