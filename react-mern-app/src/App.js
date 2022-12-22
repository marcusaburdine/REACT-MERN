
import './App.css';
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav/Nav"
import SideBar from "./component/SideBar/SideBar"
import Home from "./pages/Home/Home"
import Marketplace from "./pages/Marketplace/Marketplace"
import Groups from "./pages/Groups/Groups"
import Gaming from "./pages/Gaming/Gaming"
import Profile from "./pages/Profile/Profile"
import Post from "./component/Post/Post"





function App() {
  return (
    <div className="App">

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/groups/" element={<Groups />} />
        <Route path="/gaming/" element={<Gaming />} />
      </Routes>

      <SideBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>


    </div>
  );
}

export default App;


