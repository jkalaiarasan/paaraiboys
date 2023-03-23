import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Members from './components/Members';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
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
    </Router>
  );
}

export default App;
