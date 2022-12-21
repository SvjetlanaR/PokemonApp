import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonPage() {
  const [pokeDetails, setPokeDetails] = useState({
    sprites: {
      front_default: "",
    },
  });
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPokeDetails(res.data))
      .catch((err) => console.log(err));
  }, [name]);
  //console.log(pokeDetails);

  return (
    <div className="container">
      <div className="row">
        <div className=" mx-auto my-5">
          <h3>Pokemon Details</h3>
          <h2>{pokeDetails.name}</h2>
          <img src={pokeDetails.sprites.front_default} alt={pokeDetails.name} />
          <p>Height: {pokeDetails.height}</p>
          <p>Weight: {pokeDetails.weight}</p>
          <p>Id: {pokeDetails.id}</p>
        </div>
      </div>
    </div>
  );
}
