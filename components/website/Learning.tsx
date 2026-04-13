import React, { useEffect, useRef, useState } from 'react';

const Learning: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const features = [
    { icon: '🧭', title: 'אבחון מנהיגות', desc: 'מיפוי יכולות המנהיגות שלך בזמן משבר — חוזקות, פערים ונקודות עיוורון' },
    { icon: '⚡', title: 'סימולציות אינטראקטיביות', desc: 'תרחישי חירום אמיתיים שמכשירים אותך לקבל החלטות תחת לחץ' },
    { icon: '📊', title: 'דוח אישי מפורט', desc: 'ניתוח מעמיק של סגנון הניהול שלך עם המלצות קונקרטיות לשיפור' },
    { icon: '🎯', title: 'מסלול למידה מותאם', desc: 'תוכנית פיתוח אישית המבוססת על תוצאות האבחון שלך' },
  ];

  return (
    <section
      id="learning"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #070714 0%, #0d0d1f 40%, #0a1520 100%)',
      }}
    >
      {/* Animated scan line */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.4), transparent)',
          animation: 'scan-line 6s linear infinite',
          top: 0,
        }}
      />

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,245,212,0.08), transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(191,90,242,0.1), transparent 70%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div
          className="text-center mb-14"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 block" style={{ backgroundColor: '#00F5D4' }} />
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#00F5D4' }}>
              לומדה דיגיטלית
            </span>
            <span className="w-8 h-0.5 block" style={{ backgroundColor: '#00F5D4' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: 'Heebo, sans-serif' }}>
            <span style={{ color: '#fff' }}>גלה את </span>
            <span style={{ background: 'linear-gradient(90deg, #00F5D4, #BF5AF2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              מנהיגותך
            </span>
            <span style={{ color: '#fff' }}> בחירום</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#718096', lineHeight: 1.8 }}>
            לומדה דיגיטלית אינטראקטיבית לאבחון וניהול מנהיגות בשעת חירום —
            פותחה במיוחד לארגונים שרוצים לנהל סיכונים נכון
          </p>
        </div>

        {/* Main card */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease 0.2s',
          }}
        >
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,245,212,0.06) 0%, rgba(191,90,242,0.06) 100%)',
              border: '1px solid rgba(0,245,212,0.2)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0,245,212,0.1)',
            }}
          >
            {/* Top preview bar */}
            <div
              className="px-6 py-3 flex items-center gap-2"
              style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28CA41' }} />
              <span className="mr-3 text-xs font-mono" style={{ color: '#4A5568' }}>
                resilience-compass-1384f9fe.base44.app
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: features */}
              <div className="p-10 md:p-12">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-bold"
                  style={{ background: 'rgba(0,245,212,0.12)', border: '1px solid rgba(0,245,212,0.3)', color: '#00F5D4' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  חדש — לומדה דיגיטלית
                </div>

                <h3 className="text-2xl md:text-3xl font-black mb-3 text-white" style={{ fontFamily: 'Heebo, sans-serif', lineHeight: 1.3 }}>
                  Resilience Compass
                </h3>
                <p className="text-sm mb-8" style={{ color: '#718096', lineHeight: 1.8 }}>
                  כלי האבחון המקצועי שפיתח ירון חנן — מסייע למנהלים לגלות את רמת המוכנות שלהם לחירום ולפתח את יכולות ניהול הסיכונים שלהם בצורה שיטתית.
                </p>

                <div className="space-y-4 mb-10">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200"
                      style={{
                        background: 'rgba(0,245,212,0.04)',
                        border: '1px solid rgba(0,245,212,0.08)',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(20px)',
                        transition: `all 0.6s ease ${0.4 + i * 0.1}s`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,212,0.08)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,212,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,212,0.04)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,212,0.08)';
                      }}
                    >
                      <span className="text-2xl flex-shrink-0">{f.icon}</span>
                      <div>
                        <p className="font-bold text-sm text-white mb-0.5">{f.title}</p>
                        <p className="text-xs" style={{ color: '#718096', lineHeight: 1.7 }}>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://resilience-compass-1384f9fe.base44.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #00F5D4, #00C4AA)',
                    color: '#040410',
                    boxShadow: '0 8px 30px rgba(0,245,212,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(0,245,212,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,245,212,0.35)';
                  }}
                >
                  התחל אבחון עכשיו — חינם
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Right: visual mockup */}
              <div
                className="relative hidden lg:flex items-center justify-center p-10"
                style={{ background: 'rgba(0,0,0,0.2)', borderRight: '1px solid rgba(255,255,255,0.04)' }}
              >
                {/* Compass visual */}
                <div className="relative w-64 h-64">
                  {/* Outer ring */}
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow"
                    style={{ border: '1px dashed rgba(0,245,212,0.3)' }}
                  />
                  {/* Middle ring */}
                  <div
                    className="absolute inset-8 rounded-full"
                    style={{ border: '1px solid rgba(191,90,242,0.25)', animation: 'spin-slow 15s linear infinite reverse' }}
                  />
                  {/* Inner */}
                  <div
                    className="absolute inset-16 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,245,212,0.15), rgba(191,90,242,0.15))',
                      border: '1px solid rgba(0,245,212,0.3)',
                    }}
                  >
                    <span className="text-4xl">🧭</span>
                  </div>
                  {/* Cardinal points */}
                  {[
                    { top: '0', left: '50%', transform: 'translateX(-50%)', label: 'N', color: '#00F5D4' },
                    { bottom: '0', left: '50%', transform: 'translateX(-50%)', label: 'S', color: '#BF5AF2' },
                    { top: '50%', right: '0', transform: 'translateY(-50%)', label: 'E', color: '#FF6B35' },
                    { top: '50%', left: '0', transform: 'translateY(-50%)', label: 'W', color: '#FFD60A' },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="absolute w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ ...p as React.CSSProperties, backgroundColor: `${p.color}22`, border: `1px solid ${p.color}55`, color: p.color }}
                    >
                      {p.label}
                    </div>
                  ))}
                </div>

                {/* Score cards */}
                {[
                  { label: 'מנהיגות', val: 87, color: '#00F5D4', top: '8%', right: '-10%' },
                  { label: 'חוסן', val: 73, color: '#BF5AF2', bottom: '12%', left: '-8%' },
                  { label: 'החלטות', val: 91, color: '#FF6B35', top: '45%', right: '-12%' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="absolute px-3 py-2 rounded-xl text-center"
                    style={{
                      ...s as React.CSSProperties,
                      background: 'rgba(10,10,30,0.9)',
                      border: `1px solid ${s.color}44`,
                      backdropFilter: 'blur(10px)',
                      minWidth: '80px',
                    }}
                  >
                    <div className="text-lg font-black" style={{ color: s.color }}>{s.val}%</div>
                    <div className="text-xs" style={{ color: '#4A5568' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust note */}
        <div
          className="mt-8 text-center"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.6s' }}
        >
          <p className="text-sm" style={{ color: '#2D3748' }}>
            ✓ ללא צורך ברישום · ✓ תוצאות מיידיות · ✓ פותח ע"י ירון חנן בהתבסס על 20+ שנות ניסיון
          </p>
        </div>
      </div>
    </section>
  );
};

export default Learning;
