
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const React = require("react")

export default function Main() {
  const [about,setAbout] = useState("")
  const displayAbout = () => {
    console.log(about)
  }

  
  return (
    <>
    <form action="/" method="POST">
      <label>About</label>
     <input type="text" onChange={(evt) => {
      setAbout(evt.target.value)
     }} />
      <button onClick={displayAbout}>About</button>
     </form>
    

    </>
  )
};

