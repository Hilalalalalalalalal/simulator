import React from 'react';

const testimonials = [
  {
    quote: 'ירון הוביל את הארגון שלנו דרך משבר ביטחוני חסר תקדים. המקצועיות והרוגע שלו בזמן אמת היו מרשימים ביותר. הצוות עבד בצורה מסונכרנת, ויצאנו מהמשבר חזקים יותר ממה שנכנסנו.',
    name: 'דוד לוי',
    title: 'מנכ"ל',
    company: 'חברת טכנולוגיה מובילה',
    initials: 'ד"ל',
    color: '#FF6B35',
  },
  {
    quote: 'הסדנה שירון העביר שינתה את האופן שבו הצוות שלי מתמודד עם לחץ ואי-ודאות. הכלים שקיבלנו פרקטיים לגמרי — אנחנו משתמשים בהם בכל ישיבת הנהלה.',
    name: 'שרה כהן',
    title: 'מנהלת משאבי אנוש',
    company: 'ארגון ממשלתי',
    initials: 'ש"כ',
    color: '#FFD60A',
  },
  {
    quote: 'ייעוץ ברמה אחרת לגמרי. ירון מבין את הדינמיקה הארגונית ויודע בדיוק איפה ללחוץ. ההשקעה החזירה את עצמה פי עשרה — ובסיטואציה שבה המשבר הגיע, הייינו מוכנים.',
    name: 'אמיר שפירא',
    title: 'יו"ר דירקטוריון',
    company: 'קבוצה תעשייתית',
    initials: 'א"ש',
    color: '#00F5D4',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0d0d2b' }}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, #BF5AF2, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 block" style={{ backgroundColor: '#FF6B35' }} />
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#FF6B35' }}>
              המלצות
            </span>
            <span className="w-8 h-0.5 block" style={{ backgroundColor: '#FF6B35' }} />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: 'Heebo, sans-serif' }}
          >
            מה אומרים<br />
            <span className="gradient-text">הלקוחות</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 card-hover relative flex flex-col"
              style={{
                background: 'rgba(15,15,46,0.7)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${t.color}44`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${t.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              {/* Quote mark */}
              <div
                className="text-6xl font-black leading-none mb-4 select-none"
                style={{ color: t.color, opacity: 0.4, fontFamily: 'Georgia, serif' }}
              >
                "
              </div>

              {/* Quote text */}
              <p
                className="text-base leading-relaxed flex-grow mb-6"
                style={{ color: '#A0AEC0', lineHeight: 1.85 }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div
                className="w-12 h-0.5 mb-5 rounded-full"
                style={{ backgroundColor: t.color, opacity: 0.6 }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className="text-xs" style={{ color: '#4A5568' }}>
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 p-8 md:p-10 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(191,90,242,0.1))',
            border: '1px solid rgba(255,107,53,0.2)',
          }}
        >
          <p
            className="text-xl md:text-2xl font-black mb-4 text-white"
            style={{ fontFamily: 'Heebo, sans-serif' }}
          >
            מוכן להוביל את הארגון שלך דרך כל אתגר?
          </p>
          <p className="mb-6" style={{ color: '#718096' }}>
            הצטרף למאות מנהלים שכבר שינו את הדרך שבה הם מתמודדים עם משברים
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-black text-base transition-all duration-200 animate-pulse-glow"
            style={{ backgroundColor: '#FF6B35' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e85c27')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF6B35')}
          >
            צור קשר עכשיו
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
