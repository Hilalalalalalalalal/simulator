import React, { useState, useEffect } from 'react';
import Navbar from './components/website/Navbar';
import Hero from './components/website/Hero';
import About from './components/website/About';
import Services from './components/website/Services';
import WhyMe from './components/website/WhyMe';
import Learning from './components/website/Learning';
import Articles from './components/website/Articles';
import Testimonials from './components/website/Testimonials';
import Contact from './components/website/Contact';
import Footer from './components/website/Footer';

/* ── Emergency Beacon Component ── */
const EmergencyBeacon: React.FC<{ position: 'top' | 'bottom' }> = ({ position }) => {
  const isTop = position === 'top';
  return (
    <div
      className={isTop ? 'animate-beacon-down' : 'animate-beacon-up'}
      style={{
        position: 'fixed',
        top: isTop ? '18px' : 'auto',
        bottom: isTop ? 'auto' : '18px',
        right: '18px',
        zIndex: 999,
        width: '44px',
        height: '44px',
        pointerEvents: 'none',
      }}
    >
      <div className="animate-beacon-glow" style={{ position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1.5px solid rgba(255,107,53,0.35)' }} />
      <div style={{ position: 'absolute', inset: '-2px', borderRadius: '50%', border: '1px solid rgba(255,107,53,0.2)', animation: 'beacon-glow 1.8s ease-in-out infinite 0.4s' }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #FF8C5A, #CC4A10)',
        boxShadow: '0 2px 12px rgba(255,107,53,0.5)', overflow: 'hidden',
      }}>
        <div className="animate-beacon-rotate" style={{ position: 'absolute', inset: 0, borderRadius: '50%' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: '55%', height: '3px', marginTop: '-1.5px', background: 'linear-gradient(to right, rgba(255,230,100,0.9), transparent)', transformOrigin: 'left center', borderRadius: '0 2px 2px 0' }} />
        </div>
        <div style={{ position: 'absolute', top: '30%', left: '32%', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,200,0.7)', filter: 'blur(1px)' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '-7px', left: '50%', transform: 'translateX(-50%)', width: '22px', height: '6px', borderRadius: '0 0 4px 4px', background: 'linear-gradient(to bottom, #1a1a3e, #0d0d28)', border: '1px solid rgba(255,107,53,0.25)' }} />
    </div>
  );
};

/* ── Top accent bar ── */
const TopAccentBar: React.FC = () => (
  <div style={{
    position: 'fixed', top: 0, left: 0, right: 0, height: '3px', zIndex: 1000,
    background: 'linear-gradient(90deg, #FF6B35 0%, #FFD60A 40%, #00F5D4 70%, #BF5AF2 100%)',
    backgroundSize: '200% auto',
    animation: 'top-bar-shimmer 4s linear infinite',
  }} />
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#070714', color: '#fff', direction: 'rtl', minHeight: '100vh' }}>
      <TopAccentBar />
      <EmergencyBeacon position="top" />
      <EmergencyBeacon position="bottom" />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <WhyMe />
        <div className="section-divider" />
        <Learning />
        <div className="section-divider" />
        <Articles />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
