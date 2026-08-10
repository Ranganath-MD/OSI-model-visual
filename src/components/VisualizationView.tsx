import { motion, AnimatePresence } from 'framer-motion';
import { useStore, activeLayerAt } from '@/store/useStore';
import { OsiStack } from './OsiStack';
import { DataUnit } from './DataUnit';
import { AnimationControls } from './AnimationControls';
import { ScenarioSelector } from './ScenarioSelector';
import { getLayer } from '@/data/networkData';
import { Cable, Wifi, Waves } from 'lucide-react';
import type { LayerNumber } from '@/types';

export function VisualizationView() {
  const step = useStore((s) => s.step);
  const phases = useStore((s) => s.phases);
  const scenario = useStore((s) => s.scenario);
  const currentPhase = phases[step];

  const activeLayer: LayerNumber | null = activeLayerAt(step, phases);
  const activeLayerInfo = activeLayer ? getLayer(activeLayer) : null;
  const action =
    currentPhase?.kind === 'sender'
      ? 'Encapsulating'
      : currentPhase?.kind === 'receiver'
        ? 'Decapsulating'
        : 'Transmitting bits';

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-5">
        <ScenarioSelector />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr_1fr]">
        {/* Sender */}
        <div className="flex flex-col gap-3">
          <OsiStack side="sender" title="Sender" subtitle="Encapsulation ↓" />
        </div>

        {/* Center: data units + medium */}
        <div className="flex flex-col items-center gap-4">
          <div className="grid w-full grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
              <DataUnit side="sender" />
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
              <DataUnit side="receiver" />
            </div>
          </div>

          <Medium transportType={scenario.transportType} active={currentPhase?.kind === 'medium'} />

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
              <div className="text-[11px] uppercase tracking-wider text-slate-400">
                {action}
              </div>
              <div className="text-sm font-semibold text-slate-100">
                {currentPhase?.kind === 'medium'
                  ? `Bits traveling via ${scenario.transportType}`
                  : activeLayerInfo
                    ? `L${activeLayerInfo.number} ${activeLayerInfo.name}: ${activeLayerInfo.headerName}`
                    : 'Ready'}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimationControls />
        </div>

        {/* Receiver */}
        <div className="flex flex-col gap-3">
          <OsiStack side="receiver" title="Receiver" subtitle="Decapsulation ↑" />
        </div>
      </div>
    </div>
  );
}

function Medium({
  transportType,
  active,
}: {
  transportType: 'cable' | 'fiber' | 'wifi';
  active: boolean;
}) {
  const Icon = transportType === 'wifi' ? Wifi : transportType === 'fiber' ? Waves : Cable;
  const label =
    transportType === 'wifi' ? 'Wi-Fi Radio' : transportType === 'fiber' ? 'Optical Fiber' : 'Ethernet Cable';

  return (
    <motion.div
      className="flex w-full max-w-md items-center justify-center gap-3 rounded-xl border border-violet-800/40 bg-violet-950/20 px-4 py-3"
      animate={{ boxShadow: active ? '0 0 22px #8b5cf688' : '0 0 0px #00000000' }}
    >
      <Icon className="h-5 w-5 text-violet-300" />
      <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-violet-900/50">
        <motion.div
          className="absolute top-0 h-full w-8 rounded-full bg-violet-400"
          animate={active ? { left: ['0%', '100%'] } : { left: '0%' }}
          transition={active ? { duration: 1.4, repeat: Infinity, ease: 'linear' } : {}}
        />
      </div>
      <span className="text-[11px] text-violet-200">{label}</span>
    </motion.div>
  );
}
