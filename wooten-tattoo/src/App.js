//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/HomeTMP';
import Portfolio from './pages/Portfolio';
import Workflow from './pages/Workflow';
import Appointments from './pages/Appointments';
import Polyspace from './components/Polyspace';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pages/Portfolio" element={ <Portfolio /> } />
          <Route path="/pages/Workflow" element={ <Workflow /> } />
          <Route path="/pages/Appointments" element={ <Appointments /> } />
        </Routes>
        <Footer />
        <Polyspace />
      </Router>
    </div>
  );
}

export default App;