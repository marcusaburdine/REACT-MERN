import styles from './Profile.module.css';
import Intro from '../../component/Intro/Intro'
export default function Main (props){
    return(
      <>
    
    <form action="/profile" method="POST">
          Profile Picture: <input type="text" name="profile-picture" /><br />
          Bio: <input type="text" name="bio" /><br />
          Hobbies: <input type="text" name="Hobbies"/><br />
          <input type="submit" value="Submit" />
          </form>
    </>
  )};