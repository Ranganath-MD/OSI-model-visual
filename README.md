# OSI Model Explorer

An interactive, animated teaching tool that visually explains how the **OSI (Open Systems Interconnection) model** works — including **encapsulation**, **decapsulation**, and how the **TCP/IP** model compares.

Built with **React + Vite + TypeScript + Tailwind CSS**, **Framer Motion** for animation, and **Zustand** for state.

## Setup

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run typecheck
```

## What it teaches

- **7 OSI layers** (L7 Application → L1 Physical) shown as two clickable stacks: Sender (left) and Receiver (right).
- **Animated data flow**: a data unit (Email, Web Request, or Video Chunk) travels down the sender stack (encapsulation — headers/trailers are added) and up the receiver stack (decapsulation — headers are stripped).
- **Data unit naming** changes as it moves: **Data → Segment → Packet → Frame → Bits** and back.
- **Layer detail panels**: click any layer for responsibilities, protocols, devices, and a mini encapsulation/decapsulation note.
- **Encapsulation timeline view**: a full stage-by-stage diagram with hover-to-highlight.
- **OSI vs TCP/IP comparison**: toggle to see the 4-layer TCP/IP model mapped onto the 7 OSI layers, with an animated TCP/IP encapsulation flow.
- **Predefined scenarios**: Sending an Email (SMTP), Loading a Webpage (HTTPS), Streaming a Video — each labels the right protocol at each layer and picks the right physical medium (cable / fiber / Wi-Fi).
- **Dark/light mode** toggle and a short **onboarding tour**.

## Controls

- **Play / Pause** — auto-advance the animation.
- **Step Forward / Step Back** — inspect one layer at a time.
- **Reset** — return to the start.
- **Speed** — Slow / Normal / Fast.
- Click any **layer card** to open its detail panel.
- Use the **top nav** to switch between Visualization, Encapsulation, and OSI vs TCP/IP views.

## Architecture

```
src/
├── App.tsx                      # Root: theme handling, view switching, modal
├── types.ts                     # Shared TypeScript types
├── data/
│   └── networkData.ts           # Mock data: OSI layers, TCP/IP layers, scenarios
├── store/
│   └── useStore.ts              # Zustand store (view, theme, scenario, animation)
├── hooks/
│   ├── useAnimationPlayer.ts    # Drives auto-advancing steps while playing
│   └── useEncapsulation.ts      # Computes header stacks / PDU names per step
└── components/
    ├── Header.tsx               # Top bar: nav, theme toggle, onboarding tour
    ├── OsiStack.tsx             # One vertical stack (sender or receiver)
    ├── LayerCard.tsx            # A single clickable layer
    ├── DataUnit.tsx             # Animated encapsulated/decapsulated data unit
    ├── AnimationControls.tsx    # Play/pause/step/reset + progress bar
    ├── LayerDetailPanel.tsx     # Modal with full layer info
    ├── ScenarioSelector.tsx     # Email / Web / Video scenario picker
    ├── VisualizationView.tsx    # Main animated view (stacks + medium + controls)
    ├── EncapsulationExplainer.tsx # Timeline + color key
    └── ComparisonView.tsx       # OSI vs TCP/IP mapping
```

### Key concepts

- **Animation model**: the store builds an ordered `phases` array — sender L7→L1, then `medium`, then receiver L1→L7. Each step index maps to one phase, so stepping forward/back is just incrementing/decrementing `step`.
- **Encapsulation logic** (`useEncapsulation.ts`): `senderEncapsulation(step)` returns the headers added so far; `receiverDecapsulation(step)` returns the headers still present as they're stripped one per step.

## Extending

- **Add a scenario**: add an entry to `SCENARIOS` in `src/data/networkData.ts` with per-layer protocol labels and a `transportType`.
- **Add/edit a layer**: modify the `OSI_LAYERS` array (or `TCPIP_LAYERS`). Each layer has a distinct `color` used for headers and highlights.
- **Add a new protocol**: append it to the relevant layer's `protocols` array.
