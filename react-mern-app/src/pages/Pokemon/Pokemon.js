import styles from "./Pokemon.module.css"
import { useState, useEffect } from 'react';
import Display from '../../component/Display/PokemonDisplay';
import Form from '../../component/Form/PokemonForm';


function Pokemon() {
    const [pokemon, setPokemon] = useState(null)
    const getPokemon = async (searchTerm) => {
        
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
            const pokemon = await response.json();
            setPokemon(pokemon)
        }
        catch (err) {
            console.eror(err)
        }
        console.log(pokemon)
    }
    useEffect(() => { getPokemon() }, [])

    return (
        <div className={styles.pokemon}>
            <header className={styles.header}><h1>POKEMON</h1></header>
            <Form getPokemon={getPokemon} />
            <Display pokemon={pokemon} />
        </div>

    )
}

export default Pokemon

