import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Members from './components/Members';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Navbar from './components/Navbar/Navbar';
import WallPaper from './photos/Wallpaper.jpg';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{backgroundImage: `url(${WallPaper})`, overflow: 'scroll', paddingTop: '35px'}}>
        <Routes>
          <Route path="/" element={<Home/>} exact>
          </Route>
          <Route path="/members" element={<Members/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/signup" element={<Signup/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
