import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ backgroundColor: '#070714', paddingTop: '5rem' }}
    >
      {/* Circuit-board grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,53,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Background glow blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '700px', height: '700px',
          top: '-200px', right: '-200px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.14) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '600px', height: '600px',
          bottom: '-150px', left: '-150px',
          background: 'radial-gradient(circle, rgba(191,90,242,0.13) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '350px', height: '350px',
          top: '38%', left: '42%',
          background: 'radial-gradient(circle, rgba(0,245,212,0.08) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute animate-float pointer-events-none opacity-20" style={{ top: '14%', right: '7%' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <polygon points="32,4 60,52 4,52" stroke="#FF6B35" strokeWidth="1.5" fill="none" />
          <polygon points="32,14 50,46 14,46" stroke="#FF6B35" strokeWidth="0.8" fill="none" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute animate-float2 pointer-events-none opacity-15" style={{ top: '58%', right: '4%' }}>
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <rect x="5" y="5" width="32" height="32" rx="4" stroke="#FFD60A" strokeWidth="1.5" fill="none" transform="rotate(20 21 21)" />
        </svg>
      </div>
      <div className="absolute animate-float3 pointer-events-none opacity-20" style={{ bottom: '18%', left: '7%' }}>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="22" stroke="#00F5D4" strokeWidth="1.5" fill="none" strokeDasharray="5 4" />
          <circle cx="26" cy="26" r="12" stroke="#00F5D4" strokeWidth="0.8" fill="none" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute animate-float4 pointer-events-none opacity-15" style={{ top: '22%', left: '4%' }}>
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
          <polygon points="23,2 44,35 2,35" stroke="#BF5AF2" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div className="absolute animate-spin-slow pointer-events-none opacity-8" style={{ top: '8%', left: '18%' }}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <polygon points="45,5 82,27 82,63 45,85 8,63 8,27" stroke="#FF6B35" strokeWidth="1" fill="none" opacity="0.6" />
          <polygon points="45,18 70,32 70,58 45,72 20,58 20,32" stroke="#FFD60A" strokeWidth="0.6" fill="none" opacity="0.3" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

        {/* Top credential bar */}
        <div
          className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full mb-8 animate-fade-up"
          style={{
            border: '1px solid rgba(255,107,53,0.3)',
            background: 'rgba(7,7,20,0.8)',
            backdropFilter: 'blur(12px)',
            animationDelay: '0.05s',
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: '#FF6B35', animation: 'beacon-glow 1.8s ease-in-out infinite' }}
          />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FF6B35' }}>
            מומחה מוביל בישראל
          </span>
          <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
          <span className="text-xs font-semibold" style={{ color: '#A0AEC0' }}>
            FEMA Certified
          </span>
          <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
          <span className="text-xs font-semibold" style={{ color: '#A0AEC0' }}>
            15+ מדינות
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="font-black leading-tight mb-6 animate-fade-up"
          style={{
            fontFamily: 'Heebo, sans-serif',
            fontSize: 'clamp(2.8rem, 8vw, 6.2rem)',
            animationDelay: '0.15s',
            letterSpacing: '-0.02em',
          }}
        >
          <span className="gradient-text">מוביל ארגונים</span>
          <br />
          <span className="text-white">דרך משברים</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl font-semibold mb-4 animate-fade-up"
          style={{ color: '#A0AEC0', animationDelay: '0.25s' }}
        >
          20+ שנות ניסיון בניהול סיכונים ומנהיגות בזמן חירום
        </p>

        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ color: '#64748b', lineHeight: 1.85, animationDelay: '0.35s' }}
        >
          מכשיר מנהלים וארגונים להתמודד עם כל אתגר, לבנות חוסן אמיתי
          ולהפוך אי-ודאות לזרז לצמיחה.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl text-white text-lg font-black transition-all duration-200 animate-pulse-glow"
            style={{ backgroundColor: '#FF6B35', minWidth: '210px', justifyContent: 'center' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#e05520';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#FF6B35';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            צור קשר עכשיו
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl text-base font-bold transition-all duration-200"
            style={{
              border: '1.5px solid rgba(255,107,53,0.35)',
              color: '#FF6B35',
              minWidth: '180px',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = '#FF6B35';
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,107,53,0.1)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,53,0.35)';
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            גלה עוד
          </a>
        </div>

        {/* Trust badges row */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          {[
            { icon: '🛡️', text: 'יועץ בכיר — משרד הביטחון' },
            { icon: '🎓', text: 'מוסמך FEMA' },
            { icon: '🌍', text: 'פעיל ב-15 מדינות' },
          ].map((badge, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#718096',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span>{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <a href="#about" className="flex flex-col items-center gap-1.5 group" style={{ color: '#2D3748' }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'Assistant, sans-serif', fontSize: '10px' }}>
              גלול למטה
            </span>
            <svg
              className="transition-transform group-hover:translate-y-1.5"
              width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div
          className="max-w-4xl mx-auto mx-4 md:mx-auto rounded-t-2xl py-5 px-8 md:px-12 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0"
          style={{
            background: 'rgba(10,10,30,0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderBottom: 'none',
            boxShadow: '0 -4px 40px rgba(0,0,0,0.4)',
          }}
        >
          {[
            { number: '200+', label: 'ארגונים שולוו', color: '#FF6B35' },
            { number: '20+', label: 'שנות ניסיון', color: '#FFD60A' },
            { number: '500+', label: 'מנהלים הוכשרו', color: '#00F5D4' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                style={{
                  width: '3px',
                  height: '36px',
                  borderRadius: '2px',
                  backgroundColor: stat.color,
                  opacity: 0.7,
                  display: i === 0 ? 'none' : undefined,
                }}
                className="hidden md:block"
              />
              <div className="flex flex-col items-center gap-0.5 text-center">
                <span
                  className="text-3xl font-black"
                  style={{ fontFamily: 'Heebo, sans-serif', color: stat.color }}
                >
                  {stat.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#4A5568' }}>
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
