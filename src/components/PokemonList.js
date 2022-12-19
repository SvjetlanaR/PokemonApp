import { React } from "react";
import { Link, NavLink, useLinkClickHandler } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => setPokemon(res.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Pokemon List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="find your pokemon"></input>
        <button>search</button>
      </form>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/pokemon/:name">PokemonPage</NavLink>
      <div>
        {pokemon.map((poke) => {
          return (
            <div className="pokemon-list" key={poke.url}>
              <h3> {poke.name}</h3>
              <Link to={`/pokemon/${poke.name}`}>
                <button>View more</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
