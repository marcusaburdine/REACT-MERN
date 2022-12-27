

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function PokemonDisplay({ ability }) {
  //The component must return some JSX

  
  const loaded = () => {


    return (
      <>
      <h1>{ability.name}</h1>
        <h1>{ability.effect_entries[1].effect}</h1>
      
        {/* <h1>{ability.effect_entries[0].effect}</h1> */}

      </>
    );

  }

  const loading = () => {
    return <h1>No Abilities to Display</h1>
  }

  return ability ? loaded() : loading()
};

  // We must export the component to use it in other files