
import { Civilization } from './types';

export const CIVILIZATIONS: Civilization[] = [
  { id: 'britons', name: 'Britons', type: 'Foot Archer', focus: 'Archers', description: 'Strong foot archers with incredible range.', icon: '🏹' },
  { id: 'franks', name: 'Franks', type: 'Cavalry', focus: 'Knights', description: 'Premium cavalry and faster-working foragers.', icon: '🏇' },
  { id: 'mongols', name: 'Mongols', type: 'Cavalry Archer', focus: 'Mobile Warfare', description: 'Fast-firing Mangudai and strong scout rushes.', icon: '🐎' },
  { id: 'mayans', name: 'Mayans', type: 'Archer', focus: 'Infantry/Archers', description: 'Cheap archers and longer-lasting resources.', icon: '🎭' },
  { id: 'huns', name: 'Huns', type: 'Cavalry', focus: 'Aggression', description: 'No houses needed, fast-built stables.', icon: '🔥' },
  { id: 'byzantines', name: 'Byzantines', type: 'Defensive', focus: 'Counter Units', description: 'Cheap counter units and strong buildings.', icon: '🛡️' },
  { id: 'teutons', name: 'Teutons', type: 'Infantry', focus: 'Armor/Defensive', description: 'Extra melee armor for infantry and cavalry.', icon: '⚔️' },
  { id: 'japanese', name: 'Japanese', type: 'Infantry', focus: 'Swordmasters', description: 'Fast-attacking infantry and superior fishing.', icon: '⛩️' },
  { id: 'goths', name: 'Goths', type: 'Infantry', focus: 'Swarm', description: 'Cheap, fast-built infantry in overwhelming numbers.', icon: '🐺' },
  { id: 'vikings', name: 'Vikings', type: 'Infantry/Naval', focus: 'Economy', description: 'Free wheelbarrow/handcart and strong Berserks.', icon: '⛵' },
  { id: 'aztecs', name: 'Aztecs', type: 'Infantry', focus: 'Monks', description: 'Strong military production and powerful monks.', icon: '☀️' },
  { id: 'turks', name: 'Turks', type: 'Gunpowder', focus: 'Janissaries', description: 'Free light cavalry upgrades and extra HP gunpowder.', icon: '💣' },
  { id: 'persians', name: 'Persians', type: 'Cavalry', focus: 'Eco Boom', description: 'Faster TCs and docks, devastating War Elephants.', icon: '🐘' },
  { id: 'spanish', name: 'Spanish', type: 'Cavalry/Gunpowder', focus: 'Conquistadors', description: 'No gold cost for techs, faster building.', icon: '🏰' },
  { id: 'saracens', name: 'Saracens', type: 'Camel/Naval', focus: 'Market Abuse', description: 'Incredible market exchange rates and camel HP.', icon: '🏜️' },
  { id: 'ethiopians', name: 'Ethiopians', type: 'Archer', focus: 'Siege/Archers', description: 'Faster-firing archers and free gold/food on age up.', icon: '🦁' }
];
