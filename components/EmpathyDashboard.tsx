
import React from 'react';
import { CallMetric } from '../types';
import Gauge from './Gauge';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface EmpathyDashboardProps {
  metrics: CallMetric;
  history: { time: string, value: number }[];
  avatarUrl: string | null;
}

const EmpathyDashboard: React.FC<EmpathyDashboardProps> = ({ metrics, history, avatarUrl }) => {
  // Determine border color based on empathy
  const getStatusColor = () => {
    if (metrics.empathy > 70) return 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]';
    if (metrics.empathy > 40) return 'border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]';
    return 'border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.4)]';
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 h-full flex flex-col gap-4 overflow-y-auto">
      
      {/* Visual Customer Profile */}
      <div className="flex flex-col items-center gap-3">
        <div className={`relative w-full aspect-square max-w-[240px] rounded-2xl border-2 transition-all duration-1000 overflow-hidden bg-zinc-800 ${getStatusColor()}`}>
          {avatarUrl ? (
            <img src={avatarUrl} alt="Customer" className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-zinc-600">
              <div className="w-8 h-8 border-4 border-zinc-700 border-t-cyan-500 rounded-full animate-spin"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest">מייצר דמות...</span>
            </div>
          )}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${metrics.empathy > 40 ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
            <span className="text-[10px] font-black text-white uppercase tracking-tighter">LIVE FEED</span>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-cyan-400 font-bold text-lg">פרופיל לקוח</h2>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">זיהוי סנטימנט פעיל</p>
        </div>
      </div>

      <div className="h-px bg-zinc-800 my-2"></div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-2 lg:gap-4">
        <Gauge value={metrics.empathy} label="אמפתיה" color="#ec4899" size={90} />
        <Gauge value={metrics.professionalism} label="מקצועיות" color="#22d3ee" size={90} />
        <Gauge value={metrics.objectionHandling} label="התנגדויות" color="#f59e0b" size={90} />
        <Gauge value={metrics.procedureAdherence} label="נהלים" color="#10b981" size={90} />
      </div>

      {/* History Chart */}
      <div className="mt-2 flex flex-col flex-1 min-h-[120px]">
        <h3 className="text-[10px] font-semibold text-zinc-500 uppercase mb-2">מגמת סנטימנט</h3>
        <div className="flex-1 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={history}>
              <XAxis dataKey="time" hide />
              <YAxis hide domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', fontSize: '10px' }}
                itemStyle={{ color: '#22d3ee' }}
              />
              <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={2} dot={false} isAnimationActive={true} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EmpathyDashboard;
