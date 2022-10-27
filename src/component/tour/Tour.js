import React, { useEffect, useState } from "react";
import "./Tour.css";

const url = "https://course-api.com/react-tours-project";
export const Tour = () => {
  const [tours, setTours] = useState([]);

  const fetchTour = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
  };

  useEffect(() => {
    fetchTour();
  }, []);
  return (
    <div className="tour-container">
      <article className="tour-title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </article>
      <main className="tour-main">
        {tours.map((tour) => {
          return (
            <figure className="tour-info">
              <img src={tour.image} />
              <figcaption>
                <h2>{tour.name}</h2>
                <p>{tour.price}</p>
                <p>{tour.info}</p>
                <button>Not interested</button>
              </figcaption>
            </figure>
          );
        })}
      </main>
    </div>
  );
};
