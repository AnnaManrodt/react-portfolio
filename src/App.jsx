// import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './pages/Index';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import Header from './componets/Header'
import Footer from './componets/Footer';


export default function App() {
  const [currentSection, setCurrentSection] = useState('About Me')
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}