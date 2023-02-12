import React, { useEffect, useState }from 'react'
import pokedexImg from '../images/pokedex.png'
import './Pokedex.css'
import Pokemon from './Pokemon'


function Pokedex() {
    const [pokemon, setPokemon] = useState({});
    const [pokemonId, setPokemonId] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {    
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then(response => response.json())
        .then(data => {
            const pokemon = {
                name: data.name,
                id: data.id,
                img: data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
            }
            setPokemon(pokemon);
        }).catch(() => setPokemon({erro: 'Não encontrado'}))
    }, [pokemonId])

    

    const handleNext = () => {
        if(pokemonId === 1279) {
            return
        }
        setPokemonId( pokemonId +1 )
    }

    const handlePrev = () => {
        if(pokemonId === 1) {
            return
        }
        setPokemonId( pokemonId -1 )
    }

    const searchByName = (event) => {
        event.preventDefault()
        fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}/`)
        .then(response => response.json())
        .then(data => {
            const pokemon = {
                name: data.name,
                id: data.id,
                img: data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
            }
            setPokemon(pokemon);
        }).catch(() => setPokemon({erro: 'Não encontrado'}))
    }

    console.log(search);

  return (
    <main>
        <Pokemon pokemon={pokemon}/>
        <form className='form' onSubmit={searchByName}>
            <input
            value={search}
            onChange={ (e) => setSearch(e.target.value) }
            type="search"
            className="input__search"
            placeholder="Name or Number"
            />
        </form>
        
        <div className="buttons">
        <button onClick={handlePrev} className="button btn-prev">Prev &lt;</button>
        <button onClick={handleNext} className="button btn-next">Next &gt;</button>
        </div>
        <img src={pokedexImg} alt="pokedex" className='pokedex'/>
    </main>
  )
}

export default Pokedex