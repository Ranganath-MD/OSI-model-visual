import { motion } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { SCENARIOS } from '@/data/networkData';
import { Network } from 'lucide-react';
import { t } from '@/i18n/translations';

const SCENARIO_LABELS: Record<string, { label: 'scenarioEmail' | 'scenarioWeb' | 'scenarioVideo'; desc: 'scenarioEmailDesc' | 'scenarioWebDesc' | 'scenarioVideoDesc' }> = {
  email: { label: 'scenarioEmail', desc: 'scenarioEmailDesc' },
  web: { label: 'scenarioWeb', desc: 'scenarioWebDesc' },
  video: { label: 'scenarioVideo', desc: 'scenarioVideoDesc' },
};

export function ScenarioSelector() {
  const scenarioId = useStore((s) => s.scenarioId);
  const setScenario = useStore((s) => s.setScenario);
  const lang = useStore((s) => s.lang);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        <Network className="h-4 w-4" />
        {t('scenarioLabel', lang)}
      </div>
      <div className="flex flex-wrap gap-2">
        {SCENARIOS.map((sc) => {
          const active = sc.id === scenarioId;
          const meta = SCENARIO_LABELS[sc.id];
          return (
            <motion.button
              key={sc.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setScenario(sc.id)}
              aria-pressed={active}
              className={`rounded-xl border px-3 py-2 text-left text-xs transition-colors ${
                active
                  ? 'border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-200'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="font-semibold">{t(meta.label, lang)}</div>
              <div className="mt-0.5 text-[10px] opacity-70">{t(meta.desc, lang)}</div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
