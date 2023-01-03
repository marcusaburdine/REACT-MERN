
import './App.css';
import { getUser } from './utilities/users-service';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from "./component/Nav/Nav"
import SideBar from "./component/SideBar/SideBar"
import profiledata from "./profileData"
import AuthPage from './pages/AuthPage/AuthPage';
import Home from "./pages/Home/Home"
import Marketplace from "./pages/Marketplace/Marketplace"
import Groups from "./pages/Groups/Groups"
import Gaming from "./pages/Gaming/Gaming"
import Profile from "./pages/Profile/Profile"
import Pokemon from "./pages/Pokemon/Pokemon"
import Abilities from "./pages/Abilities/Abilities"
import UserLogOut from './component/UserLogOut/UserLogOut';


function App({}) {
  const [user, setUser] = useState(getUser());
  // const [profile, setProfile] = useState();
  
  
console.log(user)
console.log(profiledata)

  return (
    <div className="App">
      {user ?
        <>

          <Nav />
          
          <UserLogOut user={user} setUser={setUser} />
          <Routes>
            <Route path="/home" element={<Home user={user} setUser={setUser} />} />
            <Route path="/marketplace" element={<Marketplace user={user} setUser={setUser} />} />
            <Route path="/groups/" element={<Groups user={user} setUser={setUser} />} />
            <Route path="/gaming/" element={<Gaming user={user} setUser={setUser} />} />
          </Routes>

          <SideBar />
          <Routes>
            <Route path="/profile" element={<Profile user={user} setUser={setUser}   />} />
            <Route path="/pokemon" element={<Pokemon user={user} setUser={setUser} />} />
            <Route path="/abilities" element={<Abilities user={user} setUser={setUser} />} />
          </Routes>
         
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;


