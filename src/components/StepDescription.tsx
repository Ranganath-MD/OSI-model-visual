import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUp, Radio, Info } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { getLayer } from '@/data/networkData';
import type { LayerNumber } from '@/types';

function describeStep(
  step: number,
  phases: ReturnType<typeof useStore.getState>['phases'],
  scenario: ReturnType<typeof useStore.getState>['scenario'],
): { title: string; body: string; icon: typeof ArrowDown; color: string } {
  const phase = phases[step];
  if (!phase) return { title: 'Ready to begin', body: 'Press Play to start the animation.', icon: Info, color: '#64748b' };

  if (phase.kind === 'medium') {
    const mediumLabel =
      scenario.transportType === 'wifi' ? 'Wi-Fi radio waves' :
      scenario.transportType === 'fiber' ? 'optical fiber' : 'the Ethernet cable';
    return {
      title: `Bits travel across ${mediumLabel}`,
      body: `The fully encapsulated frame is now transmitted as a stream of raw bits across ${mediumLabel}. During transmission, these bits are converted into physical signals — electrical pulses, light, or radio waves — and travel from the sender's NIC to the receiver's NIC.`,
      icon: Radio,
      color: '#8b5cf6',
    };
  }

  const layerNum = phase.layer as LayerNumber;
  const layer = getLayer(layerNum);
  const proto = scenario.layerProtocols[layerNum];

  if (phase.kind === 'sender') {
    return {
      title: `Sender: L${layer.number} ${layer.name} adds ${layer.headerName}`,
      body:
        `The sender's ${layer.name} layer (${proto ? proto.name : layer.protocols[0]}) processes the data and ` +
        `prepends a ${layer.headerName}. This header carries addressing, control, and protocol-specific ` +
        `information needed by the receiver's matching layer. The result is a ${layer.dataUnitName} ` +
        `passed down to layer ${layer.number - 1 || 'the physical medium'}.`,
      icon: ArrowDown,
      color: layer.color,
    };
  }

  // receiver
  return {
    title: `Receiver: L${layer.number} ${layer.name} removes ${layer.headerName}`,
    body:
      `The receiver's ${layer.name} layer (${proto ? proto.name : layer.protocols[0]}) reads the ` +
      `${layer.headerName} to verify addressing and integrity, then strips it away. The remaining ` +
      `payload is passed up to layer ${layer.number + 1 > 7 ? 'the application' : layer.number + 1} ` +
      `as a ${layer.dataUnitName}.`,
    icon: ArrowUp,
    color: layer.color,
  };
}

export function StepDescription() {
  const step = useStore((s) => s.step);
  const phases = useStore((s) => s.phases);
  const scenario = useStore((s) => s.scenario);

  const { title, body, icon: Icon, color } = describeStep(step, phases, scenario);

  return (
    <motion.div
      className="w-full rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
      aria-live="polite"
      aria-label="Current step description"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.22 }}
        >
          <div className="mb-2 flex items-center gap-2">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: color }}
            >
              <Icon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          </div>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{body}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
