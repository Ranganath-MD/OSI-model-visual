import { AnimatePresence, motion } from 'framer-motion';
import type { Side } from '@/types';
import { OSI_LAYERS } from '@/data/networkData';
import { LayerCard } from './LayerCard';

interface Props {
  side: Side;
  title: string;
  subtitle?: string;
}

export function OsiStack({ side, title, subtitle }: Props) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="mb-1 flex items-center gap-2">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
            side === 'sender'
              ? 'bg-emerald-500/20 text-emerald-300'
              : 'bg-sky-500/20 text-sky-300'
          }`}
          aria-hidden
        >
          {side === 'sender' ? 'S' : 'R'}
        </span>
        <div>
          <h2 className="text-sm font-semibold text-slate-100">{title}</h2>
          {subtitle && <p className="text-[11px] text-slate-400">{subtitle}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-2" role="list" aria-label={`${title} layers`}>
        <AnimatePresence>
          {OSI_LAYERS.map((layer) => (
            <motion.div
              key={layer.number}
              role="listitem"
              initial={{ opacity: 0, x: side === 'sender' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: (7 - layer.number) * 0.04 }}
            >
              <LayerCard layer={layer} side={side} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
