import React from "react";
import { useState } from "react";

export default function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="find your pokemon by name or pokedex"
          onChange={handleInput}
          value={value}
        ></input>
        <button className="btn btn-secondary">search</button>
      </form>
    </div>
  );
}
