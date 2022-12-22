import styles from './Post.module.css';
export default function Post() {
    return (
  
      <section className={styles.Post} >
        <div className='post-header'>
        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-poke-food-illustration_52683-82121.jpg?w=2000"></img>
        <input className="search" type="text" placeholder='Speak Your Mind...'></input>
        </div>
      </section>
    )
  }