
import Post from "../../component/Post/Post"
import styles from "./Home.module.css"

function Home() {



  return (
    <div className={styles.home}>
      <header className={styles.header}><h1>RESOURCES</h1></header>
      <div className={styles.api}><a href="https://pokeapi.co/docs/v2"><strong><h1>API</h1></strong></a></div>
      <div className={styles.facebook}><a href="https://www.facebook.com/"><strong><h1>LAYOUT</h1></strong></a></div>
      <div className={styles.instagram}></div>
      <div className={styles.posts}></div>
    </div>
    );
}

export default Home;