import styles from './Profile.module.css';
import Intro from '../../component/Intro/Intro'
const React = require("react")

export default function Main() {
  
  return (
    <>
    <form action="/profile" method="POST">
     <input type="submit" value="createa new Post" />
     </form>

    </>
  )
};

