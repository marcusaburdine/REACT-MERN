import Pokemon from "../../pages/Pokemon/Pokemon";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function PokemonDisplay({ pokemon },{ability}) {
  //The component must return some JSX
 

  const loaded = () => {

    
    return (
      <>
        <h1>{pokemon.id}</h1>
        <h1>{pokemon.abilities[0].ability.name}</h1>
        <h1>{pokemon.abilities[0].ability.url}</h1>
        <h1>{pokemon.abilities[1].ability.name}</h1>
      </>
    );

  }

  const loading = () => {
    return <h1>No Pokemon to Display</h1>
  }

  return pokemon ? loaded() : loading()
};

  // We must export the component to use it in other files