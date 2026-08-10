import { motion, AnimatePresence } from 'framer-motion';
import { OSI_LAYERS, TCPIP_LAYERS } from '@/data/networkData';
import { useStore } from '@/store/useStore';
import { t, tArr } from '@/i18n/translations';
import type { LayerNumber } from '@/types';

export function ComparisonView() {
  const model = useStore((s) => s.model);
  const setModel = useStore((s) => s.setModel);
  const lang = useStore((s) => s.lang);
  const mapping = tArr('mappingSummary', lang);
  const flowSteps = tArr('tcpFlowSteps', lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {t('comparisonTitle', lang)}
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {t('comparisonSubtitle', lang)}
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-left dark:border-amber-800/50 dark:bg-amber-950/30">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-200">
          {t('teachingNoteTitle', lang)}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-amber-900/80 dark:text-amber-100/80">
          {t('teachingNoteBody', lang)}
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100/60 p-1 dark:border-slate-800 dark:bg-slate-900/60">
          {(['osi', 'tcpip'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setModel(m)}
              aria-pressed={model === m}
              className={`relative rounded-lg px-4 py-1.5 text-xs font-medium transition-colors ${
                model === m
                  ? 'text-white'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {model === m && (
                <motion.div
                  layoutId="model-pill"
                  className="absolute inset-0 rounded-lg bg-emerald-600"
                  transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                />
              )}
              <span className="relative">
                {m === 'osi' ? t('comparisonOsi', lang) : t('comparisonTcpip', lang)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-900/50">
          <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
            {t('comparisonOsiModel', lang)}
          </h3>
          <div className="flex flex-col gap-2">
            {OSI_LAYERS.map((l) => (
              <ComparisonRow
                key={l.number}
                color={l.color}
                left={`L${l.number} ${l.name}`}
                right={l.dataUnitName}
                highlighted={model === 'tcpip' ? isInTcpHighlight(l.number) : false}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-900/50">
          <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
            {t('comparisonTcpipModel', lang)}
          </h3>
          <div className="flex flex-col gap-2">
            {TCPIP_LAYERS.map((tcp) => (
              <TcpRow
                key={tcp.name}
                name={tcp.name}
                color={tcp.color}
                protocols={tcp.protocols}
                osi={tcp.osiLayers}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white/60 p-5 dark:border-slate-800 dark:bg-slate-900/50">
        <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
          {t('comparisonSummary', lang)}
        </h3>
        <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
          {mapping.map((line) => (
            <li key={line}>• {line}</li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {model === 'tcpip' && <TcpFlowAnimation steps={[...flowSteps]} title={t('comparisonFlow', lang)} />}
      </AnimatePresence>
    </div>
  );
}

function isInTcpHighlight(_n: LayerNumber): boolean {
  return false;
}

function ComparisonRow({
  color,
  left,
  right,
  highlighted,
}: {
  color: string;
  left: string;
  right: string;
  highlighted: boolean;
}) {
  return (
    <motion.div
      layout
      className="flex items-center gap-2 rounded-lg border p-2"
      style={{
        borderColor: `${color}44`,
        backgroundColor: highlighted ? `${color}22` : `${color}0d`,
      }}
    >
      <span className="h-2.5 w-2.5 rounded" style={{ backgroundColor: color }} />
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{left}</span>
      <span className="ml-auto text-[10px] text-slate-400 dark:text-slate-500">{right}</span>
    </motion.div>
  );
}

function TcpRow({
  name,
  color,
  protocols,
  osi,
}: {
  name: string;
  color: string;
  protocols: string[];
  osi: LayerNumber[];
}) {
  return (
    <motion.div
      layout
      className="rounded-lg border p-3"
      style={{ borderColor: `${color}44`, backgroundColor: `${color}12` }}
    >
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded" style={{ backgroundColor: color }} />
        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{name}</span>
        <span className="ml-auto text-[10px] text-slate-400 dark:text-slate-500">
          OSI L{osi[0]}
          {osi.length > 1 ? `–L${osi[osi.length - 1]}` : ''}
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {protocols.map((p) => (
          <span
            key={p}
            className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600 dark:bg-slate-800/70 dark:text-slate-300"
          >
            {p}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function TcpFlowAnimation({ steps, title }: { steps: string[]; title: string }) {
  return (
    <motion.div
      className="mt-6 rounded-2xl border border-emerald-300/50 bg-emerald-50/60 p-5 dark:border-emerald-800/40 dark:bg-emerald-950/20"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      <h3 className="mb-3 text-sm font-semibold text-emerald-700 dark:text-emerald-200">{title}</h3>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <motion.span
              className="rounded-lg border border-emerald-300/60 bg-emerald-100/50 px-3 py-1.5 text-xs text-emerald-800 dark:border-emerald-700/50 dark:bg-emerald-900/30 dark:text-emerald-100"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              {s}
            </motion.span>
            {i < steps.length - 1 && (
              <span className="text-emerald-600 dark:text-emerald-500">→</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
