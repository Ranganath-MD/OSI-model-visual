import { motion } from 'framer-motion';
import type { LayerInfo, Side } from '@/types';
import { useStore, activeLayerAt } from '@/store/useStore';

interface Props {
  layer: LayerInfo;
  side: Side;
  compact?: boolean;
}

export function LayerCard({ layer, side, compact }: Props) {
  const step = useStore((s) => s.step);
  const phases = useStore((s) => s.phases);
  const setStep = useStore((s) => s.setStep);
  const openLayer = useStore((s) => s.openLayer);
  const scenario = useStore((s) => s.scenario);

  const activeLayer = activeLayerAt(step, phases);
  const isActive = activeLayer === layer.number;
  const isProcessed = (() => {
    const currentIdx = phases.findIndex(
      (p) => p.kind !== 'medium' && p.kind === side && p.layer === layer.number,
    );
    if (currentIdx === -1) return false;
    return step > currentIdx;
  })();

  const scenarioProto = scenario.layerProtocols[layer.number];

  const handleJump = () => {
    const idx = phases.findIndex(
      (p) => p.kind === side && p.layer === layer.number,
    );
    if (idx !== -1) setStep(idx);
  };

  return (
    <motion.div
      layout
      onClick={() => openLayer(layer.number)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLayer(layer.number);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Layer ${layer.number} ${layer.name} on ${side} side. Press Enter for details.`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer rounded-xl border p-3 transition-colors"
      style={{
        borderColor: isActive ? layer.color : 'rgba(148,163,184,0.25)',
        backgroundColor: isActive
          ? `${layer.color}22`
          : isProcessed
            ? `${layer.color}10`
            : 'rgba(15,23,42,0.45)',
        boxShadow: isActive ? `0 0 0 2px ${layer.color}55` : 'none',
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
          style={{ backgroundColor: layer.color }}
          aria-hidden
        >
          L{layer.number}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-semibold text-slate-100">
              {layer.name}
            </h3>
            {!compact && scenarioProto && (
              <span
                className="rounded px-1.5 py-0.5 text-[10px] font-medium"
                style={{ backgroundColor: `${layer.color}33`, color: layer.color }}
                title={scenarioProto.note ?? scenarioProto.name}
              >
                {scenarioProto.name}
              </span>
            )}
          </div>
          {!compact && (
            <p className="mt-0.5 line-clamp-2 text-xs text-slate-400">
              {layer.description}
            </p>
          )}
          {!compact && (
            <div className="mt-1.5 flex flex-wrap gap-1">
              {layer.protocols.slice(0, 3).map((p) => (
                <span
                  key={p}
                  className="rounded bg-slate-800/70 px-1.5 py-0.5 text-[10px] text-slate-300"
                >
                  {p}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      {isActive && (
        <motion.div
          layoutId={`active-bar-${side}`}
          className="absolute -left-1 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: layer.color }}
          aria-hidden
        />
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleJump();
        }}
        className="absolute right-2 top-2 rounded text-[10px] text-slate-500 hover:text-slate-200"
        aria-label={`Jump animation to ${side} layer ${layer.number}`}
        title="Jump to this step"
      >
        →
      </button>
    </motion.div>
  );
}
