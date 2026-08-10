import { create } from 'zustand';
import type { LayerNumber, ModelType, Phase, Scenario } from '@/types';
import { SCENARIOS } from '@/data/networkData';

export type View = 'visualization' | 'explainer' | 'comparison';

export interface AppState {
  // view & theme
  view: View;
  model: ModelType;
  theme: 'dark' | 'light';
  onboarding: boolean;
  setView: (v: View) => void;
  setModel: (m: ModelType) => void;
  toggleTheme: () => void;
  setOnboarding: (v: boolean) => void;

  // layer detail panel
  selectedLayer: LayerNumber | null;
  openLayer: (n: LayerNumber) => void;
  closeLayer: () => void;

  // scenario
  scenarioId: string;
  scenario: Scenario;
  setScenario: (id: string) => void;

  // animation
  isPlaying: boolean;
  step: number; // 0..maxStep
  phases: Phase[];
  maxStep: number;
  speedMs: number;

  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
  setStep: (s: number) => void;
  setSpeed: (ms: number) => void;
}

// Build the ordered phase list.
// Sender: L7 -> L1 (encapsulation). Medium. Receiver: L1 -> L7 (decapsulation).
function buildPhases(): Phase[] {
  const phases: Phase[] = [];
  const order: LayerNumber[] = [7, 6, 5, 4, 3, 2, 1];
  for (const l of order) phases.push({ kind: 'sender', layer: l });
  phases.push({ kind: 'medium' });
  for (const l of [...order].reverse()) phases.push({ kind: 'receiver', layer: l });
  return phases;
}

const PHASES = buildPhases();

export const useStore = create<AppState>((set, get) => ({
  view: 'visualization',
  model: 'osi',
  theme: 'dark',
  onboarding: true,
  setView: (v) => set({ view: v }),
  setModel: (m) => set({ model: m }),
  toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
  setOnboarding: (v) => set({ onboarding: v }),

  selectedLayer: null,
  openLayer: (n) => set({ selectedLayer: n }),
  closeLayer: () => set({ selectedLayer: null }),

  scenarioId: SCENARIOS[0].id,
  scenario: SCENARIOS[0],
  setScenario: (id) => {
    const sc = SCENARIOS.find((s) => s.id === id) ?? SCENARIOS[0];
    set({ scenarioId: id, scenario: sc, step: 0, isPlaying: false });
  },

  isPlaying: false,
  step: 0,
  phases: PHASES,
  maxStep: PHASES.length - 1,
  speedMs: 1400,

  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  togglePlay: () => set((s) => ({ isPlaying: !s.isPlaying })),
  next: () => set((s) => ({ step: Math.min(s.step + 1, s.maxStep) })),
  prev: () => set((s) => ({ step: Math.max(s.step - 1, 0) })),
  reset: () => set({ step: 0, isPlaying: false }),
  setStep: (st) => set({ step: Math.max(0, Math.min(st, get().maxStep)) }),
  setSpeed: (ms) => set({ speedMs: ms }),
}));

// Convenience: current OSI layer number for sender/receiver highlight
export function activeLayerAt(step: number, phases: Phase[]): LayerNumber | null {
  const p = phases[step];
  if (!p || p.kind === 'medium') return null;
  return p.layer;
}

export const OSI_ORDER_DOWN: LayerNumber[] = [7, 6, 5, 4, 3, 2, 1];
