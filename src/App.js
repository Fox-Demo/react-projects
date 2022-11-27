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
        <Link className="homepage__link" to="/menu">
          Menu
        </Link>
        <Link className="homepage__link" to="/tabs">
          Tabs
        </Link>
        <Link className="homepage__link" to="/color_generator">
          Color Generator
        </Link>
      </header>
    </main>
  );
}

export default App;
