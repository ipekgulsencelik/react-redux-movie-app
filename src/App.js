import logo from "./logo.svg";
import "./App.css";

import MoviesPage from "./components/pages/MoviesPage";

import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <p>
        <Link to="movies">Movies</Link>
      </p>

      <Routes>
        <Route path="/movies" Component={MoviesPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
