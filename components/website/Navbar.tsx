import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'אודות' },
    { href: '#services', label: 'שירותים' },
    { href: '#learning', label: 'לומדה' },
    { href: '#articles', label: 'מאמרים' },
    { href: '#testimonials', label: 'המלצות' },
    { href: '#contact', label: 'צור קשר' },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
      style={{
        marginTop: '3px', /* below the accent bar */
        ...(scrolled ? { backgroundColor: 'rgba(4,4,16,0.96)', borderBottom: '1px solid rgba(255,107,53,0.1)' } : {}),
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white"
            style={{ background: 'linear-gradient(135deg, #FF6B35, #FFD60A)' }}
          >
            י״ח
          </div>
          <span className="text-xl font-black" style={{ fontFamily: 'Heebo, sans-serif' }}>
            <span className="gradient-text-orange">ירון</span>
            <span className="text-white"> חנן</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold transition-colors duration-200"
              style={{ color: '#A0AEC0' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B35')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#A0AEC0')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all duration-200 animate-pulse-glow"
          style={{ backgroundColor: '#FF6B35' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e85c27')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF6B35')}
        >
          בואו נדבר
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
          aria-label="תפריט"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: '#FF6B35',
              transform: mobileOpen ? 'translateY(8px) rotate(45deg)' : '',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: '#FF6B35',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: '#FF6B35',
              transform: mobileOpen ? 'translateY(-8px) rotate(-45deg)' : '',
            }}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: mobileOpen ? '400px' : '0' }}
      >
        <div className="px-4 pb-6 flex flex-col gap-4" style={{ backgroundColor: 'rgba(7,7,20,0.98)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-base font-semibold border-b"
              style={{ color: '#A0AEC0', borderColor: 'rgba(255,255,255,0.06)' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 py-3 rounded-xl text-center text-white font-bold text-base"
            style={{ backgroundColor: '#FF6B35' }}
            onClick={() => setMobileOpen(false)}
          >
            בואו נדבר
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
