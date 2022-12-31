import React from 'react';



  const PokemonIndex = props =>(
    <div className="pokemon-index">
        <a href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`} target="_blank" rel="noreferrer">
            <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}/>
            <h2>{props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</h2>
        </a>
    </div>
);

export default PokemonIndex