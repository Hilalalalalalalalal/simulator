
import React, { useState, useEffect, useRef } from 'react';
import { Scenario, Message, CallMetric, ImageSize, AspectRatio } from '../types';
import { GeminiService, decodeAudio, decodeAudioData } from '../services/geminiService';
import EmpathyDashboard from './EmpathyDashboard';
import Gauge from './Gauge';

interface ActiveCallProps {
  scenario: Scenario;
  onEnd: () => void;
  repName: string;
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
}

interface InstantFeedback {
  id: number;
  message: string;
  empathy: number;
  professionalism: number;
  explanation: string;
  type: 'positive' | 'negative';
}

const ActiveCall: React.FC<ActiveCallProps> = ({ scenario, onEnd, repName, audioEnabled, setAudioEnabled }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [holdTime, setHoldTime] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<CallMetric>({ empathy: 50, professionalism: 50, objectionHandling: 50, procedureAdherence: 50 });
  const [sentimentHistory, setSentimentHistory] = useState<{ time: string, value: number }[]>([]);
  const [activeFeedback, setActiveFeedback] = useState<InstantFeedback | null>(null);
  const [activeStep, setActiveStep] = useState<string>('GREETING');
  const [showStatsMobile, setShowStatsMobile] = useState(false);

  const gemini = useRef(new GeminiService());
  const chatEndRef = useRef<HTMLDivElement>(null);
  const feedbackCounter = useRef(0);
  const holdIntervalRef = useRef<number | null>(null);
  const outAudioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    setMessages([{ role: 'model', text: scenario.initialPrompt, timestamp: new Date() }]);
    const loadAvatar = async () => {
      const url = await gemini.current.generateAvatar(scenario, ImageSize.S1K, AspectRatio.A1_1);
      setAvatarUrl(url);
    };
    loadAvatar();
    return () => {
      if (outAudioContextRef.current) outAudioContextRef.current.close().catch(() => {});
      if (holdIntervalRef.current) window.clearInterval(holdIntervalRef.current);
    };
  }, [scenario]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOnHold) {
      setHoldTime(0);
      holdIntervalRef.current = window.setInterval(() => {
        setHoldTime(prev => prev + 1);
      }, 1000);
    } else {
      if (holdIntervalRef.current) window.clearInterval(holdIntervalRef.current);
    }
  }, [isOnHold]);

  const playFeedbackAudio = async (text: string) => {
    if (!audioEnabled || isOnHold) return;
    try {
      if (!outAudioContextRef.current) outAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const ctx = outAudioContextRef.current;
      if (ctx.state === 'suspended') await ctx.resume();
      
      const base64Audio = await gemini.current.generateSpeech(text);
      if (base64Audio) {
        const buffer = await decodeAudioData(decodeAudio(base64Audio), ctx, 24000, 1);
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start();
      }
    } catch (e) { console.error("Coach Audio Error:", e); }
  };

  const analyzeConversation = async (currentTranscript: Message[]) => {
    if (isOnHold) return;
    setAnalyzing(true);
    const transcriptText = currentTranscript.map(m => `${m.role === 'user' ? repName : 'Customer'}: ${m.text}`).join('\n');
    try {
      const result = await gemini.current.analyzeCall(transcriptText, repName);
      if (result.metrics) {
        setMetrics(result.metrics);
        setSentimentHistory(prev => [...prev, { time: new Date().toLocaleTimeString(), value: result.metrics.empathy }]);
        const mainFeedback = result.feedbacks?.[0];
        const feedbackObj: InstantFeedback = {
          id: ++feedbackCounter.current,
          message: result.message || "ניתוח תגובה",
          empathy: result.metrics.empathy || 50,
          professionalism: result.metrics.professionalism || 50,
          explanation: mainFeedback?.text || "תגובה נותחה.",
          type: mainFeedback?.type || 'positive'
        };
        setActiveFeedback(feedbackObj);
        if (mainFeedback?.audioPrompt) playFeedbackAudio(mainFeedback.audioPrompt);
        setTimeout(() => setActiveFeedback(prev => prev?.id === feedbackObj.id ? null : prev), 7000);
      }
      if (result.currentStep) setActiveStep(result.currentStep);
    } catch (e) { console.error("Coach Analysis Error:", e); } finally { setAnalyzing(false); }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || loading || isOnHold) return;
    const userMsg: Message = { role: 'user', text: inputValue, timestamp: new Date() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue('');
    setLoading(true);
    analyzeConversation(newMessages);
    try {
      const history = newMessages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
      const responseText = await gemini.current.getChatResponse(scenario, history);
      setMessages(prev => [...prev, { role: 'model', text: responseText || '...', timestamp: new Date() }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'system', text: 'שגיאת תקשורת.', timestamp: new Date() }]);
    } finally { setLoading(false); }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const steps = [
    { id: 'GREETING', label: 'שם ואמפתיה' },
    { id: 'ID_VERIFICATION', label: 'זיהוי' },
    { id: 'SOLUTION_PLAN', label: 'שיקוף' }
  ];

  return (
    <div className="flex flex-col lg:flex-row h-[100dvh] overflow-hidden bg-black text-white p-2 lg:p-4 gap-2 lg:gap-4 relative">
      
      {/* Hold Overlay */}
      {isOnHold && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-zinc-900 border-4 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.3)] flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 rounded-full border-4 border-amber-500 animate-ping opacity-20"></div>
            <svg className="w-12 h-12 lg:w-16 lg:h-16 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black mb-2 tracking-tighter text-amber-500">השיחה בהמתנה</h2>
          <p className="text-zinc-400 text-lg lg:text-xl mb-6">הלקוח לא שומע אותך כרגע</p>
          <div className="bg-zinc-800/50 rounded-2xl px-8 py-4 border border-zinc-700 mb-10">
            <span className="text-sm text-zinc-500 uppercase block mb-1">זמן המתנה</span>
            <span className="text-3xl font-mono font-bold text-white tracking-widest">{formatTime(holdTime)}</span>
          </div>
          <button 
            onClick={() => setIsOnHold(false)}
            className="group relative px-12 py-4 bg-emerald-500 text-black font-black text-xl rounded-2xl hover:bg-emerald-400 transition-all active:scale-95 shadow-[0_10px_40px_rgba(16,185,129,0.3)]"
          >
            חזור לשיחה
          </button>
        </div>
      )}

      {analyzing && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[110] bg-cyan-500 text-black text-[10px] font-bold px-3 py-1 rounded-full animate-pulse shadow-lg shadow-cyan-500/20">
          מאמן מנתח ביצועים...
        </div>
      )}

      {activeFeedback && !isOnHold && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-lg animate-in slide-in-from-top duration-500">
          <div className="bg-zinc-900/95 backdrop-blur-3xl border-2 border-zinc-700/50 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
            <div className={`absolute top-0 inset-x-0 h-1 ${activeFeedback.type === 'positive' ? 'bg-cyan-500' : 'bg-pink-500'}`}></div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className={`p-1 rounded-full ${activeFeedback.type === 'positive' ? 'bg-cyan-500' : 'bg-pink-500'}`}>
                  {activeFeedback.type === 'positive' ? (
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  )}
                </span>
                משוב מאמן
              </h3>
              <button onClick={() => setActiveFeedback(null)} className="text-zinc-500 hover:text-white"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Gauge value={activeFeedback.empathy} label="אמפתיה" color="#ec4899" size={140} />
              <Gauge value={activeFeedback.professionalism} label="מקצועיות" color="#22d3ee" size={140} />
            </div>
            <div className="bg-black/60 border border-white/10 rounded-2xl p-4">
              <p className="text-zinc-300 text-sm leading-relaxed text-center">
                <strong className="block text-white mb-1 text-base">{activeFeedback.message}</strong>
                {activeFeedback.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className={`${showStatsMobile ? 'fixed inset-0 z-[60] p-4 bg-black/90 backdrop-blur-xl block' : 'hidden'} lg:relative lg:block lg:w-1/3`}>
        <div className="h-full relative">
          <button onClick={() => setShowStatsMobile(false)} className="lg:hidden absolute top-2 left-2 p-2 bg-zinc-800 rounded-full z-10"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
          <EmpathyDashboard metrics={metrics} history={sentimentHistory} avatarUrl={avatarUrl} />
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-zinc-900/30 border border-zinc-800 rounded-xl lg:rounded-2xl overflow-hidden">
        <div className="p-3 lg:p-4 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2 lg:gap-4 overflow-hidden">
            <div className="truncate">
              <h1 className="font-bold text-sm lg:text-lg truncate">{scenario.title}</h1>
              <p className="text-[10px] lg:text-xs text-zinc-500 truncate">נציג: {repName}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 lg:gap-2 shrink-0">
            <button onClick={() => setShowStatsMobile(true)} className="lg:hidden p-2 rounded-lg bg-zinc-800 text-cyan-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></button>
            <button onClick={() => setAudioEnabled(!audioEnabled)} className={`p-2 rounded-lg border transition-all ${audioEnabled ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400' : 'border-zinc-700 bg-zinc-800 text-zinc-500'}`} title="הפעל/השתק משוב קולי מהמאמן"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={audioEnabled ? "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" : "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"} /></svg></button>
            
            <button 
              onClick={() => setIsOnHold(!isOnHold)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border font-bold text-xs transition-all ${isOnHold ? 'bg-amber-500 text-black border-amber-400' : 'bg-zinc-800 text-amber-500 border-zinc-700 hover:border-amber-500/50'}`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              {isOnHold ? 'בהמתנה' : 'המתן'}
            </button>

            <button onClick={onEnd} className="px-3 lg:px-4 py-2 bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg text-xs lg:text-sm font-bold">סיים</button>
          </div>
        </div>

        <div className="flex bg-black/50 border-b border-zinc-800 p-1.5 gap-1.5 shrink-0">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex-1 flex flex-col items-center gap-0.5">
              <div className={`h-1 w-full rounded-full transition-all duration-700 ${activeStep === step.id || (idx < steps.findIndex(s => s.id === activeStep)) ? 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-zinc-800'}`}></div>
              <span className={`text-[8px] lg:text-[9px] uppercase font-bold transition-colors ${activeStep === step.id ? 'text-cyan-400' : 'text-zinc-600'}`}>{step.label}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[85%] p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all ${m.role === 'user' ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-50' : m.role === 'system' ? 'bg-red-900/20 border border-red-800 text-red-200' : 'bg-zinc-800/80 border border-zinc-700 text-zinc-100 shadow-xl'}`}>
                <p className="text-sm leading-relaxed">{m.text}</p>
                <span className="text-[10px] text-zinc-500 mt-1 block opacity-50">{m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-end">
              <div className="bg-zinc-800 p-3 rounded-xl animate-pulse">
                <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-75"></div><div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150"></div></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-3 lg:p-6 bg-zinc-900 border-t border-zinc-800 flex gap-2 lg:gap-4 shrink-0">
          <input 
            type="text" 
            disabled={isOnHold}
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
            placeholder={isOnHold ? "השיחה בהמתנה..." : "הקלד כאן..."} 
            className="flex-1 bg-black/50 border border-zinc-700 rounded-xl px-3 lg:px-5 py-3 lg:py-4 text-sm focus:outline-none focus:border-cyan-500 disabled:opacity-50" 
          />
          <button 
            onClick={handleSendMessage} 
            disabled={loading || isOnHold} 
            className="bg-cyan-500 text-black font-black px-4 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-cyan-400 disabled:opacity-50 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
          >
            שלח
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveCall;
