import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUp, Radio, Info } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { getLayer } from '@/data/networkData';
import {
  t,
  tTemplate,
  tLayerName,
  tHeaderName,
  tDataUnitName,
  type Lang,
} from '@/i18n/translations';
import type { LayerNumber, Phase, Scenario } from '@/types';

function describeStep(
  step: number,
  phases: Phase[],
  scenario: Scenario,
  lang: Lang,
): { title: string; body: string; icon: typeof ArrowDown; color: string } {
  const phase = phases[step];
  if (!phase) {
    return {
      title: t('stepReady', lang),
      body: t('stepReadyBody', lang),
      icon: Info,
      color: '#64748b',
    };
  }

  if (phase.kind === 'medium') {
    const mediumKey =
      scenario.transportType === 'wifi'
        ? 'stepMediumWifi'
        : scenario.transportType === 'fiber'
          ? 'stepMediumFiber'
          : 'stepMediumCable';
    const mediumLabel = t(mediumKey as 'stepMediumWifi', lang);
    return {
      title: tTemplate('stepMediumTitle', lang, { medium: mediumLabel }),
      body: tTemplate('stepMediumBody', lang, { medium: mediumLabel }),
      icon: Radio,
      color: '#8b5cf6',
    };
  }

  const layerNum = phase.layer as LayerNumber;
  const layer = getLayer(layerNum);
  const layerName = tLayerName(layerNum, lang);
  const transportProto = scenario.layerProtocols[4]?.name;
  const headerName = tHeaderName(layerNum, lang, transportProto);
  const dataUnit = tDataUnitName(layerNum, lang, transportProto);
  const protoName = scenario.layerProtocols[layerNum]?.name ?? layer.protocols[0];
  const nextLabel =
    phase.kind === 'sender'
      ? layer.number - 1 === 0
        ? t('stepNextPhysical', lang)
        : String(layer.number - 1)
      : layer.number + 1 > 7
        ? t('stepNextApplication', lang)
        : String(layer.number + 1);

  if (phase.kind === 'sender') {
    if (layerNum === 1) {
      return {
        title: tTemplate('stepSenderTitlePhysical', lang, {
          n: String(layer.number),
          layer: layerName,
        }),
        body: tTemplate('stepSenderBodyPhysical', lang, { proto: protoName }),
        icon: ArrowDown,
        color: layer.color,
      };
    }
    if (layerNum === 7) {
      return {
        title: tTemplate('stepSenderTitleApp', lang, {
          n: String(layer.number),
          layer: layerName,
          header: headerName,
        }),
        body: tTemplate('stepSenderBodyApp', lang, {
          proto: protoName,
          dataUnit,
        }),
        icon: ArrowDown,
        color: layer.color,
      };
    }
    return {
      title: tTemplate('stepSenderTitle', lang, {
        n: String(layer.number),
        layer: layerName,
        header: headerName,
      }),
      body: tTemplate('stepSenderBody', lang, {
        layer: layerName,
        proto: protoName,
        header: headerName,
        dataUnit,
        next: nextLabel,
      }),
      icon: ArrowDown,
      color: layer.color,
    };
  }

  if (layerNum === 1) {
    return {
      title: tTemplate('stepReceiverTitlePhysical', lang, {
        n: String(layer.number),
        layer: layerName,
      }),
      body: tTemplate('stepReceiverBodyPhysical', lang, { proto: protoName }),
      icon: ArrowUp,
      color: layer.color,
    };
  }
  if (layerNum === 7) {
    return {
      title: tTemplate('stepReceiverTitleApp', lang, {
        n: String(layer.number),
        layer: layerName,
        header: headerName,
      }),
      body: tTemplate('stepReceiverBodyApp', lang, {
        proto: protoName,
        dataUnit,
      }),
      icon: ArrowUp,
      color: layer.color,
    };
  }

  return {
    title: tTemplate('stepReceiverTitle', lang, {
      n: String(layer.number),
      layer: layerName,
      header: headerName,
    }),
    body: tTemplate('stepReceiverBody', lang, {
      layer: layerName,
      proto: protoName,
      header: headerName,
      dataUnit,
      next: nextLabel,
    }),
    icon: ArrowUp,
    color: layer.color,
  };
}

export function StepDescription() {
  const step = useStore((s) => s.step);
  const phases = useStore((s) => s.phases);
  const scenario = useStore((s) => s.scenario);
  const lang = useStore((s) => s.lang);

  const { title, body, icon: Icon, color } = describeStep(step, phases, scenario, lang);

  return (
    <motion.div
      className="w-full rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
      aria-live="polite"
      aria-label={lang === 'kn' ? 'ಪ್ರಸ್ತುತ ಹಂತದ ವಿವರಣೆ' : 'Current step description'}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.22 }}
        >
          <div className="mb-2 flex items-center gap-2">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: color }}
            >
              <Icon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          </div>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{body}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
