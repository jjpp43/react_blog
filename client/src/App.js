import React from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Post from "./components/post/Post";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/write" element={<Write />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
    
  );
}

export default App;
