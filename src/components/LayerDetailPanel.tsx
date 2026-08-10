import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useStore } from '@/store/useStore';
import {
  getLayer,
  layerAddsHeader,
  resolveDataUnitName,
  resolveHeaderName,
} from '@/data/networkData';
import { tLayerResponsibilities } from '@/i18n/translations';

export function LayerDetailPanel() {
  const selectedLayer = useStore((s) => s.selectedLayer);
  const closeLayer = useStore((s) => s.closeLayer);
  const scenario = useStore((s) => s.scenario);
  const lang = useStore((s) => s.lang);

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
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const layer = getLayer(selectedLayer);
              const headerLabel = resolveHeaderName(selectedLayer, scenario);
              const pduName = resolveDataUnitName(selectedLayer, scenario);
              const responsibilities = tLayerResponsibilities(selectedLayer, lang);
              const addsHeader = layerAddsHeader(selectedLayer);
              const scenarioProto = scenario.layerProtocols[selectedLayer];

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
                        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                          {layer.name} Layer
                        </h2>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{layer.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={closeLayer}
                      aria-label="Close details"
                      className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="max-h-[70vh] space-y-4 overflow-y-auto px-5 py-4">
                    <section>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Key Responsibilities
                      </h3>
                      <ul className="space-y-1.5">
                        {responsibilities.map((r) => (
                          <li key={r} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <span style={{ color: layer.color }} aria-hidden>•</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
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
                        {scenarioProto && (
                          <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                            This scenario: <span className="font-medium text-slate-700 dark:text-slate-200">{scenarioProto.name}</span>
                            {scenarioProto.note ? ` — ${scenarioProto.note}` : ''}
                          </p>
                        )}
                      </div>
                      <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Common Devices
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {layer.devices.map((d) => (
                            <span
                              key={d}
                              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Data Unit &amp; Header
                      </h3>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                        <p>
                          <span className="text-slate-500 dark:text-slate-400">PDU name:</span>{' '}
                          <span className="font-semibold text-slate-900 dark:text-slate-100">
                            {pduName}
                          </span>
                        </p>
                        <p className="mt-1">
                          <span className="text-slate-500 dark:text-slate-400">
                            {addsHeader ? 'Adds/Removes:' : 'Processing:'}
                          </span>{' '}
                          <span style={{ color: layer.color }} className="font-semibold">
                            {headerLabel}
                          </span>
                        </p>
                      </div>
                    </section>

                    <section>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Encapsulation / Decapsulation
                      </h3>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/50">
                        {selectedLayer === 1 ? (
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            <span style={{ color: layer.color }}>Sender (↓):</span> converts the
                            frame into a bit stream and drives signals onto the medium — no
                            protocol header is added.{' '}
                            <span style={{ color: layer.color }}>Receiver (↑):</span> recovers
                            bits from signals and passes them up to Data Link.
                          </p>
                        ) : selectedLayer === 7 ? (
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            <span style={{ color: layer.color }}>Sender (↓):</span> creates the
                            application payload ({headerLabel}).{' '}
                            <span style={{ color: layer.color }}>Receiver (↑):</span> delivers
                            that payload to the user application.
                          </p>
                        ) : (
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            <span style={{ color: layer.color }}>Sender (↓):</span> wraps the
                            data with {headerLabel}.{' '}
                            <span style={{ color: layer.color }}>Receiver (↑):</span> removes
                            that header and passes the payload up to the next layer.
                            {(selectedLayer === 5 || selectedLayer === 6) && (
                              <span className="mt-2 block text-xs text-slate-500 dark:text-slate-400">
                                Note: In real TCP/IP stacks, Session/Presentation rarely add
                                separate headers — those roles often live in apps or TLS.
                              </span>
                            )}
                          </p>
                        )}
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
