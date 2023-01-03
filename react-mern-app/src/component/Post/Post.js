import styles from './Post.module.css';
import post from "../../postData"
import React, { useRef, useState } from 'react'



function CRUD() {
console.log(post)
  const [posts, setPost] = useState(post)
  const [updateState, setUpdateState] = useState(-1)
  return (
<>
<div className={styles.mainContainer}><Create setPost={setPost} /></div>
    
      <div className={styles.bodyContainer}>
        
        <form onSubmit={handleUpdate}>
            {
              posts.map((current) => (
                updateState === current.id ? <Edit current={current} posts={posts} setPost={setPost} /> :
                  <div>
                    <div className={styles.bodyText}>{current.body}</div>
                    <button className='edit' onClick={() => handleEdit(current.id)} type="button">Edit</button>
                    <button className='delete' onClick={() => handleDelete(current.id)} type="button">Delete</button>
                   
                  </div>
                  
                
                  
              ))
            }
          
        </form>
        
      </div>
    
    </>
  )

  function handleUpdate(event) {
    event.preventDefault()
    setUpdateState(-1)

  }
  function handleEdit(id) {
    setUpdateState(id)
  }
  function handleDelete(id) {
    const newPost = posts.filter((li) => li.id !== id)
    setPost(newPost)
  }

}

function Edit({ current, posts, setPost }) {
  function handleInput(event) {
    const newPost = posts.map(li => (
      li.id === current.id ? { ...li, [event.target.name]: event.target.value } : li
    ))

    setPost(newPost)
  }

  return (
    <div className={styles.edit}>
      <input type="text" name='body'onChange={handleInput} value={current.body} />
      <button type='submit'>Update</button>
      </div>
  )
}


function Create({ setPost }) {
  
  const bodyRef = useRef()

  function handleSubmit(event) {
    event.preventDefault();
    const body = event.target.elements.body.value;
    const newPost = [
      {
        id: 4,
        body
      },
    ]
    setPost((prevPost) => {
      return prevPost.concat(newPost)
    })
   
    bodyRef.current.value = ""
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
      <input className={styles.creatPost} type="text" name="body" placeholder="Speak your mind... " ref={bodyRef} />
      <button type="submit">Create Post</button>
      </div>
      
    </form>
    </div>
   
  )
}

export default CRUD;