
import React, { useState, useEffect } from 'react';
import ScenarioSelector from './components/ScenarioSelector';
import ActiveCall from './components/ActiveCall';
import { Scenario } from './types';

const App: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [repName, setRepName] = useState<string>('');
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('audio_feedback_enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('audio_feedback_enabled', JSON.stringify(audioEnabled));
  }, [audioEnabled]);

  const handleStartCall = (scenario: Scenario) => {
    setCurrentScenario(scenario);
  };

  const handleEndCall = () => {
    setCurrentScenario(null);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repName.trim()) {
      setIsNameEntered(true);
    }
  };

  // Optional: Allow user to still open the key selector if they want, but don't block them.
  const handleOpenKeyDialog = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      await window.aistudio.openSelectKey();
    }
  };

  if (!isNameEntered) {
    return (
      <div className="min-h-[100dvh] bg-black text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-6 lg:p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <h1 className="text-2xl lg:text-3xl font-black mb-4 text-center bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              ברוכים הבאים לסימולטור
            </h1>
            <p className="text-zinc-400 text-center mb-6 text-sm">אנא הזן את שמך כדי להתחיל באימון</p>
            <form onSubmit={handleNameSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase mb-2 mr-1">שם הנציג/ה</label>
                <input
                  autoFocus
                  type="text"
                  value={repName}
                  onChange={(e) => setRepName(e.target.value)}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-cyan-500 transition-all text-center"
                  placeholder="הכנס שם מלא..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-black font-black py-4 rounded-xl hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95"
              >
                כניסה למערכת
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const DifficultyPicker = () => (
    <div className="max-w-6xl mx-auto px-4 animate-in fade-in zoom-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* קל - נורה */}
        <div 
          onClick={() => setSelectedDifficulty('Easy')}
          className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-500 overflow-hidden flex flex-col"
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src="input_file_1.jpeg" 
              alt="Easy Mode" 
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
          </div>
          <div className="p-8">
            <h3 className="text-3xl font-black mb-2 text-emerald-400">קל</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">לקוחות נחמדים, בעיות פשוטות. מצוין לתרגול יסודות השירות והאמפתיה.</p>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-500/80">
              <span>2 תרחישים זמינים</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        </div>

        {/* בינוני - סימן שאלה */}
        <div 
          onClick={() => setSelectedDifficulty('Medium')}
          className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-500 overflow-hidden flex flex-col"
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src="input_file_0.jpeg" 
              alt="Medium Mode" 
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
          </div>
          <div className="p-8">
            <h3 className="text-3xl font-black mb-2 text-amber-400">בינוני</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">לקוחות לחוצים, טעויות בחשבונית. דורש ריכוז, מקצועיות ויכולת שיקוף נתונים.</p>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500/80">
              <span>2 תרחישים זמינים</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        </div>

        {/* קשה - מתנה */}
        <div 
          onClick={() => setSelectedDifficulty('Hard')}
          className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl cursor-pointer hover:border-pink-500/50 hover:bg-pink-500/5 transition-all duration-500 overflow-hidden flex flex-col"
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src="input_file_2.jpeg" 
              alt="Hard Mode" 
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
          </div>
          <div className="p-8">
            <h3 className="text-3xl font-black mb-2 text-pink-400">קשה</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">לקוחות זועמים, ניסיונות נטישה. דורש חוסן נפשי, טיפול בהתנגדויות ושימור לקוח.</p>
            <div className="flex items-center gap-2 text-xs font-bold text-pink-500/80">
              <span>2 תרחישים זמינים</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-[100dvh] bg-black text-white selection:bg-cyan-500 selection:text-black">
      {!currentScenario && (
        <header className="py-8 lg:py-16 px-4 flex flex-col items-center text-center">
          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 mb-6">
            <div className="inline-block px-3 py-1 rounded-full border border-cyan-500/50 text-cyan-400 text-[10px] lg:text-xs font-bold animate-pulse">
              שלום, {repName} | SIMULATOR v4.0
            </div>
            <button 
              onClick={() => setAudioEnabled(!audioEnabled)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] lg:text-xs font-bold transition-all ${
                audioEnabled ? 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10' : 'border-zinc-800 text-zinc-500'
              }`}
            >
              {audioEnabled ? 'פידבק קולי פעיל' : 'פידבק קולי כבוי'}
            </button>
            {window.aistudio && (
              <button 
                onClick={handleOpenKeyDialog}
                className="px-3 py-1 rounded-full border border-zinc-800 text-zinc-500 text-[10px] lg:text-xs font-bold hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                הגדרות API
              </button>
            )}
          </div>
          <h1 className="text-4xl lg:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent">
            אימון במוקד השירות
          </h1>
          <p className="max-w-2xl text-zinc-500 leading-relaxed text-base lg:text-xl font-light mb-12">
            בחר את רמת האתגר שמתאימה לך היום. ה-AI ידמה לקוח אמיתי וינתח את האמפתיה והמקצועיות שלך.
          </p>
          
          {!selectedDifficulty ? (
             <div className="w-full">
               <div className="flex justify-between items-center max-w-6xl mx-auto mb-8 border-b border-zinc-900 pb-4">
                  <h2 className="text-xl lg:text-2xl font-bold flex items-center gap-2">
                    <span className="w-1.5 h-6 lg:h-8 bg-cyan-500 rounded-full"></span>
                    בחר רמת קושי
                  </h2>
               </div>
               <DifficultyPicker />
             </div>
          ) : (
            <ScenarioSelector 
              difficulty={selectedDifficulty} 
              onSelect={handleStartCall}
              onBack={() => setSelectedDifficulty(null)}
            />
          )}
        </header>
      )}

      {currentScenario && (
        <main className="pb-8">
          <ActiveCall 
            scenario={currentScenario} 
            onEnd={handleEndCall} 
            repName={repName} 
            audioEnabled={audioEnabled}
            setAudioEnabled={setAudioEnabled}
          />
        </main>
      )}

      <style>{`
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          animation: gradient-text 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
