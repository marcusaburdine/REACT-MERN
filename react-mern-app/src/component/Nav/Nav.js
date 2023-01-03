import { Link } from "react-router-dom";
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <>
<div className={styles.logoContainer}>
  <img className={styles.logoImage} src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_960_720.png" alt="img" />
  <input placeholder="Search"></input>
</div>
    <nav className={styles.nav} >
      
      <Link to="/home">
      <strong>Home</strong>
      </Link>

      <Link to="/marketplace">
          <strong>Marketplace</strong>
      </Link>

      <Link to="/groups">
      <strong>Groups</strong>
      </Link>

      <Link to="/gaming">
      <strong>Gaming</strong>
      </Link>
    </nav>
    
    
    </>
  )
}