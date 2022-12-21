import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import PokemonList from "./components/PokemonList";
import PokemonPage from "./components/PokemonPage";

import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
      </Routes>
    </div>
  );
}

export default App;
