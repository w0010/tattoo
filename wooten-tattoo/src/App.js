//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './05.Pages/Home';
import Portfolio from './05.Pages/Portfolio/Portfolio';
import About from './05.Pages/About/About';
import Workflow from './05.Pages/Workflow/Workflow';
import Appointments from './05.Pages/Appointments';

import Header from './03.Organisms/Header/Header';
import Footer from './03.Organisms/Footer/Footer';
import Polyspace from './03.Organisms/Polyspace/Polyspace';

import ScrollToTop from './01.Atoms/ScrollToTop';
import { ThemeProvider } from './01.Atoms/ThemeProvider';

import './App.css';
import './Responsive.css';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Portfolio" element={<Portfolio />} />
            <Route path="/pages/About" element={<About />} />
            <Route path="/pages/Workflow" element={<Workflow />} />
            <Route path="/pages/Appointments" element={<Appointments />} />
          </Routes>
          <Polyspace />
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;