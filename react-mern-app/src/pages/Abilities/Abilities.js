import { useState, useEffect } from 'react';
import Display from '../../component/Display/AbilitiesDisplay';
import Form from '../../component/Form/AbilitiesForm';

function Abilities() {
    //State to hold movie data
    
    const [ability, setAbility] = useState(null)
    //variable with your apiKey

    //Function to getMovies
    const getAbility = async (searchTerm) => {
        // make fetch request and store response
        try {
            const response = await fetch(`//pokeapi.co/api/v2/ability/${searchTerm}`)

            // Parse JSON response into a javascript object
            const ability = await response.json();
            //set the Movie state to the movie
            setAbility(ability)
            console.log(ability)
        }
        catch (err) {
            console.eror(err)
        }
    }

    useEffect(() => { getAbility() }, [])



    return (
        <div className="Abilities">
            <>
                <Form getAbility={getAbility} />
                <Display ability={ability} />
            </>
        </div>

    )
};

export default Abilities