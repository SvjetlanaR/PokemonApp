import { React } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import Error from "./Error";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=60&limit=60&`)
      .then((res) => setPokemon(res.data.results))
      .catch((err) => console.log(err));
  }, [search]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => setPokemon(res.data.results))
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [search]);

  if (error) {
    return <Error />;
  } else {
    return (
      <div>
        <h1>Pokemon List</h1>
        <SearchBar pokemon={pokemon} setSearch={setSearch} />
        {search.length === 0 ? (
          <div className="container">
            <div className="row">
              <NavLink to="/">HomePage</NavLink>
              {pokemon?.map((poke) => {
                return (
                  <div className="col-sm-4 col-6 mx-auto my-4" key={poke.url}>
                    <h3> {poke.name}</h3>
                    <Link to={`/pokemon/${poke.name}`}>
                      <Button variant="primary">View more</Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <h2>{search}</h2>
            <Link to={`/pokemon/${search}`}>
              <Button variant="primary">View more</Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
