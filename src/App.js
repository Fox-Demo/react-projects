import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="homepage">
      <h1 className="homepage__title">Rain Fox projects</h1>
      <header className="homepage__list">
        <Link className="homepage__link" to="/birthday">
          Birthday
        </Link>
        <Link className="homepage__link" to="/tours">
          Tours
        </Link>
        <Link className="homepage__link" to="/reviews">
          Reviews
        </Link>
        <Link className="homepage__link" to="/accordion">
          Accordion
        </Link>
      </header>
    </main>
  );
}

export default App;
