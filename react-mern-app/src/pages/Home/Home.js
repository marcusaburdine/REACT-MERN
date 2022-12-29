import React, { useRef, useState } from 'react'


function CRUD() {
  const post = [
    {
      id: 1,
      title: "Deep Thoughts",
      body: "Friends, I am the realest coder alive",
      author: "Arthur",
    },
    {
      id: 2,
      title: "Sage Advice",
      body: "Friends, I am awesome and you are too",
      author: "Arthur",
      likes: 20,
    },
    {
      id: 3,
      title: "Is TI the Jadakiss of the South",
      body: "TI is severely underrated and we need to fix that expeditiously",
      author: "Arthur",
      likes: 40,
    },

  ]
  const [posts, setPost] = useState(post)
  const [updateState, setUpdateState] = useState(-1)
  return (
    <div className='crud'>
      <div>
        <Create setPost={setPost} />
        <form onSubmit={handleUpdate}>
          <table>
            {
              posts.map((current) => (
                updateState === current.id ? <Edit current={current} posts={posts} setPost={setPost} /> :
                  <tr>
                    <td>{current.title}</td>
                    <td>{current.body}</td>
                    <td>
                      <button className='edit' onClick={() => handleEdit(current.id)} type="button">Edit</button>
                      <button className='delete' onClick={() => handleDelete(current.id)} type="button">Delete</button>
                    </td>
                  </tr>
              ))
            }
          </table>
        </form>
      </div>
    </div>
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
    <tr>
      <td><input type="text" name='title' onChange={handleInput} value={current.title} /></td>
      <td><input type="text" name='body'onChange={handleInput} value={current.body} /></td>
      <td><button type='submit'>Update</button></td>
    </tr>
  )
}


function Create({ setPost }) {
  const titleRef = useRef()
  const bodyRef = useRef()

  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const body = event.target.elements.body.value;
    const newPost = [
      {
        id: 4,
        title,
        body
      },
    ]
    setPost((prevPost) => {
      return prevPost.concat(newPost)
    })
    titleRef.current.value = ""
    bodyRef.current.value = ""
  }
  return (
    <form className='create' onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Enter Title" ref={titleRef} />
      <input type="text" name="body" placeholder="Enter Body" ref={bodyRef} />
      <button type="submit">Create Post</button>
    </form>
  )
}

export default CRUD;