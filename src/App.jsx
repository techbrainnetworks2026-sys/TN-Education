import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductSection from './components/ProductSection';
import Services from './components/Services';
import Industries from './components/Industries';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Box component="main" sx={{ overflowX: 'hidden' }}>
              <Navbar />
              <Hero />
              <About />
              <ProductSection />
              <Services />
              <Industries />
              <Careers />
              <Contact />
              <Footer />
            </Box>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Box component="main" sx={{ overflowX: 'hidden' }}>
              <ProductDetail />
              <Footer />
            </Box>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Box component="main" sx={{ overflowX: 'hidden' }}>
              <PrivacyPolicy />
              <Footer />
            </Box>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <Box component="main" sx={{ overflowX: 'hidden' }}>
              <TermsOfService />
              <Footer />
            </Box>
          }
        />
        <Route
          path="/cookie-policy"
          element={
            <Box component="main" sx={{ overflowX: 'hidden' }}>
              <CookiePolicy />
              <Footer />
            </Box>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
