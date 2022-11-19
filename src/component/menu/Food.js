import React from "react";
import "./Menu.css";

const Food = ({ title, category, price, img, desc }) => {
  return (
    <div className="food">
      <img src={img} alt={title} className="food__img" />
      <article className="food__info">
        <div className="food__header">
          <p className="food__header--title">{title}</p>
          <p className="food__header--price">${price}</p>
        </div>
        <hr />
        <p className="food__info--desc">{desc}</p>
      </article>
    </div>
  );
};

export default Food;
