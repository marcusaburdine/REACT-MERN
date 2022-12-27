

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function PokemonDisplay({ pokemon }) {
  //The component must return some JSX

  
  const loaded = () => {


    return (
      <>
        <h1>{pokemon.name}</h1>
        
        <img src={pokemon.sprites.front_default}/>
        <h1>{pokemon.abilities[0].ability.name}</h1>
        
        

      </>
    );

  }

  const loading = () => {
    return <h1>No Pokemon to Display</h1>
  }

  return pokemon ? loaded() : loading()
};

  // We must export the component to use it in other files