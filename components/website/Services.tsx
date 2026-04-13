import React from 'react';

const services = [
  {
    color: '#FF6B35',
    bgColor: 'rgba(255,107,53,0.07)',
    borderColor: 'rgba(255,107,53,0.25)',
    glowColor: 'rgba(255,107,53,0.25)',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: 'הרצאות',
    subtitle: 'מרתקות ומעוררות השראה',
    description: 'הרצאות מותאמות אישית לארגונים, כנסים ואירועים עסקיים. ירון מביא ידע, חוויות שטח ותובנות שישנו את הדרך שבה הקהל שלך חושב על משברים ואתגרים.',
    bullets: ['כנסים ואירועי חברה', 'הרצאות סגורות לצוותי מנהלים', 'הרצאות ציבוריות ו-TEDx'],
  },
  {
    color: '#FFD60A',
    bgColor: 'rgba(255,214,10,0.07)',
    borderColor: 'rgba(255,214,10,0.25)',
    glowColor: 'rgba(255,214,10,0.2)',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'סדנאות',
    subtitle: 'אינטנסיביות ופרקטיות',
    description: 'סדנאות חוויתיות לפיתוח מנהיגות ובניית חוסן ארגוני. הכלים שהמשתתפים מקבלים מיושמים ביום שלמחרת — לא תיאוריה, אלא פרקטיקה.',
    bullets: ['סדנאות מנהלים בכירים', 'תרגולי משבר וסימולציות', 'בניית תוכנית חירום ארגונית'],
  },
  {
    color: '#00F5D4',
    bgColor: 'rgba(0,245,212,0.06)',
    borderColor: 'rgba(0,245,212,0.22)',
    glowColor: 'rgba(0,245,212,0.2)',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'ייעוץ ארגוני',
    subtitle: 'ליווי מקצועי ומעמיק',
    description: 'ליווי אישי ומקצועי לארגונים בבניית מסגרות ניהול סיכונים. ירון משמש "שותף אסטרטגי" לצד המנהלים — מבחינה, מנתח ומסייע לקבל החלטות קריטיות.',
    bullets: ['מיפוי סיכונים ארגוני', 'פיתוח מדיניות ניהול משבר', 'ליווי C-level וצוות ניהול'],
  },
  {
    color: '#BF5AF2',
    bgColor: 'rgba(191,90,242,0.07)',
    borderColor: 'rgba(191,90,242,0.25)',
    glowColor: 'rgba(191,90,242,0.22)',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'ניהול משברים',
    subtitle: 'בזמן אמת',
    description: 'הכנה, תגובה והתאוששות ממשברים בזמן אמת. ירון זמין כ"ראש משבר" חיצוני — מוביל את הארגון מרגע הפגיעה ועד חזרה לשגרה מלאה.',
    bullets: ['תגובה מיידית לאירועי חירום', 'ניהול תקשורת במשבר', 'תוכנית התאוששות ו-BCP'],
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: '#070714',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 block" style={{ backgroundColor: '#FF6B35' }} />
          <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#FF6B35' }}>
            שירותים
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ fontFamily: 'Heebo, sans-serif' }}
          >
            מה אני<br />
            <span className="gradient-text">מציע לך</span>
          </h2>
          <p
            className="text-base max-w-sm"
            style={{ color: '#718096', lineHeight: 1.8 }}
          >
            כל שירות מותאם בדיוק לצרכים ולאתגרים הספציפיים של הארגון שלך
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 card-hover relative overflow-hidden group cursor-default"
              style={{
                background: `linear-gradient(145deg, ${svc.bgColor}, rgba(7,7,20,0.5))`,
                border: `1px solid ${svc.borderColor}`,
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 60px ${svc.glowColor}, inset 0 1px 0 rgba(255,255,255,0.05)`;
                (e.currentTarget as HTMLElement).style.borderColor = svc.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
                (e.currentTarget as HTMLElement).style.borderColor = svc.borderColor;
              }}
            >
              {/* Top border accent — gradient */}
              <div
                className="absolute top-0 right-0 left-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${svc.color}22`, color: svc.color }}
              >
                {svc.icon}
              </div>

              <h3
                className="text-2xl font-black mb-1"
                style={{ fontFamily: 'Heebo, sans-serif', color: svc.color }}
              >
                {svc.title}
              </h3>
              <p className="text-xs font-semibold mb-4 uppercase tracking-wide" style={{ color: '#4A5568' }}>
                {svc.subtitle}
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#A0AEC0' }}>
                {svc.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {svc.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#718096' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: svc.color }} />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-200"
                style={{ color: svc.color }}
              >
                צור קשר לפרטים
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
