
import React from 'react';
import { CIVILIZATIONS } from '../constants';
import { Civilization } from '../types';

interface CivGridProps {
  onSelect: (civ: Civilization) => void;
  selectedId: string | null;
}

const CivGrid: React.FC<CivGridProps> = ({ onSelect, selectedId }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {CIVILIZATIONS.map((civ) => (
        <button
          key={civ.id}
          onClick={() => onSelect(civ)}
          className={`group relative flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            selectedId === civ.id
              ? 'bg-amber-500/20 border-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
              : 'bg-slate-800/50 border-slate-700 hover:border-amber-500/50'
          }`}
        >
          <span className="text-4xl mb-3 group-hover:animate-bounce">{civ.icon}</span>
          <h3 className="text-lg font-cinzel font-bold text-white mb-1">{civ.name}</h3>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">{civ.type}</span>
          <div className="mt-2 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {civ.focus} Specialist
          </div>
        </button>
      ))}
    </div>
  );
};

export default CivGrid;
