import { Link } from "react-router-dom";
import styles from './Nav.module.css';

export default function Nav() {
  return (

    <nav className={styles.Nav} >
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
  )
}