import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ backgroundColor: '#070714', paddingTop: '5rem' }}
    >
      {/* Background glow blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '600px', height: '600px',
          top: '-150px', right: '-150px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '500px', height: '500px',
          bottom: '-100px', left: '-100px',
          background: 'radial-gradient(circle, rgba(191,90,242,0.16) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '400px', height: '400px',
          top: '40%', left: '40%',
          background: 'radial-gradient(circle, rgba(0,245,212,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute animate-float pointer-events-none opacity-20"
        style={{ top: '15%', right: '8%' }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <polygon points="30,5 55,50 5,50" stroke="#FF6B35" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div
        className="absolute animate-float2 pointer-events-none opacity-15"
        style={{ top: '60%', right: '5%' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="5" y="5" width="30" height="30" rx="4" stroke="#FFD60A" strokeWidth="2" fill="none" transform="rotate(20 20 20)" />
        </svg>
      </div>
      <div
        className="absolute animate-float3 pointer-events-none opacity-20"
        style={{ bottom: '20%', left: '8%' }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="20" stroke="#00F5D4" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        </svg>
      </div>
      <div
        className="absolute animate-float4 pointer-events-none opacity-15"
        style={{ top: '25%', left: '5%' }}
      >
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
          <polygon points="22,3 42,33 2,33" stroke="#BF5AF2" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div
        className="absolute animate-spin-slow pointer-events-none opacity-10"
        style={{ top: '10%', left: '20%' }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <polygon points="40,5 75,25 75,55 40,75 5,55 5,25" stroke="#FF6B35" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-bold animate-fade-up"
          style={{
            border: '1px solid rgba(255,107,53,0.5)',
            background: 'rgba(255,107,53,0.08)',
            color: '#FF6B35',
            animationDelay: '0.1s',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#FF6B35', animation: 'pulse-glow 2s ease-in-out infinite' }}
          />
          מומחה מוביל בישראל
        </div>

        {/* Main Headline */}
        <h1
          className="font-black leading-tight mb-6 animate-fade-up"
          style={{
            fontFamily: 'Heebo, sans-serif',
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            animationDelay: '0.2s',
          }}
        >
          <span className="gradient-text">מוביל ארגונים</span>
          <br />
          <span className="text-white">דרך משברים</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-2xl font-semibold mb-4 animate-fade-up"
          style={{ color: '#A0AEC0', animationDelay: '0.3s' }}
        >
          20+ שנות ניסיון בניהול סיכונים ומנהיגות בזמן חירום
        </p>

        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ color: '#718096', lineHeight: 1.8, animationDelay: '0.4s' }}
        >
          מכשיר מנהלים וארגונים להתמודד עם כל אתגר, לבנות חוסן אמיתי ולהפוך אי-ודאות לזרז לצמיחה.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white text-lg font-black transition-all duration-200 animate-pulse-glow"
            style={{ backgroundColor: '#FF6B35', minWidth: '200px', justifyContent: 'center' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e85c27')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF6B35')}
          >
            צור קשר עכשיו
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-200"
            style={{
              border: '2px solid rgba(255,107,53,0.4)',
              color: '#FF6B35',
              minWidth: '180px',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FF6B35';
              e.currentTarget.style.backgroundColor = 'rgba(255,107,53,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,107,53,0.4)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            גלה עוד
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <a href="#about" className="flex flex-col items-center gap-2 group" style={{ color: '#4A5568' }}>
            <span className="text-xs font-semibold tracking-widest" style={{ fontFamily: 'Assistant, sans-serif' }}>גלול למטה</span>
            <svg
              className="transition-transform group-hover:translate-y-1"
              width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div
          className="max-w-4xl mx-auto mx-4 md:mx-auto rounded-t-2xl py-5 px-6 md:px-10 flex flex-col md:flex-row items-center justify-around gap-4 md:gap-0"
          style={{
            background: 'rgba(15,15,46,0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderBottom: 'none',
          }}
        >
          {[
            { number: '200+', label: 'ארגונים שולוו' },
            { number: '20+', label: 'שנות ניסיון' },
            { number: '500+', label: 'מנהלים הוכשרו' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span
                className="text-3xl font-black gradient-text-orange"
                style={{ fontFamily: 'Heebo, sans-serif' }}
              >
                {stat.number}
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#718096' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
