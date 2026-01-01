
import React from 'react';
import { StrategyDetail, BuildStep } from '../types';

interface StrategyViewerProps {
  strategies: StrategyDetail[];
  civName: string;
  loading: boolean;
}

const StrategyViewer: React.FC<StrategyViewerProps> = ({ strategies, civName, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="font-cinzel text-amber-500 animate-pulse">Analyzing scrolls for {civName}...</p>
      </div>
    );
  }

  if (strategies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-slate-500">
        <p>Select a civilization to reveal their secrets of war.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-20">
      {strategies.map((strat, idx) => (
        <div key={idx} className="bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
          {/* Strategy Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 border-b border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-cinzel font-bold text-amber-400">{strat.title}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                strat.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                strat.difficulty === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {strat.difficulty}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {strat.keyBonuses.map((bonus, i) => (
                <span key={i} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded italic">
                  + {bonus}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-700/50">
            {/* Build Order */}
            <div className="p-6 col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center">
                <span className="mr-2">📝</span> Build Order
              </h3>
              <div className="space-y-3">
                {strat.buildOrder.map((step: BuildStep, i: number) => (
                  <div key={i} className="flex gap-3 text-sm group">
                    <span className="text-amber-500 font-mono w-12 shrink-0">{step.time}</span>
                    <span className="text-slate-200 group-hover:text-white transition-colors">{step.action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Game Phases */}
            <div className="p-6 col-span-1 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Early Game</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{strat.earlyGame}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Mid Game</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{strat.midGame}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Late Game</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{strat.lateGame}</p>
              </div>
            </div>

            {/* Composition & Counters */}
            <div className="p-6 col-span-1 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Unit Composition</h3>
                <div className="flex flex-wrap gap-2">
                  {strat.unitComposition.map((unit, i) => (
                    <span key={i} className="bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3 py-1 rounded-md text-xs font-semibold">
                      {unit}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Strong Against</h3>
                <div className="flex flex-wrap gap-2">
                  {strat.counters.map((c, i) => (
                    <span key={i} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-md text-xs">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StrategyViewer;
