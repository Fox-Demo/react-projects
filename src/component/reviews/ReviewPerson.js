import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import "./Reviews.css";

function ReviewPerson({ id, name, job, image, text, nextOne, randomOne }) {
  return (
    <figure className="reviews-person">
      <div>
        <img src={image} width={150} height={150} />
        <span>
          <FaQuoteRight />
        </span>
      </div>
      <figcaption>
        <p className="reviews-name">{name}</p>
        <p className="reviews-career">{job}</p>
        <p className="reviews-describe">{text}</p>
      </figcaption>
      <div className="reviews-next-btn">
        <button onClick={() => nextOne(-1)}>
          <FaChevronLeft />
        </button>
        <button onClick={() => nextOne(1)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="reviews-random-btn" onClick={() => randomOne()}>
        Surprise Me
      </button>
    </figure>
  );
}

export default ReviewPerson;
