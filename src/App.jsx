import React, { useEffect } from 'react';

import HomePage from './Home.jsx';
import AboutPage from './About.jsx';
import ProjectsPage from './Projects.jsx';
import Playground from './Playground.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/App.css';
import { onPageLoad } from '../src/utilites.js';


function App() {

  useEffect(() => {
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }    
  })

  return(
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Playground" element={<Playground />} />
      </Routes>
    </Router>
  )
}

export default App;