//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './01.Atoms/ScrollToTop';

import Header from './03.Organisms/Header/Header';
import Footer from './03.Organisms/Footer/Footer';
import Polyspace from './03.Organisms/Polyspace/Polyspace';

import Home from './05.Pages/Home';
import Portfolio from './05.Pages/Portfolio/Portfolio';
import Workflow from './05.Pages/Workflow/Workflow';
import Appointments from './05.Pages/Appointments';

import './App.css';
import './Responsive.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pages/Portfolio" element={ <Portfolio /> } />
          <Route path="/pages/Workflow" element={ <Workflow /> } />
          <Route path="/pages/Appointments" element={ <Appointments /> } />
        </Routes>
        <Polyspace />
        <Footer />
      </Router>
    </div>
  );
}

export default App;