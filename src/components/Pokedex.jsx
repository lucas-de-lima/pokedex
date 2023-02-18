import React, { useContext, useEffect, useState } from "react";
import "./Pokedex.css";
import pokedexImg from "../images/pokedex.png";
import PokedexContext from "../context/PokedexContext";
import useFetchPokemon from "../hook/useFetchPokemon";

function Pokedex() {
  const [search, setSearch] = useState("");

  const { pokemonId } = useContext(PokedexContext);
  const { fetchPokemon } = useFetchPokemon();

  useEffect(() => {
    fetchPokemon(25);
  }, []);

  const handlePrev = () => {
    if (pokemonId === 1) {
      return;
    }
    fetchPokemon(pokemonId - 1);
  };

  const handleNext = () => {
    if (pokemonId === 649) {
      return;
    }
    fetchPokemon(pokemonId + 1);
  };

  const searchPokemon = (e) => {
    e.preventDefault();
    fetchPokemon(search);
    setSearch("");
  };

  return (
    <>
      <form className="form" onSubmit={searchPokemon}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className="input__search"
          placeholder="Name or Number"
        />
      </form>
      <div className="buttons">
        <button onClick={handlePrev} className="button">
          Prev
        </button>
        <button onClick={handleNext} className="button">
          Next
        </button>
      </div>
      <img src={pokedexImg} alt="pokedex" />
    </>
  );
}

export default Pokedex;
