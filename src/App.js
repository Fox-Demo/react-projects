import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="homepage">
      <Link to="/birthday">Go to Birthday</Link>
      <Link to="/tours">Go to Tours</Link>
      <Link to="/reviews">Go to Reviews</Link>
      <Link to="/accordion">Go to Accordion</Link>
    </main>
  );
}

export default App;
