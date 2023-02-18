import { useState } from "react";
import PokedexContext from "./PokedexContext";

function PokedexProvider({ children }) {
  const [pokemon, setPokemon] = useState({});
  const [pokemonId, setPokemonId] = useState(25);

  const value = { pokemon, setPokemon, pokemonId, setPokemonId };

  return (
    <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
  );
}

export default PokedexProvider;
