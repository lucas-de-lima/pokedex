import React from 'react'
import './Pokemon.css';

function Pokemon({pokemon}) {

    if(pokemon === {}) {
        return (<p>carregando</p>)
    }

  return (
    <div>
      { !pokemon.erro ? 
        <img src={ pokemon.img } alt="pokemon" className="pokemon__image"></img> : <></>
      }
      <h1 className="pokemon__data">
      { !pokemon.erro ?
        <span className="pokemon__number">{ `${pokemon.id} - ` }</span> : <span></span>
       }
      
      
      { !pokemon.erro ? 
      <span className="pokemon__name">{ pokemon.name  }</span> 
      : <span className="pokemon__name">{ pokemon.erro }</span>
      }
      </h1>
    </div>
  )
}

export default Pokemon;