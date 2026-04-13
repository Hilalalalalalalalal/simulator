import React, { useEffect, useRef, useState } from 'react';

const articles = [
  {
    title: 'מנהיגות בשעת חירום — לקחים מהשטח',
    date: 'מרץ 2024',
    category: 'מנהיגות',
    categoryColor: '#FF6B35',
    excerpt: 'ניהול משבר אינו רק תכנון טכני — הוא בראש ובראשונה מנהיגות אנושית. במאמר זה אסביר מה מבדיל מנהיג שמוביל תחת לחץ מכזה שמתפרק, ומה ניתן לעשות כבר היום כדי להתכונן.',
    readTime: '6 דקות קריאה',
    href: 'https://yaronhanan-cecr.co.il',
  },
  {
    title: 'ניהול סיכונים ארגוני — מדוע ERM הוא לא עוד מסמך PDF',
    date: 'ינואר 2024',
    category: 'ניהול סיכונים',
    categoryColor: '#FFD60A',
    excerpt: 'רוב הארגונים מחזיקים תוכנית ניהול סיכונים בגירסת Word שאף אחד לא פותח. ניהול סיכונים אמיתי הוא תרבות ארגונית חיה — ואני אראה לך איך לבנות אחת כזו.',
    readTime: '8 דקות קריאה',
    href: 'https://yaronhanan-cecr.co.il',
  },
  {
    title: 'המשכיות עסקית בעידן הסייבר — BCM שלא נתפס לישן',
    date: 'נובמבר 2023',
    category: 'המשכיות עסקית',
    categoryColor: '#00F5D4',
    excerpt: 'תוכניות BCM שנכתבו לפני 5 שנים לא מתייחסות לתרחיש סייבר. פירוט של שיטות עדכניות לניהול המשכיות עסקית שמשלבות גם איומי סייבר, גם שינויי אקלים וגם שיבושי שרשרת אספקה.',
    readTime: '7 דקות קריאה',
    href: 'https://yaronhanan-cecr.co.il',
  },
  {
    title: 'קבלת החלטות תחת לחץ — מדע וטכניקות מעשיות',
    date: 'ספטמבר 2023',
    category: 'מנהיגות',
    categoryColor: '#FF6B35',
    excerpt: 'כשהלחץ גבוה, המוח נוטה לפעול בדפוסים שגויים. במאמר זה נסביר את הנוירוביולוגיה של קבלת החלטות בחירום ונציג 4 טכניקות שמשמשות את צוותי הניהול הטובים ביותר בעולם.',
    readTime: '5 דקות קריאה',
    href: 'https://yaronhanan-cecr.co.il',
  },
  {
    title: 'בניית חוסן ארגוני — מעבר לניהול משברים ריאקטיבי',
    date: 'יולי 2023',
    category: 'חוסן ארגוני',
    categoryColor: '#BF5AF2',
    excerpt: 'ארגון חסין לא מחכה למשבר כדי ללמוד ממנו. חוסן ארגוני הוא יכולת פרואקטיבית שנבנית בשגרה. הנה מסגרת מעשית לבניית חוסן בתוך 90 יום.',
    readTime: '9 דקות קריאה',
    href: 'https://yaronhanan-cecr.co.il',
  },
  {
    title: 'כיצד לערוך תרגול חירום ארגוני שלא נגמר בשאלון',
    date: 'מאי 2023',
    category: 'הכשרה',
    categoryColor: '#00F5D4',
    excerpt: 'תרגולי חירום רבים מסתכמים במילוי שאלון ובמצגת. תרגול אמיתי מפעיל את הארגון, חושף פערים ומייצר זיכרון שרירי. הנה מדריך מעשי לתרגול שמשנה התנהגות.',
    readTime: '6 דקות קריאה',
    href: 'https://yaronhanan-cecr.co.il',
  },
  {
    title: 'חקר אירועים ולמידה ארגונית — איך הופכים כישלון להצלחה',
    date: 'מרץ 2023',
    category: 'ניהול סיכונים',
    categoryColor: '#FFD60A',
    excerpt: 'ארגונים שחוקרים כישלונות ברצינות הם ארגונים שמצמחים מהם. מתודולוגיה מעמיקה לחקר אירועים ביטחוניים, תפעוליים וניהוליים — עם דגש על למידה ושיפור מתמיד.',
    readTime: '7 דקות קריאה',
    href: 'https://yaronhanan-cecr.co.il',
  },
  {
    title: 'מנהל או מנהיג? ההבדל שמכריע בשעות הקריטיות',
    date: 'ינואר 2023',
    category: 'מנהיגות',
    categoryColor: '#FF6B35',
    excerpt: 'בזמן שגרה ניתן להסתדר עם ניהול תקין. אבל בשעת חירום — רק מנהיגות אמיתית מצילה מצבים. מה ההבדל בין השניים ואיך מפתחים את היכולת להחליף הילוך בזמן אמת?',
    readTime: '5 דקות קריאה',
    href: 'https://yaronhanan-cecr.co.il',
  },
];

