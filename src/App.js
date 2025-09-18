import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Schemes from './pages/Schemes';
import SchemeDetail from './pages/SchemeDetail';
import Chatbot from './pages/Chatbot';
import About from './pages/About';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schemes" element={<Schemes />} />
              <Route path="/scheme/:id" element={<SchemeDetail />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
            </div>
          )}
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
