import React, { useEffect, useState } from "react";
import "./Tour.css";
import Tour from "./Tour";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";
export const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTour = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  };

  const removeTour = (id) => {
    const result = tours.filter((index) => {
      return index.id !== id;
    });

    setTours(result);
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (tours.length == 0) {
    return (
      <div className="tour-container">
        <header className="tour-header">
          <h1 id="header-title">No Tours Left</h1>
          <div className="underline"></div>
          <button
            className="refresh-btn"
            onClick={() => {
              setLoading(true);
              fetchTour();
            }}
          >
            Refresh
          </button>
        </header>
      </div>
    );
  }
  return (
    <div className="tour-container">
      <header className="tour-header">
        <h1 id="header-title">Our Tours</h1>
        <div className="underline"></div>
      </header>

      <main className="tour-main">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </main>
    </div>
  );
};
