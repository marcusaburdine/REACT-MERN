import styles from "./Post.module.css"
import { useState, useRef } from "react"

function CRUD() {
  const post = [{

    id: 1,
    body: "Friends, I am the realest trainer alive.",

  }];
  const [posts, setPost] = useState(post)
  const [updateState, setUpdateState] = useState(-1)
  return (
    <>
      <div className={styles.input}><Create setPost={setPost} /></div>

      <div className={styles.body} >

        <form onSubmit={handleUpdate}>
          {
            posts.map((current) => (
              updateState === current.id ? <Edit className={styles.body} current={current} posts={posts} setPost={setPost} /> :
                <>
                  <div>
                    <div className={styles.bdyval}>{current.body}</div>
                    <div className={styles.btn}><button onClick={() => handleEdit(current.id)} type="button">Edit</button>
                    <button onClick={() => handleDelete(current.id)} type="button">Delete</button>
                    </div>
                    
                  </div>
                </>
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
    <div>
      <input className={styles.create} type="text" name='body' onChange={handleInput} value={current.body} />
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
        id: 2,
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
        <div >
          <input className={styles.create} type="text" name="body" placeholder="Speak your mind... " ref={bodyRef} />
          <div><button className={styles.createbtn} type="submit">Create Post</button></div>
        </div>

      </form>
    </div>

  )
}

export default CRUD;