import { motion } from 'framer-motion';
import { useState } from 'react';
import { OSI_LAYERS } from '@/data/networkData';
import { useStore } from '@/store/useStore';
import { t, tArr } from '@/i18n/translations';
import type { LayerNumber } from '@/types';

const STAGES: { labelKey: number; layer: LayerNumber | null; side: 'sender' | 'receiver' | 'medium' }[] = [
  { labelKey: 0, layer: 7, side: 'sender' },
  { labelKey: 1, layer: 6, side: 'sender' },
  { labelKey: 2, layer: 5, side: 'sender' },
  { labelKey: 3, layer: 4, side: 'sender' },
  { labelKey: 4, layer: 3, side: 'sender' },
  { labelKey: 5, layer: 2, side: 'sender' },
  { labelKey: 6, layer: 1, side: 'sender' },
  { labelKey: 7, layer: null, side: 'medium' },
  { labelKey: 8, layer: 1, side: 'receiver' },
  { labelKey: 9, layer: 2, side: 'receiver' },
  { labelKey: 10, layer: 3, side: 'receiver' },
  { labelKey: 11, layer: 4, side: 'receiver' },
  { labelKey: 12, layer: 5, side: 'receiver' },
  { labelKey: 13, layer: 6, side: 'receiver' },
  { labelKey: 14, layer: 7, side: 'receiver' },
];

export function EncapsulationExplainer() {
  const [hovered, setHovered] = useState<LayerNumber | null>(null);
  const scenario = useStore((s) => s.scenario);
  const lang = useStore((s) => s.lang);
  const stageLabels = tArr('stages', lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {t('explainerTitle', lang)}
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {t('explainerSubtitle', lang)}
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

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Timeline */}
        <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex items-center justify-between mb-4 text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <span>{t('explainerSender', lang)}</span>
            <span>{t('explainerMedium', lang)}</span>
            <span>{t('explainerReceiver', lang)}</span>
          </div>
          <div className="flex flex-col gap-2">
            {STAGES.map((s, idx) => {
              const color = s.layer
                ? OSI_LAYERS.find((l) => l.number === s.layer)!.color
                : '#8b5cf6';
              const isHovered = s.layer !== null && hovered === s.layer;
              const label = stageLabels[s.labelKey] ?? '';
              return (
                <motion.div
                  key={idx}
                  onHoverStart={() => setHovered(s.layer)}
                  onHoverEnd={() => setHovered(null)}
                  onFocus={() => setHovered(s.layer)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={label}
                  className="flex items-center gap-3 rounded-lg p-2 outline-none transition-colors"
                  style={{
                    backgroundColor: isHovered ? `${color}22` : 'transparent',
                  }}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {s.side === 'medium' ? '∞' : s.side === 'sender' ? '↓' : '↑'}
                  </span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800 dark:text-slate-200">{label}</div>
                    {s.layer && (
                      <div className="text-[10px] text-slate-400 dark:text-slate-500">
                        Layer {s.layer} • {OSI_LAYERS.find((l) => l.number === s.layer)!.name}
                      </div>
                    )}
                  </div>
                  {s.side === 'sender' && (
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      {t('encapsulate', lang)}
                    </span>
                  )}
                  {s.side === 'medium' && (
                    <span className="text-[10px] font-semibold text-violet-600 dark:text-violet-400">
                      {t('transmit', lang)}
                    </span>
                  )}
                  {s.side === 'receiver' && (
                    <span className="text-[10px] font-semibold text-sky-600 dark:text-sky-400">
                      {t('decapsulate', lang)}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Legend / live stack */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 dark:border-slate-800 dark:bg-slate-900/50">
            <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t('explainerColorKey', lang)}
            </h3>
            <div className="flex flex-col gap-2">
              {OSI_LAYERS.map((l) => (
                <div
                  key={l.number}
                  onMouseEnter={() => setHovered(l.number)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center gap-2 rounded-lg p-1.5 transition-colors"
                  style={{ backgroundColor: hovered === l.number ? `${l.color}22` : 'transparent' }}
                >
                  <span className="h-3 w-3 rounded" style={{ backgroundColor: l.color }} />
                  <span className="text-xs text-slate-600 dark:text-slate-300">
                    L{l.number} {l.name}
                  </span>
                  <span className="ml-auto text-[10px] text-slate-400 dark:text-slate-500">{l.dataUnitName}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 dark:border-slate-800 dark:bg-slate-900/50">
            <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {t('explainerCurrentScenario', lang)}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{scenario.description}</p>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
              {t('explainerDataUnit', lang)}{' '}
              <span className="font-semibold text-slate-900 dark:text-slate-100">{scenario.dataLabel}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
