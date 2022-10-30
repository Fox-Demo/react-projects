import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="homepage">
      <Link to="/birthday">Go to Birthday</Link>
      <Link to="/tours">Go to Tours</Link>
      <Link to="/reviews">Go to Reviews</Link>
    </main>
  );
}

export default App;
