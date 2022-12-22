import styles from './Intro.module.css';
export default function Main (props){
    return(
      <>
      <div className='intro'>
    <h1>This is the Intro Component</h1>
    <button className='edit-bio'>Edit Bio</button>
    <button className='edit-details'>Edit Details</button>
    <button className='edit-details'>Edit Hobbies</button>
    </div>
    </>
  )};