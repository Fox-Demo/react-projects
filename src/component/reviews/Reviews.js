import React, { useState } from "react";
import ReviewPerson from "./ReviewPerson";
import data from "./Data";
import "./Reviews.css";

function Reviews() {
  const [index, setIndex] = useState(0);

  function nextOne(num) {
    if (index + num >= 0 && index + num < data.length) {
      setIndex(index + num);
    }
  }

  function randomOne() {
    let rand = Math.floor(Math.random() * data.length);
    if (rand == index) {
      if (rand + 1 >= 0 && rand + 1 < data.length) {
        rand += 1;
      }
    }
    setIndex(rand);
  }

  return (
    <div className="reviews-main">
      <article className="reviews-container">
        <header className="reviews-header">
          <h4 className="reviews-title">Our Reviews</h4>
          <div className="underline"></div>
        </header>
        <ReviewPerson
          {...data[index]}
          nextOne={nextOne}
          randomOne={randomOne}
        />
      </article>
    </div>
  );
}

export default Reviews;
