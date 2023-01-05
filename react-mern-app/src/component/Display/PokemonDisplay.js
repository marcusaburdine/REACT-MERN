import styles from "./PokemonDisplay.module.css"

export default function PokemonDisplay({ pokemon }) {
  const loaded = () => {

    return (
      <>
      <div className={styles.pokemonTitle}><h1>{`${pokemon.name.toUpperCase()}`}</h1></div>
      <div className={styles.pokemonDisplay}>
        <img className={styles.image} alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
      </div>
      </>
    );
  }
  const loading = () => {
    return
  }
  return pokemon ? loaded() : loading()
};
