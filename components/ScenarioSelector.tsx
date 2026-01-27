
import React from 'react';
import { Scenario } from '../types';
import { SCENARIOS } from '../constants';

interface ScenarioSelectorProps {
  difficulty: string;
  onSelect: (scenario: Scenario) => void;
  onBack: () => void;
}

const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({ difficulty, onSelect, onBack }) => {
  const filteredScenarios = SCENARIOS.filter(s => s.difficulty === difficulty);

  return (
    <div className="max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          חזרה לרמות קושי
        </button>
        <div className="text-right">
          <h2 className="text-2xl font-bold">בחר תרחיש - רמה {difficulty === 'Easy' ? 'קלה' : difficulty === 'Medium' ? 'בינונית' : 'קשה'}</h2>
          <p className="text-zinc-500 text-sm">בחר את המקרה שאיתו תרצה להתאמן</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredScenarios.map((s) => (
          <div 
            key={s.id}
            onClick={() => onSelect(s)}
            className="group relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl cursor-pointer hover:border-cyan-500/50 hover:bg-zinc-800/50 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4">
               <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-cyan-500 transition-colors">
                 {s.category}
               </span>
            </div>
            
            <h3 className="text-2xl font-black mb-3 group-hover:text-cyan-400 transition-colors">{s.title}</h3>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">{s.description}</p>
            
            <div className="space-y-3 mb-8">
              <div className="text-[10px] font-bold text-zinc-500 uppercase">דגשים לשיחה:</div>
              {s.procedures.slice(0, 2).map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                  <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                  {p}
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-sm font-bold group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all transform group-active:scale-95">
              התחל סימולציה
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioSelector;
