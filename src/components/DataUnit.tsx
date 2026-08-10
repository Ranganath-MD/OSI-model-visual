import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { t } from '@/i18n/translations';

interface Props {
  side: 'sender' | 'receiver';
}

export function DataUnit({ side }: Props) {
  const step = useStore((s) => s.step);
  const phases = useStore((s) => s.phases);
  const scenario = useStore((s) => s.scenario);
  const lang = useStore((s) => s.lang);

  const levels: EncapLevel[] =
    side === 'sender'
      ? senderEncapsulation(step, phases, scenario)
      : receiverDecapsulation(step, phases, scenario);

  const currentPhase = phases[step];
  const isThisSideActive = currentPhase && currentPhase.kind === side;
  const isMediumActive = currentPhase?.kind === 'medium';

  const unitName = currentDataUnitName(step, phases, scenario);
  const showStack = levels.length > 0;
  const dataLabel = scenario.dataLabel;

  return (
    <div
      className="flex w-full flex-col items-center"
      role="img"
      aria-label={`Data unit on ${side} side`}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {t('currentPDU', lang)}
        </span>
        <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-100">
          {unitName}
        </span>
      </div>

      <div className="relative flex min-h-[180px] w-full max-w-[260px] flex-col items-stretch justify-center">
        <AnimatePresence mode="popLayout">
          {showStack ? (
            levels.map((lvl, idx) => {
              const isOuter = idx === 0;
              return (
                <motion.div
                  key={`${side}-${lvl.layer}`}
                  layout
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className="mb-1 rounded-md border px-2 py-1 text-center text-[10px] font-medium"
                  style={{
                    borderColor: `${lvl.color}66`,
                    backgroundColor: `${lvl.color}1f`,
                    color: lvl.color,
                  }}
                  title={lvl.headerLabel}
                >
                  {lvl.headerLabel}
                  {isOuter && isThisSideActive && (
                    <motion.span
                      layoutId={`adding-${side}`}
                      className="ml-1 inline-block text-emerald-500 dark:text-emerald-300"
                      aria-hidden
                    >
                      +
                    </motion.span>
                  )}
                </motion.div>
              );
            })
          ) : null}
        </AnimatePresence>

        <motion.div
          layout
          className="rounded-lg border-2 bg-white px-3 py-3 text-center dark:bg-slate-900"
          animate={{
            scale: isThisSideActive ? 1.04 : 1,
            borderColor: isThisSideActive ? '#10b981' : undefined,
          }}
          style={{ borderColor: isThisSideActive ? undefined : 'rgba(100,116,139,0.5)' }}
        >
          <div className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {t('payload', lang)}
          </div>
          <div className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-slate-100">
            {dataLabel}
          </div>
        </motion.div>

        {isMediumActive && side === 'sender' && <MediumTrail />}
      </div>
    </div>
  );
}

function MediumTrail() {
  const lang = useStore((s) => s.lang);
  return (
    <motion.div
      className="mt-3 flex items-center justify-center gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-hidden
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.08 }}
        />
      ))}
      <span className="ml-2 text-[10px] text-violet-600 dark:text-violet-300">
        {t('bitsTravelingLabel', 'en')}
      </span>
    </motion.div>
  );
}

import type { EncapLevel } from '@/hooks/useEncapsulation';
import { senderEncapsulation, receiverDecapsulation, currentDataUnitName } from '@/hooks/useEncapsulation';
