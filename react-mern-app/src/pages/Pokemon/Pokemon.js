import styles from "./Pokemon.module.css"
import { useState, useEffect } from 'react';
import  PokemonList from '../../component/List/pokemonList'
import Display from '../../component/Display/PokemonDisplay';
import Form from '../../component/Form/PokemonForm';

function Pokemon() {
    //State to hold movie data
    const [pokemon, setPokemon] = useState()
    const [pokemons, setPokemons] = useState([])


    //variable with your apiKey


    //Function to getMovies
    const getPokemon = async (searchTerm) => {
        // make fetch request and store response
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)

            // Parse JSON response into a javascript object
            const pokemon = await response.json();
            //set the Movie state to the movie
            setPokemon(pokemon)
            // console.log(pokemon)

        }
        catch (err) {
            console.eror(err)

        }

    }

    //Function to getMovies
    const getPokemons = async () => {
        // make fetch request and store response
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=500`)

            // Parse JSON response into a javascript object
            const pokemons = await response.json();
            //set the Movie state to the movie
            setPokemons(pokemons)
            // console.log(pokemons)

        }
        catch (err) {
            console.eror(err)

        }

    }

    useEffect(() => { getPokemon() }, [])
    useEffect(() => { getPokemons() }, [])




    return (
        <div className={styles.pokemon}>
                
            <Form getPokemon={getPokemon} />
            <Display pokemon={pokemon} />
            {/* <PokemonList pokemons={pokemons} ></PokemonList> */}

        </div>

    )
};

export default Pokemon


