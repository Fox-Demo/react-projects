import { useState } from "react";
import "./Birthday.css";
import Data from "./Data";

export const Birthday = () => {
  const [people, setPeople] = useState(Data);
  return (
    <div className="birthday-main">
      <main className="birthday-people">
        <h3 className="birthday-title">{people.length} birthday today</h3>
        {people.map((index) => {
          return (
            <div className="person">
              <img src={index.image} width="75px" height="75px"></img>
              <section>
                <p className="name">{index.name}</p>
                <p className="age">{index.age} years</p>
              </section>
            </div>
          );
        })}
        <button
          className="clean-btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clean All
        </button>
      </main>
    </div>
  );
};
