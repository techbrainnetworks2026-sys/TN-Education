import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductSection from './components/ProductSection';
import Services from './components/Services';
import Industries from './components/Industries';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
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
  );
}

export default App;
