import React from 'react';

import HomePage from './Home.jsx';
import ContactPage from './Contact.jsx';
import AboutPage from './About.jsx';
import ProjectsPage from './Projects.jsx';
import Playground from './Playground.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/App.css'



function App() {
  return(
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Playground" element={<Playground />} />
      </Routes>
    </Router>


    // <>
    //     <Navigation />    
        
    //     <div className="main-section">
    //       <HomePage />
    //     </div>
    // </>
  )
}

export default App;