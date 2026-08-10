import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun, X, HelpCircle } from 'lucide-react';
import { useStore } from '@/store/useStore';
import type { View } from '@/store/useStore';

const VIEWS: { id: View; label: string }[] = [
  { id: 'visualization', label: 'Visualization' },
  { id: 'explainer', label: 'Encapsulation' },
  { id: 'comparison', label: 'OSI vs TCP/IP' },
];

export function Header() {
  const theme = useStore((s) => s.theme);
  const toggleTheme = useStore((s) => s.toggleTheme);
  const view = useStore((s) => s.view);
  const setView = useStore((s) => s.setView);
  const onboarding = useStore((s) => s.onboarding);
  const setOnboarding = useStore((s) => s.setOnboarding);
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white">
            <NetworkIcon />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 dark:text-slate-100">
              OSI Model Explorer
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Interactive guide to encapsulation &amp; decapsulation
            </p>
          </div>
        </div>

        <nav
          className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-100/60 p-1 dark:border-slate-800 dark:bg-slate-900/60"
          aria-label="Main views"
        >
          {VIEWS.map((v) => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              aria-pressed={view === v.id}
              className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                view === v.id
                  ? 'text-white dark:text-white'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {view === v.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-slate-800 dark:bg-slate-700/80"
                  transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                />
              )}
              <span className="relative">{v.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTourOpen(true)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="How to use this app"
          >
            <HelpCircle className="h-5 w-5" />
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {(onboarding || tourOpen) && (
          <Tour
            onClose={() => {
              setOnboarding(false);
              setTourOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

function Tour({ onClose }: { onClose: () => void }) {
  const steps = [
    'Pick a scenario (Email, Webpage, Video) to see real protocols at each layer.',
    'Press Play to watch data travel down the sender stack (encapsulation) and up the receiver stack (decapsulation).',
    'Use Step Forward / Back to inspect any single layer in detail.',
    'Click any layer card to open a detailed explanation panel.',
    'Switch views to see the Encapsulation timeline or compare OSI with TCP/IP.',
  ];
  const [i, setI] = useState(0);
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-label="How to use"
    >
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">How to use this app</h2>
          <button
            onClick={onClose}
            aria-label="Close tour"
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">{steps[i]}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-1">
            {steps.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 w-1.5 rounded-full ${
                  idx === i ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {i > 0 && (
              <button
                onClick={() => setI(i - 1)}
                className="rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                Back
              </button>
            )}
            {i < steps.length - 1 ? (
              <button
                onClick={() => setI(i + 1)}
                className="rounded-lg bg-emerald-600 px-3 py-1 text-xs text-white"
              >
                Next
              </button>
            ) : (
              <button onClick={onClose} className="rounded-lg bg-emerald-600 px-3 py-1 text-xs text-white">
                Got it
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
