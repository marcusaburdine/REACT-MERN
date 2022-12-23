
import './App.css';

import { getUser } from '../../utilities/users-service';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from "../../component/Nav/Nav"
import SideBar from "../../component/SideBar/SideBar"
import AuthPage from '../AuthPage/AuthPage';
import Home from "../Home/Home"
import Marketplace from "../Marketplace/Marketplace"
import Groups from "../Groups/Groups"
import Gaming from "../Gaming/Gaming"
import Profile from "../Profile/Profile"
import Post from "../../component/Post/Post"





function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      { user ?
      <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser}/>} />
        <Route path="/marketplace" element={<Marketplace user={user} setUser={setUser}/>} />
        <Route path="/groups/" element={<Groups user={user} setUser={setUser}/>} />
        <Route path="/gaming/" element={<Gaming user={user} setUser={setUser}/>} />
      </Routes>

      <SideBar />
      <Routes>
        <Route path="/profile" element={<Profile user={user} setUser={setUser}/>} />
      </Routes>
      </>
  :
  <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;


