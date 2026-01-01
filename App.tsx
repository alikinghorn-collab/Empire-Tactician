
import React, { useState, useEffect, useCallback } from 'react';
import CivGrid from './components/CivGrid';
import StrategyViewer from './components/StrategyViewer';
import { Civilization, StrategyDetail } from './types';
import { fetchCivStrategies } from './services/geminiService';

const App: React.FC = () => {
  const [selectedCiv, setSelectedCiv] = useState<Civilization | null>(null);
  const [strategies, setStrategies] = useState<StrategyDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelectCiv = useCallback(async (civ: Civilization) => {
    if (selectedCiv?.id === civ.id) return;
    
    setSelectedCiv(civ);
    setLoading(true);
    setError(null);
    setStrategies([]);

    try {
      const data = await fetchCivStrategies(civ.name);
      setStrategies(data);
    } catch (err) {
      console.error(err);
      setError("Failed to summon the grandmaster's advice. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [selectedCiv]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 border-b border-amber-500/30 py-8 px-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-cinzel font-bold text-white tracking-tighter">
              EMPIRE <span className="text-amber-500">TACTICIAN</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">AoE2 Definitive Edition Strategy Companion</p>
          </div>
          
          <div className="flex items-center gap-4">
             {selectedCiv && (
               <div className="flex items-center bg-slate-800 px-4 py-2 rounded-full border border-amber-500/50">
                 <span className="mr-2 text-xl">{selectedCiv.icon}</span>
                 <span className="font-cinzel font-bold text-amber-500">{selectedCiv.name} Selected</span>
                 <button 
                   onClick={() => { setSelectedCiv(null); setStrategies([]); }}
                   className="ml-4 text-slate-400 hover:text-white transition-colors"
                 >
                   ✕
                 </button>
               </div>
             )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 pt-12">
        {!selectedCiv ? (
          <section className="animate-in fade-in duration-700">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-2">Choose Your Kingdom</h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Select a civilization to analyze their unique bonuses and the most effective build orders used by pro players.
              </p>
            </div>
            <CivGrid onSelect={handleSelectCiv} selectedId={selectedCiv?.id || null} />
          </section>
        ) : (
          <section className="animate-in slide-in-from-bottom-4 duration-500">
             {error && (
               <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg mb-8 flex items-center">
                 <span className="mr-3">⚠️</span> {error}
               </div>
             )}
             
             {/* Civ Bio */}
             {!loading && strategies.length > 0 && (
                <div className="mb-12 flex flex-col md:flex-row gap-8 items-start bg-amber-500/5 p-8 rounded-2xl border border-amber-500/10">
                   <div className="bg-slate-800 w-24 h-24 rounded-2xl flex items-center justify-center text-5xl shadow-xl border border-amber-500/20 shrink-0">
                     {selectedCiv.icon}
                   </div>
                   <div>
                     <div className="flex items-center gap-3 mb-2">
                       <h2 className="text-3xl font-cinzel font-bold text-white">{selectedCiv.name}</h2>
                       <span className="bg-amber-500 text-slate-900 px-2 py-0.5 rounded text-[10px] font-black uppercase">{selectedCiv.type}</span>
                     </div>
                     <p className="text-slate-300 leading-relaxed max-w-3xl italic">
                       "{selectedCiv.description}"
                     </p>
                     <div className="mt-4 flex gap-6 text-sm">
                       <div>
                         <span className="text-slate-500 uppercase text-[10px] font-bold block mb-1">Primary Focus</span>
                         <span className="text-amber-400 font-semibold">{selectedCiv.focus}</span>
                       </div>
                       <div>
                         <span className="text-slate-500 uppercase text-[10px] font-bold block mb-1">Civilization Type</span>
                         <span className="text-amber-400 font-semibold">{selectedCiv.type}</span>
                       </div>
                     </div>
                   </div>
                   <button 
                     onClick={() => { setSelectedCiv(null); setStrategies([]); }}
                     className="md:ml-auto bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-2 rounded-xl border border-slate-700 transition-all font-semibold"
                   >
                     Switch Civilization
                   </button>
                </div>
             )}

             <StrategyViewer 
               strategies={strategies} 
               civName={selectedCiv.name} 
               loading={loading} 
             />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-slate-500 text-sm">
            Powered by Gemini AI Analysis. Strategies reflect current meta for AoE2:DE.
          </p>
          <div className="flex justify-center gap-6">
             <a href="#" className="text-slate-600 hover:text-amber-500 transition-colors text-xs uppercase tracking-widest font-bold">Privacy</a>
             <a href="#" className="text-slate-600 hover:text-amber-500 transition-colors text-xs uppercase tracking-widest font-bold">Terms</a>
             <a href="#" className="text-slate-600 hover:text-amber-500 transition-colors text-xs uppercase tracking-widest font-bold">Support</a>
          </div>
          <p className="text-[10px] text-slate-700">
            Age of Empires II is a trademark of Microsoft Corporation. This application is a fan-made tool and is not affiliated with or endorsed by Microsoft.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
