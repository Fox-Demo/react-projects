import { useState } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState(0);
  return (
    <div className="App">
      <main className="birthday-info">
        <h3>{people} birthday today</h3>
        <button className="clean-btn">Clean All</button>
      </main>
    </div>
  );
}

export default App;
