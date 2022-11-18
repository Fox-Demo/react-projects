import React, { useState } from "react";
import { data } from "./Data";
import Info from "./Info";
import "./accordion.css";

function Accordion() {
  const [info, setInfo] = useState(data);

  return (
    <div id="Accordion">
      <main className="main">
        <h2 className="main__title">Questions And Answers About Login</h2>
        <aside className="main__questions">
          {info.map((item) => {
            return <Info {...item} />;
          })}
        </aside>
      </main>
    </div>
  );
}

export default Accordion;
