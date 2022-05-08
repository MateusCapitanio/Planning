import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/home"  element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
