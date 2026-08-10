import { useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';

/**
 * Drives automatic step advancement while `isPlaying` is true.
 * Pauses at the last step. Uses a timeout that reschedules on step/speed change.
 */
export function useAnimationPlayer() {
  const isPlaying = useStore((s) => s.isPlaying);
  const step = useStore((s) => s.step);
  const maxStep = useStore((s) => s.maxStep);
  const speedMs = useStore((s) => s.speedMs);
  const next = useStore((s) => s.next);
  const pause = useStore((s) => s.pause);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    if (step >= maxStep) {
      pause();
      return;
    }
    timer.current = setTimeout(() => next(), speedMs);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [isPlaying, step, maxStep, speedMs, next, pause]);
}
