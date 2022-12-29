
import './App.css';
import { getUser } from '../../utilities/users-service';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Nav from "../../component/Nav/Nav"
import SideBar from "../../component/SideBar/SideBar"
import AuthPage from '../AuthPage/AuthPage';
import Home from "../Home/Home"
import Marketplace from "../Marketplace/Marketplace"
import Groups from "../Groups/Groups"
import Gaming from "../Gaming/Gaming"
import Profile from "../Profile/Profile"
import Pokemon from "../Pokemon/Pokemon"
import Abilities from "../Abilities//Abilities"
import Post from "../../component/Post/Post"

import Tweet from "../../tweet";
import data from "../../data"






function App() {
const [user, setUser] = useState(getUser());


  return (
    <div className="App">
      { user ?
      <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} data={data} />} />
        <Route path="/marketplace" element={<Marketplace user={user} setUser={setUser}/>} />
        <Route path="/groups/" element={<Groups user={user} setUser={setUser}/>} />
        <Route path="/gaming/" element={<Gaming user={user} setUser={setUser}/>} />
      </Routes>

      <SideBar />
      <Routes>
        <Route path="/profile" element={<Profile user={user} setUser={setUser}/>} />
        <Route path="/pokemon" element={<Pokemon user={user} setUser={setUser}/>} />
        <Route path="/abilities" element={<Abilities user={user} setUser={setUser}/>} />
      </Routes>
      </>
  :
  <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;


