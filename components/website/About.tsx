import React from 'react';

const About: React.FC = () => {
  const credentials = [
    { icon: '🎓', label: 'מוסמך FEMA — ניהול חירום פדרלי' },
    { icon: '🛡️', label: 'אקדמיה לביטחון לאומי' },
    { icon: '⭐', label: 'יועץ בכיר — משרד הביטחון' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0d0d2b' }}>
      {/* Subtle background stripe */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #FF6B35 0, #FF6B35 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 block" style={{ backgroundColor: '#FF6B35' }} />
          <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#FF6B35' }}>
            אודות
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text Column */}
          <div className="lg:col-span-3">
            <h2
              className="text-4xl md:text-5xl font-black mb-8 leading-tight"
              style={{ fontFamily: 'Heebo, sans-serif' }}
            >
              מי זה{' '}
              <span className="gradient-text">ירון חנן</span>?
            </h2>

            <div className="space-y-5 mb-10" style={{ color: '#A0AEC0', lineHeight: 1.9, fontSize: '1.05rem' }}>
              <p>
                ירון חנן הוא מומחה בינלאומי מוכר בתחום ניהול הסיכונים ומנהיגות בזמן חירום, עם ניסיון של למעלה מ-20 שנים
                בייעוץ לארגונים ממשלתיים, חברות הייטק ותאגידים גדולים בישראל ובעולם.
              </p>
              <p>
                ירון ליווה מאות ארגונים לבנות חוסן, להתמודד עם משברים ולהפוך אי-ודאות לזרז לצמיחה.
                גישתו הייחודית משלבת ידע אקדמי עמוק עם ניסיון שטח עשיר — מאסונות טבע ועד משברי סייבר,
                מתקריות ביטחוניות ועד מהפכות ארגוניות.
              </p>
              <p>
                כמרצה אורח באוניברסיטאות מובילות ומנחה סדנאות בינלאומיות, ירון פיתח מתודולוגיה ייחודית
                שהפכה לסטנדרט בתחום בישראל — ומיושמת בארגונים ב-15 מדינות.
              </p>
            </div>

            {/* Credential badges */}
            <div className="space-y-3">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(255,107,53,0.07)',
                    border: '1px solid rgba(255,107,53,0.2)',
                  }}
                >
                  <span className="text-xl">{cred.icon}</span>
                  <span className="font-semibold text-sm" style={{ color: '#FFD60A' }}>
                    {cred.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Profile Card */}
            <div
              className="rounded-2xl p-8 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0f0f2e 0%, #1a1a4e 100%)',
                border: '1px solid rgba(255,107,53,0.3)',
              }}
            >
              {/* Gradient border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(255,107,53,0.08)' }}
              />

              {/* Avatar */}
              <div
                className="w-28 h-28 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl font-black text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35, #BF5AF2)',
                  fontFamily: 'Heebo, sans-serif',
                }}
              >
                י״ח
              </div>

              <h3
                className="text-2xl font-black mb-1 text-white"
                style={{ fontFamily: 'Heebo, sans-serif' }}
              >
                ירון חנן
              </h3>
              <p className="text-sm font-semibold mb-1" style={{ color: '#FF6B35' }}>
                מומחה לניהול סיכונים ומנהיגות בזמן חירום
              </p>
              <p className="text-xs" style={{ color: '#4A5568' }}>
                מרצה אורח | יועץ בכיר | מוסמך FEMA
              </p>
            </div>

            {/* Highlight boxes */}
            <div
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{
                background: 'rgba(0,245,212,0.06)',
                border: '1px solid rgba(0,245,212,0.2)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(0,245,212,0.15)' }}
              >
                <svg width="20" height="20" fill="none" stroke="#00F5D4" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm text-white">מומחה מוכר בינלאומית</p>
                <p className="text-xs" style={{ color: '#718096' }}>15 מדינות · כנסים בינלאומיים</p>
              </div>
            </div>

            <div
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{
                background: 'rgba(191,90,242,0.06)',
                border: '1px solid rgba(191,90,242,0.2)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(191,90,242,0.15)' }}
              >
                <svg width="20" height="20" fill="none" stroke="#BF5AF2" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm text-white">מרצה אורח — אוניברסיטת ת"א</p>
                <p className="text-xs" style={{ color: '#718096' }}>MBA · לימודי ביטחון לאומי</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
