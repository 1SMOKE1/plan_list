import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/settings" element={ <Settings />}/>
        <Route path="/home" element={ <Home />} />
      </Routes>
    </div>
  );
}

export default App;
