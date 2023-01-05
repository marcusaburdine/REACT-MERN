import styles from './AbilitiesDisplay.module.css';

export default function PokemonDisplay({ ability }) {

  const loaded = () => {

    return (
      <>
        <div className={styles.abilitiesTitle}><h1>{`${ability.name.toUpperCase()}`}</h1></div>
        <div className={styles.abilitiesBody}><h3>{ability.effect_entries[1].effect}</h3></div>
      </>
    );
  }
  const loading = () => {
    return
  }
  return ability ? loaded() : loading()
};
