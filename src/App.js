import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Features from './pages/Features';
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';
import Expert from './pages/Expert';
import Story from './pages/Story';
import Support from './pages/Support';
import './App.css';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/story" element={<Story />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <footer className="footer">
          <div className="footer-container">
            <p>API URL: {apiUrl}</p>
            <p>&copy; 2024 Template Showcase. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
