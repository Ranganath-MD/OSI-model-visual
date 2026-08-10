import { motion, AnimatePresence } from 'framer-motion';
import { useStore, activeLayerAt } from '@/store/useStore';
import { OsiStack } from './OsiStack';
import { DataUnit } from './DataUnit';
import { AnimationControls } from './AnimationControls';
import { ScenarioSelector } from './ScenarioSelector';
import { StepDescription } from './StepDescription';
import { getLayer } from '@/data/networkData';
import { t, tLayerName, tHeaderName, type Lang } from '@/i18n/translations';
import { Cable, Wifi, Waves } from 'lucide-react';
import type { LayerNumber } from '@/types';

export function VisualizationView() {
  const step = useStore((s) => s.step);
  const phases = useStore((s) => s.phases);
  const scenario = useStore((s) => s.scenario);
  const lang = useStore((s) => s.lang);
  const currentPhase = phases[step];

  const activeLayer: LayerNumber | null = activeLayerAt(step, phases);
  const activeLayerInfo = activeLayer ? getLayer(activeLayer) : null;
  const action =
    currentPhase?.kind === 'sender'
      ? t('actionEncapsulating', lang)
      : currentPhase?.kind === 'receiver'
        ? t('actionDecapsulating', lang)
        : t('actionTransmitting', lang);

  const mediumLabel =
    scenario.transportType === 'wifi'
      ? t('mediumWifi', lang)
      : scenario.transportType === 'fiber'
        ? t('mediumFiber', lang)
        : t('mediumCable', lang);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-5">
        <ScenarioSelector />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr_1fr]">
        {/* Sender */}
        <div className="flex flex-col gap-3">
          <OsiStack side="sender" title={t('sender', lang)} subtitle={t('encapsulationDown', lang)} />
        </div>

        {/* Center: data units + medium */}
        <div className="flex flex-col items-center gap-4">
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white/60 p-3 dark:border-slate-800 dark:bg-slate-900/40">
              <DataUnit side="sender" />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/60 p-3 dark:border-slate-800 dark:bg-slate-900/40">
              <DataUnit side="receiver" />
            </div>
          </div>

          <Medium
            transportType={scenario.transportType}
            active={currentPhase?.kind === 'medium'}
            label={mediumLabel}
          />

          {/* Current action banner */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${step}-${action}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="w-full rounded-xl border p-3 text-center"
              style={{
                borderColor: activeLayerInfo ? `${activeLayerInfo.color}55` : '#8b5cf655',
                backgroundColor: activeLayerInfo ? `${activeLayerInfo.color}12` : '#8b5cf612',
              }}
              aria-live="polite"
            >
              <div className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {action}
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {currentPhase?.kind === 'medium'
                  ? `${t('bitsTraveling', lang)} ${mediumLabel}`
                  : activeLayerInfo
                    ? `L${activeLayerInfo.number} ${tLayerName(activeLayerInfo.number, lang)}: ${tHeaderName(activeLayerInfo.number, lang, scenario.layerProtocols[4]?.name)}`
                    : t('ready', lang)}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Step description */}
          <StepDescription />

          <AnimationControls />
        </div>

        {/* Receiver */}
        <div className="flex flex-col gap-3">
          <OsiStack side="receiver" title={t('receiver', lang)} subtitle={t('decapsulationUp', lang)} />
        </div>
      </div>
    </div>
  );
}

function Medium({
  transportType,
  active,
  label,
}: {
  transportType: 'cable' | 'fiber' | 'wifi';
  active: boolean;
  label: string;
}) {
  const Icon = transportType === 'wifi' ? Wifi : transportType === 'fiber' ? Waves : Cable;

  return (
    <motion.div
      className="flex w-full max-w-md items-center justify-center gap-3 rounded-xl border border-violet-300/60 bg-violet-100/50 px-4 py-3 dark:border-violet-800/40 dark:bg-violet-950/20"
      animate={{ boxShadow: active ? '0 0 22px #8b5cf688' : '0 0 0px #00000000' }}
    >
      <Icon className="h-5 w-5 text-violet-600 dark:text-violet-300" />
      <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-violet-300/50 dark:bg-violet-900/50">
        <motion.div
          className="absolute top-0 h-full w-8 rounded-full bg-violet-400"
          animate={active ? { left: ['0%', '100%'] } : { left: '0%' }}
          transition={active ? { duration: 1.4, repeat: Infinity, ease: 'linear' } : {}}
        />
      </div>
      <span className="text-[11px] text-violet-700 dark:text-violet-200">{label}</span>
    </motion.div>
  );
}
