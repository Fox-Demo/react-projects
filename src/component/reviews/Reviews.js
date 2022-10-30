import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews-main">
      <article className="reviews-container">
        <header className="reviews-header">
          <h4 className="reviews-title">Our Reviews</h4>
          <div className="underline"></div>
        </header>
        <figure className="reviews-person">
          <div>
            <img
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
              width={150}
              height={150}
            />
            <span>
              <FaQuoteRight />
            </span>
          </div>
          <figcaption>
            <p className="reviews-name">susan smith</p>
            <p className="reviews-career">web developer</p>
            <p className="reviews-describe">
              I'm baby meggings twee health goth +1. Bicycle rights tumeric
              chartreuse before they sold out chambray pop-up. Shaman humblebrag
              pickled coloring book salvia hoodie, cold-pressed four dollar
              toast everyday carry
            </p>
          </figcaption>
          <div className="reviews-next-btn">
            <button>
              <FaChevronLeft />
            </button>
            <button>
              <FaChevronRight />
            </button>
          </div>
          <button className="reviews-random-btn"> Surprise Me</button>
        </figure>
      </article>
    </div>
  );
}

export default Reviews;
