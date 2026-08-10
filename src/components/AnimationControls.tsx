import { motion } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { SkipBack, SkipForward, Play, Pause, RotateCcw } from 'lucide-react';

export function AnimationControls() {
  const isPlaying = useStore((s) => s.isPlaying);
  const togglePlay = useStore((s) => s.togglePlay);
  const next = useStore((s) => s.next);
  const prev = useStore((s) => s.prev);
  const reset = useStore((s) => s.reset);
  const step = useStore((s) => s.step);
  const maxStep = useStore((s) => s.maxStep);
  const speedMs = useStore((s) => s.speedMs);
  const setSpeed = useStore((s) => s.setSpeed);
  const phases = useStore((s) => s.phases);

  const progress = (step / maxStep) * 100;
  const currentLabel = (() => {
    const p = phases[step];
    if (!p) return '—';
    if (p.kind === 'medium') return 'Medium (Bits)';
    return `${p.kind === 'sender' ? 'Sender' : 'Receiver'} • L${p.layer}`;
  })();

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={step === 0}
            aria-label="Step backward"
            className="rounded-lg bg-slate-800 p-2 text-slate-200 transition hover:bg-slate-700 disabled:opacity-40"
          >
            <SkipBack className="h-4 w-4" />
          </button>
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="rounded-lg bg-emerald-600 p-2.5 text-white transition hover:bg-emerald-500"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            onClick={next}
            disabled={step >= maxStep}
            aria-label="Step forward"
            className="rounded-lg bg-slate-800 p-2 text-slate-200 transition hover:bg-slate-700 disabled:opacity-40"
          >
            <SkipForward className="h-4 w-4" />
          </button>
          <button
            onClick={reset}
            aria-label="Reset animation"
            className="rounded-lg bg-slate-800 p-2 text-slate-200 transition hover:bg-slate-700"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <label htmlFor="speed" className="hidden sm:inline">Speed</label>
          <select
            id="speed"
            value={speedMs}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-200"
            aria-label="Animation speed"
          >
            <option value={2400}>Slow</option>
            <option value={1400}>Normal</option>
            <option value={700}>Fast</option>
          </select>
        </div>
      </div>

      <div>
        <div className="mb-1 flex items-center justify-between text-[11px] text-slate-400">
          <span>{currentLabel}</span>
          <span>{step}/{maxStep}</span>
        </div>
        <div className="relative h-2 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
        </div>
      </div>
    </div>
  );
}
