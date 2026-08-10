import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { useAnimationPlayer } from '@/hooks/useAnimationPlayer';
import { Header } from '@/components/Header';
import { VisualizationView } from '@/components/VisualizationView';
import { EncapsulationExplainer } from '@/components/EncapsulationExplainer';
import { ComparisonView } from '@/components/ComparisonView';
import { LayerDetailPanel } from '@/components/LayerDetailPanel';

function App() {
  const view = useStore((s) => s.view);
  const theme = useStore((s) => s.theme);
  useAnimationPlayer();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <div
      className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}
    >
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {view === 'visualization' && <VisualizationView />}
            {view === 'explainer' && <EncapsulationExplainer />}
            {view === 'comparison' && <ComparisonView />}
          </motion.div>
        </AnimatePresence>
      </main>

      <LayerDetailPanel />
    </div>
  );
}

export default App;
