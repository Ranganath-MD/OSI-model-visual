import { motion } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { SCENARIOS } from '@/data/networkData';
import { Network } from 'lucide-react';

export function ScenarioSelector() {
  const scenarioId = useStore((s) => s.scenarioId);
  const setScenario = useStore((s) => s.setScenario);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <Network className="h-4 w-4" />
        Scenario
      </div>
      <div className="flex flex-wrap gap-2">
        {SCENARIOS.map((sc) => {
          const active = sc.id === scenarioId;
          return (
            <motion.button
              key={sc.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setScenario(sc.id)}
              aria-pressed={active}
              className={`rounded-xl border px-3 py-2 text-left text-xs transition-colors ${
                active
                  ? 'border-emerald-500 bg-emerald-500/15 text-emerald-200'
                  : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600'
              }`}
            >
              <div className="font-semibold">{sc.label}</div>
              <div className="mt-0.5 text-[10px] opacity-70">{sc.description}</div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
