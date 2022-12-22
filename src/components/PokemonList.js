import { React } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import Error from "./Error";
import NavbarCustom from "./NavbarCustom";
import { useNavigate } from "react-router-dom";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=60&limit=60&`)
      .then((res) => setPokemon(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => navigate(`/pokemon/${search}`))
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
        <NavbarCustom />
        <h1>Pokemon List</h1>
        <SearchBar pokemon={pokemon} setSearch={setSearch} />
        <div className="container">
          <div className="row">
            {pokemon.map((poke) => {
              return (
                <div className="col-sm-4 col-6 mx-auto my-4" key={poke.url}>
                  <h3> {poke.name}</h3>
                  <Link to={`/pokemon/${poke.name}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
