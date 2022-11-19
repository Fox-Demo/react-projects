import React, { useState } from "react";
import Food from "./Food";
import "./Menu.css";
import data from "./Data";

const Menu = () => {
  const [food, setFood] = useState(data);

  const categoryFilter = (category) => {
    if (category == "all") {
      setFood(data);
    } else {
      setFood(data.filter((food) => food.category == category));
    }
  };

  return (
    <div className="menu">
      <header className="menu__header">
        <h1 className="header__title">Our Menu</h1>
        <div className="header__underline"></div>
        <nav className="header__nav">
          <p onClick={() => categoryFilter("all")} className="nav__category">
            all
          </p>
          <p
            onClick={() => categoryFilter("breakfast")}
            className="nav__category"
          >
            breakfast
          </p>
          <p onClick={() => categoryFilter("lunch")} className="nav__category">
            lunch
          </p>
          <p onClick={() => categoryFilter("shakes")} className="nav__category">
            shakes
          </p>
        </nav>
      </header>
      <main className="menu__main">
        {food.map((item) => {
          return <Food key={item.id} {...item} />;
        })}
      </main>
    </div>
  );
};

export default Menu;
