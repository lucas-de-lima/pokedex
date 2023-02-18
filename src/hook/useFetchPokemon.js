import { useContext } from "react";
import PokedexContext from "../context/PokedexContext";

const useFetchPokemon = () => {
  const { setPokemon, pokemon, setPokemonId } = useContext(PokedexContext);

  const fetchPokemon = (search) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`)
      .then((response) => response.json())
      .then((data) => {
        const pokeData = {
          name: data.name,
          id: data.id,
          img: data["sprites"]["versions"]["generation-v"]["black-white"][
            "animated"
          ]["front_default"],
        };
        setPokemon(pokeData);
        setPokemonId(pokeData.id);
      });
  };
  return { pokemon, fetchPokemon };
};

export default useFetchPokemon;
