import { motion } from 'framer-motion';
import { useState } from 'react';
import { OSI_LAYERS } from '@/data/networkData';
import { useStore } from '@/store/useStore';
import type { LayerNumber } from '@/types';

const STAGES: { label: string; layer: LayerNumber | null; side: 'sender' | 'receiver' | 'medium' }[] = [
  { label: 'Application Data', layer: 7, side: 'sender' },
  { label: '+ Presentation Hdr', layer: 6, side: 'sender' },
  { label: '+ Session Hdr', layer: 5, side: 'sender' },
  { label: 'Segment (+ TCP Hdr)', layer: 4, side: 'sender' },
  { label: 'Packet (+ IP Hdr)', layer: 3, side: 'sender' },
  { label: 'Frame (+ Ethernet Hdr/Trl)', layer: 2, side: 'sender' },
  { label: 'Bits (Physical signal)', layer: 1, side: 'medium' },
  { label: 'Frame (received)', layer: 2, side: 'receiver' },
  { label: 'Packet (− Ethernet)', layer: 3, side: 'receiver' },
  { label: 'Segment (− IP)', layer: 4, side: 'receiver' },
  { label: '− Session Hdr', layer: 5, side: 'receiver' },
  { label: '− Presentation Hdr', layer: 6, side: 'receiver' },
  { label: 'Application Data (− App Hdr)', layer: 7, side: 'receiver' },
];

export function EncapsulationExplainer() {
  const [hovered, setHovered] = useState<LayerNumber | null>(null);
  const scenario = useStore((s) => s.scenario);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold text-slate-100">
          Encapsulation &amp; Decapsulation Timeline
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Follow how the Protocol Data Unit (PDU) transforms as it moves down the
          sender and up the receiver. Hover any stage to highlight its layer.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Timeline */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex items-center justify-between mb-4 text-[11px] uppercase tracking-wider text-slate-500">
            <span>Sender ↓</span>
            <span>Medium</span>
            <span>Receiver ↑</span>
          </div>
          <div className="flex flex-col gap-2">
            {STAGES.map((s, idx) => {
              const color = s.layer ? OSI_LAYERS.find((l) => l.number === s.layer)!.color : '#8b5cf6';
              const isHovered = hovered === s.layer;
              return (
                <motion.div
                  key={idx}
                  onHoverStart={() => setHovered(s.layer)}
                  onHoverEnd={() => setHovered(null)}
                  onFocus={() => setHovered(s.layer)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={s.label}
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
                    <div className="text-sm font-medium text-slate-200">{s.label}</div>
                    {s.layer && (
                      <div className="text-[10px] text-slate-500">
                        Layer {s.layer} • {OSI_LAYERS.find((l) => l.number === s.layer)!.name}
                      </div>
                    )}
                  </div>
                  {s.side === 'sender' && (
                    <span className="text-[10px] font-semibold text-emerald-400">encapsulate</span>
                  )}
                  {s.side === 'medium' && (
                    <span className="text-[10px] font-semibold text-violet-400">transmit</span>
                  )}
                  {s.side === 'receiver' && (
                    <span className="text-[10px] font-semibold text-sky-400">decapsulate</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Legend / live stack */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <h3 className="mb-3 text-sm font-semibold text-slate-100">Layer Color Key</h3>
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
                  <span className="text-xs text-slate-300">
                    L{l.number} {l.name}
                  </span>
                  <span className="ml-auto text-[10px] text-slate-500">{l.dataUnitName}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
            <h3 className="mb-2 text-sm font-semibold text-slate-100">
              Current Scenario
            </h3>
            <p className="text-xs text-slate-400">{scenario.description}</p>
            <p className="mt-2 text-xs text-slate-300">
              Data unit: <span className="font-semibold text-slate-100">{scenario.dataLabel}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
