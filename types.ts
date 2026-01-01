
export interface Civilization {
  id: string;
  name: string;
  type: string;
  focus: string;
  description: string;
  icon: string;
}

export interface BuildStep {
  time: string;
  action: string;
}

export interface StrategyDetail {
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  buildOrder: BuildStep[];
  unitComposition: string[];
  keyBonuses: string[];
  earlyGame: string;
  midGame: string;
  lateGame: string;
  counters: string[];
}

export interface CivStrategy {
  civId: string;
  strategies: StrategyDetail[];
}
