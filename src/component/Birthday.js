import { useState } from "react";
import "./Birthday.css";

function Birthday() {
  const [people, setPeople] = useState(0);
  return (
    <div className="birthday-main">
      <main className="birthday-info">
        <h3 className="birthday-title">{people} birthday today</h3>
        <button className="clean-btn">Clean All</button>
      </main>
    </div>
  );
}

export default Birthday;
