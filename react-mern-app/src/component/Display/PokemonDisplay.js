

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function PokemonDisplay({ pokemon }) {
  //The component must return some JSX

  
  const loaded = () => {


    return (
      <>
        
          <h1>{pokemon.name}</h1>
          <h1>{pokemon.count}</h1>
        
        

      </>
    );

  }

  const loading = () => {
    return 
  }

  return pokemon ? loaded() : loading()
};

  // We must export the component to use it in other files