import React, { useState, useEffect } from 'react';
import Navbar from './components/website/Navbar';
import Hero from './components/website/Hero';
import About from './components/website/About';
import Services from './components/website/Services';
import WhyMe from './components/website/WhyMe';
import Testimonials from './components/website/Testimonials';
import Contact from './components/website/Contact';
import Footer from './components/website/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#070714', color: '#fff', direction: 'rtl', minHeight: '100vh' }}>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
