import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#0f0f2e',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#fff',
    fontSize: '15px',
    fontFamily: 'Assistant, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const contactDetails = [
    {
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'טלפון',
      value: '050-123-4567',
    },
    {
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'אימייל',
      value: 'yaron@yaron-hanan.co.il',
    },
    {
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'מיקום',
      value: 'תל אביב, ישראל',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#070714' }}>
      {/* Orange glow - bottom left */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #FF6B35, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 block" style={{ backgroundColor: '#FF6B35' }} />
          <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#FF6B35' }}>
            צור קשר
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Details */}
          <div className="lg:col-span-2">
            <h2
              className="text-4xl md:text-5xl font-black mb-5 leading-tight"
              style={{ fontFamily: 'Heebo, sans-serif' }}
            >
              <span className="gradient-text">בואו נדבר</span>
            </h2>
            <p className="text-base mb-10" style={{ color: '#718096', lineHeight: 1.8 }}>
              מוכן לשמוע על האתגרים שלך ולגלות כיצד אוכל לעזור לארגון שלך לבנות חוסן ולנהל סיכונים בצורה חכמה יותר.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {contactDetails.map((d, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255,107,53,0.12)', color: '#FF6B35' }}
                  >
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#4A5568' }}>
                      {d.label}
                    </p>
                    <p className="text-sm font-semibold text-white">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{
                background: 'rgba(0,245,212,0.08)',
                border: '1px solid rgba(0,245,212,0.2)',
                color: '#00F5D4',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#00F5D4' }}
              />
              זמינות תוך 24 שעות
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: 'rgba(15,15,46,0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(0,245,212,0.15)' }}
                  >
                    <svg width="36" height="36" fill="none" stroke="#00F5D4" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-black mb-3 text-white"
                    style={{ fontFamily: 'Heebo, sans-serif' }}
                  >
                    ההודעה נשלחה!
                  </h3>
                  <p style={{ color: '#718096' }}>
                    תודה על פנייתך. ירון יחזור אליך תוך 24 שעות.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#4A5568' }}>
                        שם מלא *
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="ישראל ישראלי"
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#FF6B35')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#4A5568' }}>
                        אימייל *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="israel@company.co.il"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#FF6B35')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#4A5568' }}>
                      חברה / ארגון
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="שם החברה שלך"
                      value={form.company}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#FF6B35')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#4A5568' }}>
                      סוג פנייה
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => (e.target.style.borderColor = '#FF6B35')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    >
                      <option value="" style={{ backgroundColor: '#0f0f2e' }}>בחר סוג פנייה...</option>
                      <option value="lecture" style={{ backgroundColor: '#0f0f2e' }}>הרצאה</option>
                      <option value="workshop" style={{ backgroundColor: '#0f0f2e' }}>סדנה</option>
                      <option value="consulting" style={{ backgroundColor: '#0f0f2e' }}>ייעוץ ארגוני</option>
                      <option value="crisis" style={{ backgroundColor: '#0f0f2e' }}>ניהול משברים</option>
                      <option value="other" style={{ backgroundColor: '#0f0f2e' }}>אחר</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#4A5568' }}>
                      ספר לי על הצורך שלך
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="תאר את האתגר, הצורך או השאלה שלך..."
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={(e) => (e.target.style.borderColor = '#FF6B35')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white font-black text-base transition-all duration-200 animate-pulse-glow flex items-center justify-center gap-3"
                    style={{ backgroundColor: '#FF6B35' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e85c27')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF6B35')}
                  >
                    שלח הודעה
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
