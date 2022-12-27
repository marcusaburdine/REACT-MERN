import { Link } from "react-router-dom";
import styles from './SideBar.module.css';

export default function SideBar() {
  return (

    <nav className={styles.SideBar} >


      <Link to="/profile">
        <img className="sideBar-profile" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-poke-food-illustration_52683-82121.jpg?w=2000" alt="img" />
        <p><strong>Profile</strong></p>
      </Link>

      <Link to="/pokemon">
        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-poke-food-illustration_52683-82121.jpg?w=2000" alt="img" />
        <p><strong>Pokemon</strong></p>
      </Link>

      <Link to="/abilities">
        <img className="sideBar-profile" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-poke-food-illustration_52683-82121.jpg?w=2000" alt="img" />
        <p><strong>Abilities</strong></p>
      </Link>
    </nav>
  )
}