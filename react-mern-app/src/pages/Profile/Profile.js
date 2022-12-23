import styles from './Profile.module.css';
import Intro from '../../component/Intro/Intro'
export default function Main(props) {
  return (
    <>

      <form className={styles.Profile} action="/profile" method="POST">

        <div>
          <input type="text" name="profile-picture" />
        </div>

        <div> 
        <textarea id="subject" name="" placeholder="Write something.."></textarea>
        </div>

       
        <div>
          <input type="text" name="Hobbies" />
        </div>

       
          
          
      </form>
      <input type="submit" value="Submit" />
    </>
  )
};