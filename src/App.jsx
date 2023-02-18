import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import PokedexProvider from "./context/PokedexProvider";

function App() {
  return (
    <PokedexProvider>
      <Pokedex />
      <Pokemon />
    </PokedexProvider>
  );
}

export default App;
