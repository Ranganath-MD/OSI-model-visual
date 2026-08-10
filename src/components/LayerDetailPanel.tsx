import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { getLayer } from '@/data/networkData';

export function LayerDetailPanel() {
  const selectedLayer = useStore((s) => s.selectedLayer);
  const closeLayer = useStore((s) => s.closeLayer);

  return (
    <AnimatePresence>
      {selectedLayer && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Layer details"
          onClick={closeLayer}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const layer = getLayer(selectedLayer);
              return (
                <>
                  <div
                    className="flex items-center justify-between px-5 py-4"
                    style={{ backgroundColor: `${layer.color}22` }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-lg font-bold text-white"
                        style={{ backgroundColor: layer.color }}
                      >
                        L{layer.number}
                      </span>
                      <div>
                        <h2 className="text-lg font-semibold text-slate-100">
                          {layer.name} Layer
                        </h2>
                        <p className="text-xs text-slate-400">{layer.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={closeLayer}
                      aria-label="Close details"
                      className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="max-h-[70vh] space-y-4 overflow-y-auto px-5 py-4">
                    <section>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Responsibilities
                      </h3>
                      <ul className="space-y-1.5">
                        {layer.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2 text-sm text-slate-300">
                            <span style={{ color: layer.color }} aria-hidden>•</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Protocols
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {layer.protocols.map((p) => (
                            <span
                              key={p}
                              className="rounded-md border px-2 py-0.5 text-xs"
                              style={{
                                borderColor: `${layer.color}55`,
                                color: layer.color,
                                backgroundColor: `${layer.color}15`,
                              }}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Common Devices
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {layer.devices.map((d) => (
                            <span
                              key={d}
                              className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Data Unit &amp; Header
                      </h3>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3 text-sm text-slate-300">
                        <p>
                          <span className="text-slate-400">PDU name:</span>{' '}
                          <span className="font-semibold text-slate-100">
                            {layer.dataUnitName}
                          </span>
                        </p>
                        <p className="mt-1">
                          <span className="text-slate-400">Adds/Removes:</span>{' '}
                          <span style={{ color: layer.color }} className="font-semibold">
                            {layer.headerName}
                          </span>
                        </p>
                      </div>
                    </section>

                    <section>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Encapsulation / Decapsulation
                      </h3>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <p className="text-sm text-slate-300">
                          <span style={{ color: layer.color }}>Sender (↓):</span> wraps
                          the data with {layer.headerName}.{' '}
                          <span style={{ color: layer.color }}>Receiver (↑):</span>{' '}
                          removes that header and passes the payload up to the next
                          layer.
                        </p>
                      </div>
                    </section>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
