import { useState, useEffect } from 'react';
import Display from '../../component/Display/PokemonDisplay';
import Form from '../../component/Form/PokemonForm';
import Ability from "../../component/Display/AbilitiesDisplay"


function Pokemon() {
    //State to hold movie data
    const [pokemon, setPokemon] = useState(null)
   
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
            console.log(pokemon)

        }
        catch (err) {
            console.eror(err)
         
        }
       
    }

    useEffect(() => { getPokemon() }, [])

   


    return (
        <div className="Pokemon">
            <>
                <Form getPokemon={getPokemon} />
                <Display pokemon={pokemon}  />
            </>
        </div>

    )
};

export default Pokemon

