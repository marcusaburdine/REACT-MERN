import styles from './Profile.module.css';
import Intro from '../../component/Intro/Intro'
const React = require("react")
export default function Main({data}) {
  console.log(data)
  return (
    <>
      <form action={`/profile/${data._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={data.name} /><br />
        Avatar: <input type="text" name="avatar" defaultValue={data.avatar} /><br />
        Biography: <input type="text" name="biography" defaultValue={data.biography} /><br />
        Hobbies:   <input type="text" name=" hobbies" defaultValue={data.biography} /><br />  
        <input type="submit" value={`Edit ${data[0].name}`} />
      </form>

      <form action={`/profile/${data._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>

      <form action="/profile" method="POST">
          Post: <input type="text" name="post" /><br />

          <input type="submit" value="Create Post" />
        </form>


    </>
  )
};

{/* <form className={styles.Profile} action="/profile" method="POST">

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
<input type="submit" value="Submit" /> */}