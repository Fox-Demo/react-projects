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
      <header className="tour-header">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </header>

      <main className="tour-main">
        {tours.map((tour) => {
          return (
            <figure key={tour.id} className="tour-info">
              <img src={tour.image} />
              <figcaption>
                <article className="tour-title">
                  <h4>{tour.name} </h4>
                  <h4 className="price">{"$" + tour.price}</h4>
                </article>
                <article className="tour-describe">
                  <p>
                    {tour.info.substring(0, 200) + "... "}
                    <button className="read-btn">Read More</button>
                  </p>
                </article>
                <button
                  className="interested-btn"
                  onClick={() => {
                    const result = tours.filter((index) => {
                      return index.id !== tour.id;
                    });

                    setTours(result);
                  }}
                >
                  Not Interested
                </button>
              </figcaption>
            </figure>
          );
        })}
      </main>
    </div>
  );
};
