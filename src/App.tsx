import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PedroEroles from './components/PedroEroles';
import PracticeAreas from './components/PracticeAreas';
import PublicationsAndMedia from './components/PublicationsAndMedia';
import Footer from './components/Footer';
import Publication from './pages/Publication';

function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <PracticeAreas />
      <PedroEroles />
      <PublicationsAndMedia />
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/publication/:id" element={<Publication />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;