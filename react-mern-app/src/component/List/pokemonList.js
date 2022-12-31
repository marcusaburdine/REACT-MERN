import React from 'react';
import Index from '../Index/pokeIndex';

export default function PokemonList({ pokemons }) {
    console.log(pokemons)
    return(
    <div className='pokemon-list'>
        {pokemons.map((current) => (
            <Index key={current.name} pokemons={pokemons}></Index>
           
        ))}
    </div>
     )
};

