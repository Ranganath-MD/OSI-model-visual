import type { LayerNumber, Phase, Scenario } from '@/types';
import { OSI_LAYER_MAP, resolveHeaderName, resolveDataUnitName } from '@/data/networkData';
import { OSI_ORDER_DOWN } from '@/store/useStore';

export interface EncapLevel {
  layer: LayerNumber;
  headerLabel: string;
  color: string;
}

export function layerMeta(n: LayerNumber) {
  return OSI_LAYER_MAP[n];
}

/**
 * Headers / labels added on the sender side up to the current step (L7 → L1).
 */
export function senderEncapsulation(
  step: number,
  phases: Phase[],
  scenario: Scenario,
): EncapLevel[] {
  const levels: EncapLevel[] = [];
  for (let i = 0; i <= step && i < phases.length; i++) {
    const p = phases[i];
    if (p.kind === 'sender') {
      const meta = layerMeta(p.layer);
      levels.push({
        layer: p.layer,
        headerLabel: resolveHeaderName(p.layer, scenario),
        color: meta.color,
      });
    }
  }
  return levels;
}

function receiverStarted(step: number, phases: Phase[]): boolean {
  for (let i = 0; i <= step && i < phases.length; i++) {
    if (phases[i].kind === 'receiver') return true;
  }
  return false;
}

/**
 * Labels still present on the data unit as it moves up the receiver (L1 → L7).
 */
export function receiverDecapsulation(
  step: number,
  phases: Phase[],
  scenario: Scenario,
): EncapLevel[] {
  if (!receiverStarted(step, phases)) return [];
  const processed = new Set<LayerNumber>();
  for (let i = 0; i <= step && i < phases.length; i++) {
    const p = phases[i];
    if (p.kind === 'receiver') processed.add(p.layer);
  }
  const remaining = OSI_ORDER_DOWN.filter((l) => !processed.has(l));
  return remaining.map((l) => {
    const meta = layerMeta(l);
    return {
      layer: l,
      headerLabel: resolveHeaderName(l, scenario),
      color: meta.color,
    };
  });
}

export function currentDataUnitName(
  step: number,
  phases: Phase[],
  scenario: Scenario,
): string {
  const p = phases[step];
  if (!p) return 'Data';
  if (p.kind === 'medium') return 'Bits';
  return resolveDataUnitName(p.layer, scenario);
}