const Articles: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="articles"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0d0d2b' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: 'radial-gradient(rgba(255,107,53,1) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.06), transparent 70%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div
          className="mb-14"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 block" style={{ backgroundColor: '#FF6B35' }} />
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#FF6B35' }}>מאמרים</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ fontFamily: 'Heebo, sans-serif' }}>
              תובנות מהשטח<br />
              <span className="gradient-text">ידע שמשנה</span>
            </h2>
            <a
              href="https://yaronhanan-cecr.co.il/מאמרים/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 flex-shrink-0"
              style={{ color: '#FF6B35' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFD60A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FF6B35')}
            >
              כל המאמרים
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Articles grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art, i) => (
            <a
              key={i}
              href={art.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl card-hover"
              style={{
                background: hovered === i
                  ? 'linear-gradient(145deg, rgba(20,20,55,0.9), rgba(12,12,35,0.8))'
                  : 'linear-gradient(145deg, rgba(15,15,46,0.7), rgba(10,10,30,0.5))',
                border: hovered === i ? `1px solid ${art.categoryColor}44` : '1px solid rgba(255,255,255,0.06)',
                boxShadow: hovered === i ? `0 20px 50px ${art.categoryColor}15` : 'none',
                backdropFilter: 'blur(12px)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${0.1 + i * 0.07}s, transform 0.6s ease ${0.1 + i * 0.07}s, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
                textDecoration: 'none',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="p-7">
                {/* Top row */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: `${art.categoryColor}18`, color: art.categoryColor, border: `1px solid ${art.categoryColor}33` }}
                  >
                    {art.category}
                  </span>
                  <span className="text-xs" style={{ color: '#2D3748' }}>{art.date}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-black mb-3 leading-tight transition-colors duration-200"
                  style={{
                    fontFamily: 'Heebo, sans-serif',
                    color: hovered === i ? '#fff' : '#E2E8F0',
                    lineHeight: 1.45,
                  }}
                >
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm mb-5" style={{ color: '#718096', lineHeight: 1.85 }}>
                  {art.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold" style={{ color: '#2D3748' }}>{art.readTime}</span>
                  <span
                    className="text-xs font-bold flex items-center gap-1.5 transition-all duration-200"
                    style={{ color: hovered === i ? art.categoryColor : '#2D3748' }}
                  >
                    קרא עוד
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                      style={{ transform: `scaleX(-1) translateX(${hovered === i ? '-3px' : '0'})`, transition: 'transform 0.2s ease' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-0.5 rounded-b-2xl transition-all duration-300"
                style={{
                  background: hovered === i ? `linear-gradient(90deg, transparent, ${art.categoryColor}, transparent)` : 'transparent',
                }}
              />
            </a>
          ))}
        </div>

        {/* View all CTA */}
        <div
          className="mt-12 text-center"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.6s' }}
        >
          <a
            href="https://yaronhanan-cecr.co.il/מאמרים/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-200"
            style={{
              border: '1.5px solid rgba(255,107,53,0.3)',
              color: '#FF6B35',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,107,53,0.1)';
              (e.currentTarget as HTMLElement).style.borderColor = '#FF6B35';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,53,0.3)';
            }}
          >
            לכל המאמרים באתר המקורי
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
