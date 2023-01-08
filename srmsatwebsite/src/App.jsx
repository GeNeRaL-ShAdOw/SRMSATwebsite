import HomePage from './Components/homepage'
import Registration from './Components/registration';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </Router>
  );
}

export default App;
