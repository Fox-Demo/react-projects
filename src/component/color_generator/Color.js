import React, { useEffect, useState } from "react";

const Color = ({ rgb, weight, type, hex }) => {
  const [hint, setHint] = useState(false);
  const _rgb = rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHint(false);
      console.log("set");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [hint]);

  return (
    <div
      className="color"
      style={{
        backgroundColor: `rgb(${_rgb})`,
        color: `${type == "shade" && "#fff"}`,
      }}
      onClick={() => {
        setHint(true);
        navigator.clipboard.writeText(`#${hex}`);
      }}
    >
      <p>{`${weight}%`}</p>
      <p>{`#${hex}`}</p>
      {hint && <p className="color__hint">Copied!</p>}
    </div>
  );
};

export default Color;
