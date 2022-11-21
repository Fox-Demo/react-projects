import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "./Tabs.css";

const Tab = ({ title, company, dates, duties }) => {
  return (
    <div className="tab">
      <header className="tab__header">
        <p className="tab__header--title">{title}</p>
        <p className="tab__header--company">{company}</p>
        <p className="tab__header--dates">{dates}</p>
      </header>
      <article className="tab__info">
        {duties.map((duty) => {
          return (
            <div className="info__duty">
              <p className="info__duty--symbol">
                <MdOutlineDoubleArrow />
              </p>
              <p className="info__duty--text">{duty}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Tab;
