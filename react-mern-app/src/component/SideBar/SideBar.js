import { Link } from "react-router-dom";
import styles from './SideBar.module.css';

export default function SideBar() {
  return (

    <nav className={styles.SideBar} >


      <Link to="/profile">
        <img  src="https://cdn-icons-png.flaticon.com/512/188/188954.png" alt="img" />
        <p><strong>Profile</strong></p>
      </Link>

      <Link to="/pokemon">
        <img src="https://cdn-icons-png.flaticon.com/512/188/188916.png" alt="img" />
        <p><strong>Pokemon</strong></p>
      </Link>

      <Link to="/abilities">
        <img  src="https://icon-library.com/images/pokemon-ball-icon/pokemon-ball-icon-22.jpg" alt="img" />
        <p><strong>Abilities</strong></p>
      </Link>
    </nav>
  )
}