import React, { useState } from "react";
import "./Tour.css";

function Tour({ id, image, name, price, info, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <figure key={id} className="tour-info">
      <img src={image} />
      <figcaption>
        <article className="tour-title">
          <h4>{name} </h4>
          <h4 className="price">{"$" + price}</h4>
        </article>
        <article className="tour-describe">
          <p>
            {readMore ? info : info.substring(0, 200) + "..."}
            <button
              className="read-btn"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
        </article>
        <button className="interested-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </figcaption>
    </figure>
  );
}

export default Tour;
