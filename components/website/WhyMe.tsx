import React from 'react';

const stats = [
  { number: '20+', label: 'שנות ניסיון', color: '#FF6B35' },
  { number: '200+', label: 'ארגונים שולוו', color: '#FFD60A' },
  { number: '500+', label: 'מנהלים הוכשרו', color: '#00F5D4' },
  { number: '98%', label: 'שביעות רצון', color: '#BF5AF2' },
];

const usps = [
  'גישה מוכחת ומותאמת לתרבות הישראלית',
  'שילוב בין תיאוריה לניסיון שטח אמיתי',
  'זמינות ומחויבות מלאה לכל לקוח',
  'תוצאות מדידות וברות-אימות',
  'ליווי לפני, במהלך ואחרי המשבר',
];

const WhyMe: React.FC = () => {
  return (
    <section
      id="why-me"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0533 0%, #070714 60%, #0a1a0a 100%)',
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 w-px h-full pointer-events-none opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #FF6B35, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 block" style={{ backgroundColor: '#FF6B35' }} />
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#FF6B35' }}>
              למה ירון
            </span>
            <span className="w-8 h-0.5 block" style={{ backgroundColor: '#FF6B35' }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ fontFamily: 'Heebo, sans-serif' }}
          >
            למה לבחור<br />
            <span className="gradient-text">בירון חנן</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 text-center card-hover relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(15,15,46,0.7), rgba(7,7,20,0.5))',
                  border: `1px solid ${stat.color}28`,
                  backdropFilter: 'blur(14px)',
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04)`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${stat.color}60`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${stat.color}25, inset 0 1px 0 rgba(255,255,255,0.06)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${stat.color}28`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.04)`;
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 pointer-events-none rounded-tl-2xl"
                  style={{ background: `radial-gradient(circle at top right, ${stat.color}22, transparent 70%)` }}
                />
                <div
                  className="text-4xl md:text-5xl font-black mb-2 relative z-10"
                  style={{ fontFamily: 'Heebo, sans-serif', color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-sm font-semibold relative z-10" style={{ color: '#718096' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* USP Column */}
          <div>
            <h3
              className="text-2xl font-black mb-8 text-white"
              style={{ fontFamily: 'Heebo, sans-serif' }}
            >
              מה מייחד את הגישה שלי
            </h3>

            <div className="space-y-5">
              {usps.map((usp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 cursor-default"
                  style={{ background: 'rgba(255,107,53,0.04)', border: '1px solid rgba(255,107,53,0.1)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,53,0.1)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,53,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,53,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,53,0.1)';
                  }}
                >
                  {/* Checkmark */}
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(255,107,53,0.2)' }}
                  >
                    <svg width="14" height="14" fill="none" stroke="#FF6B35" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-semibold text-base" style={{ color: '#E2E8F0', lineHeight: 1.6 }}>
                    {usp}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl text-white font-black text-base transition-all duration-200 animate-pulse-glow"
                style={{ backgroundColor: '#FF6B35' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e85c27')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF6B35')}
              >
                רוצה לדעת עוד? דברו איתי
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
