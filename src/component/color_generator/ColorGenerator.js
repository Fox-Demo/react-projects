import React, { useEffect, useState } from "react";
import "./style.css";
import Color from "./Color";
import Values from "values.js";

const ColorGenerator = () => {
  const [colorCodes, setColorCodes] = useState(new Values("#f15025").all(10));
  const [colorCode, setColorCode] = useState("");

  console.log(colorCodes[0]);

  const generateColor = (event) => {
    event.preventDefault();
    setColorCodes(new Values(colorCode).all(10));
  };

  return (
    <div className="colorGenerator">
      <header className="colorGenerator__header">
        <p className="colorGenerator__header--title">Color Generator</p>
        <form
          onSubmit={(e) => generateColor(e)}
          className="colorGenerator__form"
        >
          <input
            class="colorGenerator__form--input"
            placeholder="#f15025"
            onChange={(e) => {
              setColorCode(e.target.value);
            }}
          />
          <button className="colorGenerator__form--submit" type="submit">
            Submit
          </button>
        </form>
      </header>
      <main className="colorGenerator__main">
        {colorCodes.map((colorCode) => {
          return <Color {...colorCode} hex={colorCode.hex} />;
        })}
      </main>
    </div>
  );
};

export default ColorGenerator;
