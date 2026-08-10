import type { LayerNumber } from '@/types';

export type Lang = 'en' | 'kn';

export const translations = {
  // Header
  appTitle: { en: 'OSI Model Explorer', kn: 'OSI ಮಾದರಿ ಎಕ್ಸ್‌ಪ್ಲೋರರ್' },
  appSubtitle: { en: 'Interactive guide to encapsulation & decapsulation', kn: 'ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಶನ್ ಮತ್ತು ಡಿಕ್ಯಾಪ್ಸುಲೇಶನ್ ಪಾಠಗಳು' },

  // Nav views
  navVisualization: { en: 'Visualization', kn: 'ದೃಶ್ಯೀಕರಣ' },
  navExplainer: { en: 'Encapsulation', kn: 'ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಶನ್' },
  navComparison: { en: 'OSI vs TCP/IP', kn: 'OSI vs TCP/IP' },

  // Tour
  tourTitle: { en: 'How to use this app', kn: 'ಈ ಅಪ್ಲಿಕೇಶನ್ ಹೇಗೆ ಬಳಸುವುದು' },
  tourBack: { en: 'Back', kn: 'ಹಿಂದೆ' },
  tourNext: { en: 'Next', kn: 'ಮುಂದೆ' },
  tourDone: { en: 'Got it', kn: 'ಅರ್ಥವಾಯಿತು' },
  tourSteps: {
    en: [
      'Pick a scenario (Email, Webpage, Video) to see real protocols at each layer.',
      'Press Play to watch data travel down the sender stack (encapsulation) and up the receiver stack (decapsulation).',
      'Use Step Forward / Back to inspect any single layer in detail.',
      'Click any layer card to open a detailed explanation panel.',
      'Switch views to see the Encapsulation timeline or compare OSI with TCP/IP.',
    ],
    kn: [
      'ಒಂದು ದೃಶ್ಯವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ (ಇಮೇಲ್, ವೆಬ್‌ಪೇಜ್, ವೀಡಿಯೊ) — ಪ್ರತಿ ಪದರದಲ್ಲಿ ಯಾವ ಪ್ರೋಟೋಕಾಲ್ ಬಳಕೆಯಾಗುತ್ತದೆ ಎಂದು ನೋಡಿ.',
      'Play ಒತ್ತಿ ಡೇಟಾ ಕಳುಹಿಸುವವರ ಪದರಗಳಲ್ಲಿ ಕೆಳಗೆ (ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಶನ್) ಮತ್ತು ಸ್ವೀಕರಿಸುವವರ ಪದರಗಳಲ್ಲಿ ಮೇಲೆ (ಡಿಕ್ಯಾಪ್ಸುಲೇಶನ್) ಹೇಗೆ ಪ್ರಯಾಣಿಸುತ್ತದೆ ಎಂದು ನೋಡಿ.',
      'Step Forward / Back ಬಳಸಿ ಯಾವುದೇ ಒಂದು ಪದರವನ್ನು ವಿವರವಾಗಿ ಅಧ್ಯಯನ ಮಾಡಿ.',
      'ಯಾವುದೇ ಪದರದ ಕಾರ್ಡನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ವಿವರವಾದ ವಿವರಣೆ ನೋಡಿ.',
      'ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಶನ್ ಟೈಮ್‌ಲೈನ್ ಅಥವಾ OSI ಮತ್ತು TCP/IP ಹೋಲಿಕೆ ನೋಡಲು ವೀಕ್ಷಣೆ ಬದಲಿಸಿ.',
    ],
  },

  // Scenario selector
  scenarioLabel: { en: 'Scenario', kn: 'ದೃಶ್ಯ' },
  scenarioEmail: { en: 'Sending an Email (SMTP)', kn: 'ಇಮೇಲ್ ಕಳುಹಿಸುವುದು (SMTP)' },
  scenarioEmailDesc: { en: 'A mail client sends a message via SMTP over TCP/IP.', kn: 'ಮೇಲ್ ಕ್ಲೈಂಟ್ SMTP ಮೂಲಕ TCP/IP ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸುತ್ತದೆ.' },
  scenarioWeb: { en: 'Loading a Webpage (HTTPS)', kn: 'ವೆಬ್‌ಪೇಜ್ ಲೋಡ್ ಮಾಡುವುದು (HTTPS)' },
  scenarioWebDesc: { en: 'A browser requests a page over HTTP protected by TLS.', kn: 'ಬ್ರೌಸರ್ TLS ಸುರಕ್ಷಿತ HTTP ಮೂಲಕ ಪೇಜ್ ವಿನಂತಿಸುತ್ತದೆ.' },
  scenarioVideo: { en: 'Streaming a Video', kn: 'ವೀಡಿಯೊ ಸ್ಟ್ರೀಮ್ ಮಾಡುವುದು' },
  scenarioVideoDesc: { en: 'A media player streams video using RTP over UDP.', kn: 'ಮೀಡಿಯಾ ಪ್ಲೇಯರ್ RTP ಅನ್ನು UDP ಮೂಲಕ ಬಳಸಿ ವೀಡಿಯೊ ಸ್ಟ್ರೀಮ್ ಮಾಡುತ್ತದೆ.' },

  // Data labels
  dataEmail: { en: 'Email', kn: 'ಇಮೇಲ್' },
  dataWeb: { en: 'Web Request', kn: 'ವೆಬ್ ವಿನಂತಿ' },
  dataVideo: { en: 'Video Chunk', kn: 'ವೀಡಿಯೊ ಭಾಗ' },

  // Visualization
  sender: { en: 'Sender', kn: 'ಕಳುಹಿಸುವವರು' },
  receiver: { en: 'Receiver', kn: 'ಸ್ವೀಕರಿಸುವವರು' },
  encapsulationDown: { en: 'Encapsulation ↓', kn: 'ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಶನ್ ↓' },
  decapsulationUp: { en: 'Decapsulation ↑', kn: 'ಡಿಕ್ಯಾಪ್ಸುಲೇಶನ್ ↑' },
  actionEncapsulating: { en: 'Encapsulating', kn: 'ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಟ್ ಮಾಡುತ್ತಿದೆ' },
  actionDecapsulating: { en: 'Decapsulating', kn: 'ಡಿಕ್ಯಾಪ್ಸುಲೇಟ್ ಮಾಡುತ್ತಿದೆ' },
  actionTransmitting: { en: 'Transmitting bits', kn: 'ಬಿಟ್‌ಗಳನ್ನು ರವಾನಿಸಲಾಗುತ್ತಿದೆ' },
  ready: { en: 'Ready', kn: 'ಸಿದ್ಧ' },
  bitsTraveling: { en: 'Bits traveling via', kn: 'ಬಿಟ್‌ಗಳು ಪ್ರಯಾಣಿಸುತ್ತಿವೆ —' },
  currentPDU: { en: 'Current PDU', kn: 'ಪ್ರಸ್ತುತ PDU' },
  payload: { en: 'Payload', kn: 'ಪೇಲೋಡ್' },
  bitsTravelingLabel: { en: 'bits traveling…', kn: 'ಬಿಟ್‌ಗಳು ಪ್ರಯಾಣಿಸುತ್ತಿವೆ…' },

  // Medium
  mediumWifi: { en: 'Wi-Fi Radio', kn: 'ವೈ-ಫೈ ರೇಡಿಯೊ' },
  mediumFiber: { en: 'Optical Fiber', kn: 'ಆಪ್ಟಿಕಲ್ ಫೈಬರ್' },
  mediumCable: { en: 'Ethernet Cable', kn: 'ಇಥರ್ನೆಟ್ ಕೇಬಲ್' },

  // Animation controls
  speed: { en: 'Speed', kn: 'ವೇಗ' },
  speedSlow: { en: 'Slow', kn: 'ನಿಧಾನ' },
  speedNormal: { en: 'Normal', kn: 'ಸಾಮಾನ್ಯ' },
  speedFast: { en: 'Fast', kn: 'ವೇಗ' },
  mediumBits: { en: 'Medium (Bits)', kn: 'ಮಾಧ್ಯಮ (ಬಿಟ್‌ಗಳು)' },

  // Step description
  stepReady: { en: 'Ready to begin', kn: 'ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧ' },
  stepReadyBody: { en: 'Press Play to start the animation.', kn: 'ಅನಿಮೇಶನ್ ಪ್ರಾರಂಭಿಸಲು Play ಒತ್ತಿ.' },

  // Encapsulation explainer
  explainerTitle: { en: 'Encapsulation & Decapsulation Timeline', kn: 'ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಶನ್ ಮತ್ತು ಡಿಕ್ಯಾಪ್ಸುಲೇಶನ್ ಟೈಮ್‌ಲೈನ್' },
  explainerSubtitle: {
    en: 'Follow how the Protocol Data Unit (PDU) transforms as it moves down the sender and up the receiver. Hover any stage to highlight its layer.',
    kn: 'ಪ್ರೋಟೋಕಾಲ್ ಡೇಟಾ ಯುನಿಟ್ (PDU) ಕಳುಹಿಸುವವರಲ್ಲಿ ಕೆಳಗೆ ಮತ್ತು ಸ್ವೀಕರಿಸುವವರಲ್ಲಿ ಮೇಲೆ ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ ಎಂದು ನೋಡಿ. ಯಾವುದೇ ಹಂತದ ಮೇಲೆ ಹೋವರ್ ಮಾಡಿ ಪದರ ನೋಡಿ.',
  },
  explainerSender: { en: 'Sender ↓', kn: 'ಕಳುಹಿಸುವವರು ↓' },
  explainerMedium: { en: 'Medium', kn: 'ಮಾಧ್ಯಮ' },
  explainerReceiver: { en: 'Receiver ↑', kn: 'ಸ್ವೀಕರಿಸುವವರು ↑' },
  explainerColorKey: { en: 'Layer Color Key', kn: 'ಪದರ ಬಣ್ಣ ಕೀ' },
  explainerCurrentScenario: { en: 'Current Scenario', kn: 'ಪ್ರಸ್ತುತ ದೃಶ್ಯ' },
  explainerDataUnit: { en: 'Data unit:', kn: 'ಡೇಟಾ ಯುನಿಟ್:' },
  encapsulate: { en: 'encapsulate', kn: 'ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಟ್' },
  transmit: { en: 'transmit', kn: 'ರವಾನೆ' },
  decapsulate: { en: 'decapsulate', kn: 'ಡಿಕ್ಯಾಪ್ಸುಲೇಟ್' },

  // Comparison view
  comparisonTitle: { en: 'OSI vs TCP/IP Model', kn: 'OSI vs TCP/IP ಮಾದರಿ' },
  comparisonSubtitle: {
    en: 'Teaching maps the 7 OSI layers onto the 4 practical TCP/IP layers. Toggle to see the mapping.',
    kn: 'ಬೋಧನೆಯಲ್ಲಿ 7 OSI ಪದರಗಳನ್ನು 4 ಪ್ರಾಯೋಗಿಕ TCP/IP ಪದರಗಳಿಗೆ ನಕ್ಷೆ ಮಾಡಲಾಗುತ್ತದೆ. ಮ್ಯಾಪಿಂಗ್ ನೋಡಲು ಟಾಗಲ್ ಮಾಡಿ.',
  },
  teachingNoteTitle: { en: 'OSI theory vs real TCP/IP', kn: 'OSI ಸಿದ್ಧಾಂತ vs ನಿಜವಾದ TCP/IP' },
  teachingNoteBody: {
    en: 'OSI is a reference model. Real Internet traffic uses the TCP/IP stack: Presentation and Session roles are usually handled inside applications, TLS, or TCP, and L5–L6 rarely add separate headers. PDU names and headers below L4 still match everyday practice (TCP segment / UDP datagram, IP packet, Ethernet frame, bits).',
    kn: 'OSI ಒಂದು ಉಲ್ಲೇಖ ಮಾದರಿ. ನಿಜವಾದ ಇಂಟರ್ನೆಟ್ ಟ್ರಾಫಿಕ್ TCP/IP ಸ್ಟ್ಯಾಕ್ ಬಳಸುತ್ತದೆ: ಪ್ರೆಜೆಂಟೇಶನ್ ಮತ್ತು ಸೆಷನ್ ಪಾತ್ರಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಅಪ್ಲಿಕೇಶನ್, TLS, ಅಥವಾ TCP ಒಳಗೆ ನಿರ್ವಹಿಸಲ್ಪಡುತ್ತವೆ, ಮತ್ತು L5–L6 ಅಪರೂಪವಾಗಿ ಪ್ರತ್ಯೇಕ ಹೆಡರ್ ಸೇರಿಸುತ್ತವೆ. L4 ಕೆಳಗಿನ PDU ಹೆಸರುಗಳು ದೈನಂದಿನ ಅಭ್ಯಾಸಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ (TCP ಸೆಗ್ಮೆಂಟ್ / UDP ಡೇಟಾಗ್ರಾಮ್, IP ಪ್ಯಾಕೆಟ್, ಇಥರ್ನೆಟ್ ಫ್ರೇಮ್, ಬಿಟ್‌ಗಳು).',
  },
  comparisonOsi: { en: 'OSI (7 layers)', kn: 'OSI (7 ಪದರಗಳು)' },
  comparisonTcpip: { en: 'TCP/IP (4 layers)', kn: 'TCP/IP (4 ಪದರಗಳು)' },
  comparisonOsiModel: { en: 'OSI Model', kn: 'OSI ಮಾದರಿ' },
  comparisonTcpipModel: { en: 'TCP/IP Model', kn: 'TCP/IP ಮಾದರಿ' },
  comparisonSummary: { en: 'Mapping Summary', kn: 'ಮ್ಯಾಪಿಂಗ್ ಸಾರಾಂಶ' },
  comparisonFlow: { en: 'TCP/IP Encapsulation Flow', kn: 'TCP/IP ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಶನ್ ಹರಿವು' },

  // Layer detail panel
  detailKeyResponsibilities: { en: 'Key Responsibilities', kn: 'ಮುಖ್ಯ ಜವಾಬ್ದಾರಿಗಳು' },
  detailProtocols: { en: 'Protocols', kn: 'ಪ್ರೋಟೋಕಾಲ್‌ಗಳು' },
  detailDevices: { en: 'Common Devices', kn: 'ಸಾಮಾನ್ಯ ಸಾಧನಗಳು' },
  detailDataUnitHeader: { en: 'Data Unit & Header', kn: 'ಡೇಟಾ ಯುನಿಟ್ ಮತ್ತು ಹೆಡರ್' },
  detailPduName: { en: 'PDU name:', kn: 'PDU ಹೆಸರು:' },
  detailAddsRemoves: { en: 'Adds/Removes:', kn: 'ಸೇರಿಸುತ್ತದೆ/ತೆಗೆಯುತ್ತದೆ:' },
  detailEncapDecap: { en: 'Encapsulation / Decapsulation', kn: 'ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಶನ್ / ಡಿಕ್ಯಾಪ್ಸುಲೇಶನ್' },
  detailSenderWraps: { en: 'Sender (↓):', kn: 'ಕಳುಹಿಸುವವರು (↓):' },
  detailReceiverRemoves: { en: 'Receiver (↑):', kn: 'ಸ್ವೀಕರಿಸುವವರು (↑):' },
  detailWrapsBody: { en: 'wraps the data with', kn: 'ಡೇಟಾವನ್ನು ಇದರೊಂದಿಗೆ ಸುತ್ತುತ್ತದೆ:' },
  detailRemovesBody: { en: 'removes that header and passes the payload up to the next layer.', kn: 'ಆ ಹೆಡರ್ ತೆಗೆದು ಪೇಲೋಡ್ ಅನ್ನು ಮುಂದಿನ ಪದರಕ್ಕೆ ಕಳುಹಿಸುತ್ತದೆ.' },

  // Layer names and descriptions in Kannada
  layers: {
    7: {
      name: { en: 'Application', kn: 'ಅಪ್ಲಿಕೇಶನ್' },
      description: { en: 'Network services for end-user applications.', kn: 'ಬಳಕೆದಾರರ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ನೆಟ್‌ವರ್ಕ್ ಸೇವೆಗಳು.' },
      responsibilities: {
        en: ['Provides network services directly to user applications', 'Defines protocols for email, web, file transfer', 'Handles resource sharing and remote access'],
        kn: ['ಬಳಕೆದಾರರ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ನೇರವಾಗಿ ನೆಟ್‌ವರ್ಕ್ ಸೇವೆ ಒದಗಿಸುತ್ತದೆ', 'ಇಮೇಲ್, ವೆಬ್, ಫೈಲ್ ವರ್ಗಾವಣೆಗೆ ಪ್ರೋಟೋಕಾಲ್ ನಿರ್ಧರಿಸುತ್ತದೆ', 'ಸಂಪನ್ಮೂಲ ಹಂಚಿಕೆ ಮತ್ತು ದೂರಸ್ಥ ಪ್ರವೇಶ ನಿರ್ವಹಿಸುತ್ತದೆ'],
      },
    },
    6: {
      name: { en: 'Presentation', kn: 'ಪ್ರೆಜೆಂಟೇಶನ್' },
      description: { en: 'Translation, encryption, and compression of data.', kn: 'ಡೇಟಾ ಅನುವಾದ, ಎನ್‌ಕ್ರಿಪ್ಶನ್, ಮತ್ತು ಸಂಕ್ಷಿಪ್ತೀಕರಣ.' },
      responsibilities: {
        en: ['Translates data between application and network formats', 'Encrypts and decrypts data for secure transfer (e.g. TLS)', 'Compresses or encodes data (e.g. codecs, MIME)'],
        kn: ['ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ಸ್ವರೂಪಗಳ ನಡುವೆ ಡೇಟಾ ಅನುವಾದ ಮಾಡುತ್ತದೆ', 'ಸುರಕ್ಷಿತ ವರ್ಗಾವಣೆಗಾಗಿ ಡೇಟಾ ಎನ್‌ಕ್ರಿಪ್ಟ್/ಡಿಕ್ರಿಪ್ಟ್ ಮಾಡುತ್ತದೆ (ಉದಾ. TLS)', 'ಡೇಟಾ ಸಂಕ್ಷಿಪ್ತಗೊಳಿಸುತ್ತದೆ ಅಥವಾ ಎನ್‌ಕೋಡ್ ಮಾಡುತ್ತದೆ (ಉದಾ. ಕೋಡೆಕ್, MIME)'],
      },
    },
    5: {
      name: { en: 'Session', kn: 'ಸೆಷನ್' },
      description: { en: 'Manages sessions between applications.', kn: 'ಅಪ್ಲಿಕೇಶನ್‌ಗಳ ನಡುವೆ ಸೆಷನ್ ನಿರ್ವಹಿಸುತ್ತದೆ.' },
      responsibilities: {
        en: ['Opens, manages, and terminates sessions', 'Handles dialog control and synchronization', 'Manages checkpoints and recovery'],
        kn: ['ಸೆಷನ್ ತೆರೆಯುತ್ತದೆ, ನಿರ್ವಹಿಸುತ್ತದೆ, ಮುಚ್ಚುತ್ತದೆ', 'ಸಂಭಾಷಣೆ ನಿಯಂತ್ರಣ ಮತ್ತು ಸಿಂಕ್ರೊನೈಸೇಶನ್ ನಿರ್ವಹಿಸುತ್ತದೆ', 'ಚೆಕ್‌ಪಾಯಿಂಟ್ ಮತ್ತು ರಿಕವರಿ ನಿರ್ವಹಿಸುತ್ತದೆ'],
      },
    },
    4: {
      name: { en: 'Transport', kn: 'ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್' },
      description: { en: 'End-to-end delivery, segmentation, and flow control.', kn: 'ಎಂಡ್-ಟು-ಎಂಡ್ ವಿತರಣೆ, ವಿಭಜನೆ, ಮತ್ತು ಹರಿವು ನಿಯಂತ್ರಣ.' },
      responsibilities: {
        en: ['Segments (TCP) or datagrams (UDP) data and reassembles it', 'Provides reliable, ordered delivery (TCP) or fast delivery (UDP)', 'Handles error control and flow control (mainly TCP)'],
        kn: ['ಡೇಟಾವನ್ನು ಸೆಗ್ಮೆಂಟ್ (TCP) ಅಥವಾ ಡೇಟಾಗ್ರಾಮ್ (UDP) ಆಗಿ ವಿಭಜಿಸಿ ಮರುಸೇರಿಸುತ್ತದೆ', 'ವಿಶ್ವಾಸಾರ್ಹ, ಕ್ರಮಬದ್ಧ ವಿತರಣೆ (TCP) ಅಥವಾ ವೇಗದ ವಿತರಣೆ (UDP)', 'ದೋಷ ನಿಯಂತ್ರಣ ಮತ್ತು ಹರಿವು ನಿಯಂತ್ರಣ (ಮುಖ್ಯವಾಗಿ TCP)'],
      },
    },
    3: {
      name: { en: 'Network', kn: 'ನೆಟ್‌ವರ್ಕ್' },
      description: { en: 'Routing data between networks using logical addresses.', kn: 'ಲಾಜಿಕಲ್ ವಿಳಾಸ ಬಳಸಿ ನೆಟ್‌ವರ್ಕ್‌ಗಳ ನಡುವೆ ಡೇಟಾ ರೂಟಿಂಗ್.' },
      responsibilities: {
        en: ['Logical addressing (IP addresses)', 'Routes packets between networks', 'Handles fragmentation and reassembly'],
        kn: ['ಲಾಜಿಕಲ್ ವಿಳಾಸ (IP ವಿಳಾಸಗಳು)', 'ನೆಟ್‌ವರ್ಕ್‌ಗಳ ನಡುವೆ ಪ್ಯಾಕೆಟ್ ರೂಟ್ ಮಾಡುತ್ತದೆ', 'ವಿಭಜನೆ ಮತ್ತು ಮರುಸೇರಣೆ ನಿರ್ವಹಿಸುತ್ತದೆ'],
      },
    },
    2: {
      name: { en: 'Data Link', kn: 'ಡೇಟಾ ಲಿಂಕ್' },
      description: { en: 'Node-to-node delivery over a physical link.', kn: 'ಭೌತಿಕ ಲಿಂಕ್ ಮೇಲೆ ನೋಡ್-ಟು-ನೋಡ್ ವಿತರಣೆ.' },
      responsibilities: {
        en: ['Frames data with MAC addressing', 'Error detection (CRC); frames with errors are typically dropped', 'Media Access Control (MAC)'],
        kn: ['MAC ವಿಳಾಸದೊಂದಿಗೆ ಡೇಟಾ ಫ್ರೇಮ್ ಮಾಡುತ್ತದೆ', 'ದೋಷ ಪತ್ತೆ (CRC); ದೋಷವಿರುವ ಫ್ರೇಮ್‌ಗಳನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ತ್ಯಜಿಸಲಾಗುತ್ತದೆ', 'ಮೀಡಿಯಾ ಆಕ್ಸೆಸ್ ಕಂಟ್ರೋಲ್ (MAC)'],
      },
    },
    1: {
      name: { en: 'Physical', kn: 'ಫಿಸಿಕಲ್' },
      description: { en: 'Transmission of raw bits over a physical medium.', kn: 'ಭೌತಿಕ ಮಾಧ್ಯಮದ ಮೇಲೆ ಕಚ್ಚಾ ಬಿಟ್‌ಗಳ ರವಾನೆ.' },
      responsibilities: {
        en: ['Transmits raw bit stream over physical media', 'Defines voltage, timing, and cable specs', 'Converts bits to signals (electrical, optical, radio) — no protocol header'],
        kn: ['ಭೌತಿಕ ಮಾಧ್ಯಮದ ಮೇಲೆ ಕಚ್ಚಾ ಬಿಟ್ ಸ್ಟ್ರೀಮ್ ರವಾನಿಸುತ್ತದೆ', 'ವೋಲ್ಟೇಜ್, ಟೈಮಿಂಗ್, ಕೇಬಲ್ ಸ್ಪೆಕ್ ನಿರ್ಧರಿಸುತ್ತದೆ', 'ಬಿಟ್‌ಗಳನ್ನು ಸಿಗ್ನಲ್ ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ (ವಿದ್ಯುತ್, ಆಪ್ಟಿಕಲ್, ರೇಡಿಯೊ) — ಪ್ರೋಟೋಕಾಲ್ ಹೆಡರ್ ಇಲ್ಲ'],
      },
    },
  } as Record<LayerNumber, {
    name: LangStr;
    description: LangStr;
    responsibilities: LangArr;
  }>,

  // Header names for layers (used in step descriptions; L4 overridden per scenario)
  headerNames: {
    7: { en: 'Application payload', kn: 'ಅಪ್ಲಿಕೇಶನ್ ಪೇಲೋಡ್' },
    6: { en: 'Presentation Header (OSI)', kn: 'ಪ್ರೆಜೆಂಟೇಶನ್ ಹೆಡರ್ (OSI)' },
    5: { en: 'Session Header (OSI)', kn: 'ಸೆಷನ್ ಹೆಡರ್ (OSI)' },
    4: { en: 'TCP/UDP Header', kn: 'TCP/UDP ಹೆಡರ್' },
    3: { en: 'IP Header', kn: 'IP ಹೆಡರ್' },
    2: { en: 'Ethernet Header & Trailer', kn: 'ಇಥರ್ನೆಟ್ ಹೆಡರ್ ಮತ್ತು ಟ್ರೈಲರ್' },
    1: { en: 'Bit stream (no header)', kn: 'ಬಿಟ್ ಸ್ಟ್ರೀಮ್ (ಹೆಡರ್ ಇಲ್ಲ)' },
  } as Record<LayerNumber, LangStr>,
  headerNameTcp: { en: 'TCP Header', kn: 'TCP ಹೆಡರ್' },
  headerNameUdp: { en: 'UDP Header', kn: 'UDP ಹೆಡರ್' },

  // Data unit names (L4 overridden per scenario)
  dataUnitNames: {
    7: { en: 'Data', kn: 'ಡೇಟಾ' },
    6: { en: 'Data', kn: 'ಡೇಟಾ' },
    5: { en: 'Data', kn: 'ಡೇಟಾ' },
    4: { en: 'Segment / Datagram', kn: 'ಸೆಗ್ಮೆಂಟ್ / ಡೇಟಾಗ್ರಾಮ್' },
    3: { en: 'Packet', kn: 'ಪ್ಯಾಕೆಟ್' },
    2: { en: 'Frame', kn: 'ಫ್ರೇಮ್' },
    1: { en: 'Bits', kn: 'ಬಿಟ್‌ಗಳು' },
  } as Record<LayerNumber, LangStr>,
  dataUnitSegment: { en: 'Segment', kn: 'ಸೆಗ್ಮೆಂಟ್' },
  dataUnitDatagram: { en: 'Datagram', kn: 'ಡೇಟಾಗ್ರಾಮ್' },

  // TCP/IP layer names
  tcpipLayers: {
    Application: { en: 'Application', kn: 'ಅಪ್ಲಿಕೇಶನ್' },
    Transport: { en: 'Transport', kn: 'ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್' },
    Internet: { en: 'Internet', kn: 'ಇಂಟರ್ನೆಟ್' },
    'Network Access': { en: 'Network Access', kn: 'ನೆಟ್‌ವರ್ಕ್ ಆಕ್ಸೆಸ್' },
  } as Record<string, LangStr>,

  // Encapsulation explainer stages (sender L7→L1, medium, receiver L1→L7)
  stages: {
    en: [
      'Application payload',
      '+ Presentation Hdr (OSI)',
      '+ Session Hdr (OSI)',
      'Segment/Datagram (+ Transport Hdr)',
      'Packet (+ IP Hdr)',
      'Frame (+ Ethernet Hdr/Trl)',
      'Bits (Physical signaling — no header)',
      'Bits travel on the medium',
      'Bits recovered (Physical — no header)',
      'Packet (− Ethernet Hdr/Trl)',
      'Segment/Datagram (− IP Hdr)',
      'Data (− Transport Hdr)',
      '− Session Hdr (OSI)',
      '− Presentation Hdr (OSI)',
      'Application payload delivered',
    ],
    kn: [
      'ಅಪ್ಲಿಕೇಶನ್ ಪೇಲೋಡ್',
      '+ ಪ್ರೆಜೆಂಟೇಶನ್ ಹೆಡರ್ (OSI)',
      '+ ಸೆಷನ್ ಹೆಡರ್ (OSI)',
      'ಸೆಗ್ಮೆಂಟ್/ಡೇಟಾಗ್ರಾಮ್ (+ ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ ಹೆಡರ್)',
      'ಪ್ಯಾಕೆಟ್ (+ IP ಹೆಡರ್)',
      'ಫ್ರೇಮ್ (+ ಇಥರ್ನೆಟ್ ಹೆಡರ್/ಟ್ರೈಲರ್)',
      'ಬಿಟ್‌ಗಳು (ಭೌತಿಕ ಸಿಗ್ನಲ್ — ಹೆಡರ್ ಇಲ್ಲ)',
      'ಬಿಟ್‌ಗಳು ಮಾಧ್ಯಮದಲ್ಲಿ ಪ್ರಯಾಣಿಸುತ್ತವೆ',
      'ಬಿಟ್‌ಗಳು ಮರುಪಡೆಯಲಾಗಿದೆ (ಫಿಸಿಕಲ್ — ಹೆಡರ್ ಇಲ್ಲ)',
      'ಪ್ಯಾಕೆಟ್ (− ಇಥರ್ನೆಟ್ ಹೆಡರ್/ಟ್ರೈಲರ್)',
      'ಸೆಗ್ಮೆಂಟ್/ಡೇಟಾಗ್ರಾಮ್ (− IP ಹೆಡರ್)',
      'ಡೇಟಾ (− ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ ಹೆಡರ್)',
      '− ಸೆಷನ್ ಹೆಡರ್ (OSI)',
      '− ಪ್ರೆಜೆಂಟೇಶನ್ ಹೆಡರ್ (OSI)',
      'ಅಪ್ಲಿಕೇಶನ್ ಪೇಲೋಡ್ ವಿತರಣೆ',
    ],
  },

  // TCP flow steps
  tcpFlowSteps: {
    en: ['Data', '+ TCP/UDP Hdr → Segment/Datagram', '+ IP Hdr → Packet', 'Frame / Bits', '→ receive →', 'Application Data'],
    kn: ['ಡೇಟಾ', '+ TCP/UDP ಹೆಡರ್ → ಸೆಗ್ಮೆಂಟ್/ಡೇಟಾಗ್ರಾಮ್', '+ IP ಹೆಡರ್ → ಪ್ಯಾಕೆಟ್', 'ಫ್ರೇಮ್ / ಬಿಟ್‌ಗಳು', '→ ಸ್ವೀಕರಿಸಿ →', 'ಅಪ್ಲಿಕೇಶನ್ ಡೇಟಾ'],
  },

  // Mapping summary
  mappingSummary: {
    en: [
      'Application (TCP/IP) ≈ OSI L5–L7 (Session, Presentation, Application)',
      'Transport (TCP/IP) ≈ OSI L4 (Transport)',
      'Internet (TCP/IP) ≈ OSI L3 (Network)',
      'Network Access (TCP/IP) ≈ OSI L1–L2 (Physical, Data Link)',
    ],
    kn: [
      'ಅಪ್ಲಿಕೇಶನ್ (TCP/IP) ≈ OSI L5–L7 (ಸೆಷನ್, ಪ್ರೆಜೆಂಟೇಶನ್, ಅಪ್ಲಿಕೇಶನ್)',
      'ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ (TCP/IP) ≈ OSI L4 (ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್)',
      'ಇಂಟರ್ನೆಟ್ (TCP/IP) ≈ OSI L3 (ನೆಟ್‌ವರ್ಕ್)',
      'ನೆಟ್‌ವರ್ಕ್ ಆಕ್ಸೆಸ್ (TCP/IP) ≈ OSI L1–L2 (ಫಿಸಿಕಲ್, ಡೇಟಾ ಲಿಂಕ್)',
    ],
  },

  // Step description templates
  stepMediumWifi: { en: 'Wi-Fi radio waves', kn: 'ವೈ-ಫೈ ರೇಡಿಯೊ ತರಂಗಗಳು' },
  stepMediumFiber: { en: 'optical fiber', kn: 'ಆಪ್ಟಿಕಲ್ ಫೈಬರ್' },
  stepMediumCable: { en: 'the Ethernet cable', kn: 'ಇಥರ್ನೆಟ್ ಕೇಬಲ್' },

  stepSenderTitle: { en: 'Sender: L{n} {layer} adds {header}', kn: 'ಕಳುಹಿಸುವವರು: L{n} {layer} {header} ಸೇರಿಸುತ್ತದೆ' },
  stepSenderTitlePhysical: { en: 'Sender: L{n} {layer} converts to bits', kn: 'ಕಳುಹಿಸುವವರು: L{n} {layer} ಬಿಟ್‌ಗಳಿಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ' },
  stepSenderTitleApp: { en: 'Sender: L{n} {layer} creates {header}', kn: 'ಕಳುಹಿಸುವವರು: L{n} {layer} {header} ರಚಿಸುತ್ತದೆ' },
  stepReceiverTitle: { en: 'Receiver: L{n} {layer} removes {header}', kn: 'ಸ್ವೀಕರಿಸುವವರು: L{n} {layer} {header} ತೆಗೆಯುತ್ತದೆ' },
  stepReceiverTitlePhysical: { en: 'Receiver: L{n} {layer} recovers bits as a frame', kn: 'ಸ್ವೀಕರಿಸುವವರು: L{n} {layer} ಬಿಟ್‌ಗಳನ್ನು ಫ್ರೇಮ್ ಆಗಿ ಮರುಪಡೆಯುತ್ತದೆ' },
  stepReceiverTitleApp: { en: 'Receiver: L{n} {layer} delivers {header}', kn: 'ಸ್ವೀಕರಿಸುವವರು: L{n} {layer} {header} ವಿತರಿಸುತ್ತದೆ' },
  stepMediumTitle: { en: 'Bits travel across {medium}', kn: 'ಬಿಟ್‌ಗಳು {medium} ಮೂಲಕ ಪ್ರಯಾಣಿಸುತ್ತವೆ' },

  stepSenderBody: {
    en: "The sender's {layer} layer ({proto}) processes the data and prepends a {header}. This header carries addressing, control, and protocol-specific information needed by the receiver's matching layer. The result is a {dataUnit} passed down to layer {next}.",
    kn: "ಕಳುಹಿಸುವವರ {layer} ಪದರ ({proto}) ಡೇಟಾ ಪ್ರಕ್ರಿಯೆ ಮಾಡಿ {header} ಮುಂಭಾಗದಲ್ಲಿ ಸೇರಿಸುತ್ತದೆ. ಈ ಹೆಡರ್ ವಿಳಾಸ, ನಿಯಂತ್ರಣ, ಮತ್ತು ಪ್ರೋಟೋಕಾಲ್ ಮಾಹಿತಿ ಹೊಂದಿರುತ್ತದೆ. ಇದರ ಫಲಿತಾಂಶ {dataUnit} ಆಗಿ ಪದರ {next}ಕ್ಕೆ ಕಳುಹಿಸಲ್ಪಡುತ್ತದೆ.",
  },
  stepSenderBodyPhysical: {
    en: "The sender's Physical layer ({proto}) does not add a protocol header. It converts the frame into a stream of bits and drives those bits onto the medium as electrical, optical, or radio signals.",
    kn: "ಕಳುಹಿಸುವವರ ಫಿಸಿಕಲ್ ಪದರ ({proto}) ಪ್ರೋಟೋಕಾಲ್ ಹೆಡರ್ ಸೇರಿಸುವುದಿಲ್ಲ. ಅದು ಫ್ರೇಮ್ ಅನ್ನು ಬಿಟ್ ಸ್ಟ್ರೀಮ್ ಆಗಿ ಪರಿವರ್ತಿಸಿ ವಿದ್ಯುತ್, ಆಪ್ಟಿಕಲ್, ಅಥವಾ ರೇಡಿಯೊ ಸಿಗ್ನಲ್ ಆಗಿ ಮಾಧ್ಯಮಕ್ಕೆ ಕಳುಹಿಸುತ್ತದೆ.",
  },
  stepSenderBodyApp: {
    en: "The sender's Application layer ({proto}) creates the user data ({dataUnit}). In OSI teaching, this is the starting payload; lower layers then encapsulate it. In real TCP/IP stacks, presentation/session work often happens here or in libraries like TLS.",
    kn: "ಕಳುಹಿಸುವವರ ಅಪ್ಲಿಕೇಶನ್ ಪದರ ({proto}) ಬಳಕೆದಾರ ಡೇಟಾ ({dataUnit}) ರಚಿಸುತ್ತದೆ. OSI ಬೋಧನೆಯಲ್ಲಿ ಇದು ಪ್ರಾರಂಭಿಕ ಪೇಲೋಡ್; ಕೆಳಗಿನ ಪದರಗಳು ನಂತರ ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಟ್ ಮಾಡುತ್ತವೆ. ನಿಜವಾದ TCP/IP ನಲ್ಲಿ ಪ್ರೆಜೆಂಟೇಶನ್/ಸೆಷನ್ ಕೆಲಸ ಸಾಮಾನ್ಯವಾಗಿ ಇಲ್ಲಿ ಅಥವಾ TLS ನಂತಹ ಲೈಬ್ರರಿಗಳಲ್ಲಿ ನಡೆಯುತ್ತದೆ.",
  },
  stepReceiverBody: {
    en: "The receiver's {layer} layer ({proto}) reads the {header} to verify addressing and integrity, then strips it away. The remaining payload is passed up to layer {next} as a {dataUnit}.",
    kn: "ಸ್ವೀಕರಿಸುವವರ {layer} ಪದರ ({proto}) {header} ಓದಿ ವಿಳಾಸ ಮತ್ತು ಸಮಗ್ರತೆ ಪರಿಶೀಲಿಸಿ, ಅದನ್ನು ತೆಗೆಯುತ್ತದೆ. ಉಳಿದ ಪೇಲೋಡ್ {dataUnit} ಆಗಿ ಪದರ {next}ಕ್ಕೆ ಕಳುಹಿಸಲ್ಪಡುತ್ತದೆ.",
  },
  stepReceiverBodyPhysical: {
    en: "The receiver's Physical layer ({proto}) samples the incoming signals and reconstructs a bit stream. No protocol header is removed here — the bits are passed up so the Data Link layer can interpret them as a frame.",
    kn: "ಸ್ವೀಕರಿಸುವವರ ಫಿಸಿಕಲ್ ಪದರ ({proto}) ಬರುವ ಸಿಗ್ನಲ್‌ಗಳನ್ನು ಮಾದರಿ ಮಾಡಿ ಬಿಟ್ ಸ್ಟ್ರೀಮ್ ಮರುನಿರ್ಮಿಸುತ್ತದೆ. ಇಲ್ಲಿ ಪ್ರೋಟೋಕಾಲ್ ಹೆಡರ್ ತೆಗೆಯುವುದಿಲ್ಲ — ಬಿಟ್‌ಗಳನ್ನು ಡೇಟಾ ಲಿಂಕ್ ಪದರಕ್ಕೆ ಕಳುಹಿಸಿ ಫ್ರೇಮ್ ಆಗಿ ಅರ್ಥೈಸಲಾಗುತ್ತದೆ.",
  },
  stepReceiverBodyApp: {
    en: "The receiver's Application layer ({proto}) consumes the delivered {dataUnit}. Encapsulation is complete: the original payload is available to the user application.",
    kn: "ಸ್ವೀಕರಿಸುವವರ ಅಪ್ಲಿಕೇಶನ್ ಪದರ ({proto}) ವಿತರಿಸಿದ {dataUnit} ಬಳಸುತ್ತದೆ. ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಶನ್ ಪೂರ್ಣ: ಮೂಲ ಪೇಲೋಡ್ ಬಳಕೆದಾರ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಲಭ್ಯ.",
  },
  stepMediumBody: {
    en: "The fully encapsulated frame is now transmitted as a stream of raw bits across {medium}. During transmission, these bits are converted into physical signals — electrical pulses, light, or radio waves — and travel from the sender's NIC to the receiver's NIC.",
    kn: "ಸಂಪೂರ್ಣ ಎನ್‌ಕ್ಯಾಪ್ಸುಲೇಟ್ ಆದ ಫ್ರೇಮ್ ಈಗ ಕಚ್ಚಾ ಬಿಟ್‌ಗಳ ಸ್ಟ್ರೀಮ್ ಆಗಿ {medium} ಮೂಲಕ ರವಾನೆಯಾಗುತ್ತಿದೆ. ರವಾನೆಯಲ್ಲಿ ಈ ಬಿಟ್‌ಗಳು ಭೌತಿಕ ಸಿಗ್ನಲ್‌ಗಳಾಗಿ — ವಿದ್ಯುತ್ ಸ್ಪಂದನ, ಬೆಳಕು, ಅಥವಾ ರೇಡಿಯೊ ತರಂಗಗಳು — ಪರಿವರ್ತಿತವಾಗಿ ಕಳುಹಿಸುವವರ NICಯಿಂದ ಸ್ವೀಕರಿಸುವವರ NICಗೆ ಪ್ರಯಾಣಿಸುತ್ತವೆ.",
  },
  stepNextPhysical: { en: 'the physical medium', kn: 'ಭೌತಿಕ ಮಾಧ್ಯಮ' },
  stepNextApplication: { en: 'the application', kn: 'ಅಪ್ಲಿಕೇಶನ್' },
} as const;

type LangStr = { en: string; kn: string };
type LangArr = { en: string[]; kn: string[] };

export function t(key: keyof typeof translations, lang: Lang): string {
  const entry = translations[key];
  if (typeof entry === 'string') return entry;
  if (entry && typeof entry === 'object' && 'en' in entry && 'kn' in entry) {
    return (entry as LangStr)[lang];
  }
  return '';
}

export function tArr(key: keyof typeof translations, lang: Lang): readonly string[] {
  const entry = translations[key] as unknown;
  if (entry && typeof entry === 'object' && 'en' in entry && 'kn' in entry) {
    const arr = entry as LangArr;
    if (Array.isArray(arr.en)) return arr[lang];
  }
  return [];
}

export function tLayerName(layer: LayerNumber, lang: Lang): string {
  return translations.layers[layer].name[lang];
}

export function tLayerDesc(layer: LayerNumber, lang: Lang): string {
  return translations.layers[layer].description[lang];
}

export function tLayerResponsibilities(layer: LayerNumber, lang: Lang): string[] {
  return translations.layers[layer].responsibilities[lang];
}

export function tHeaderName(layer: LayerNumber, lang: Lang, transportProto?: string): string {
  if (layer === 4) {
    return transportProto === 'UDP' ? t('headerNameUdp', lang) : t('headerNameTcp', lang);
  }
  return translations.headerNames[layer][lang];
}

export function tDataUnitName(layer: LayerNumber, lang: Lang, transportProto?: string): string {
  if (layer === 4) {
    return transportProto === 'UDP' ? t('dataUnitDatagram', lang) : t('dataUnitSegment', lang);
  }
  return translations.dataUnitNames[layer][lang];
}

export function tTcpipName(name: string, lang: Lang): string {
  return translations.tcpipLayers[name]?.[lang] ?? name;
}

export function tTemplate(key: keyof typeof translations, lang: Lang, vars: Record<string, string>): string {
  let s = t(key, lang);
  for (const [k, v] of Object.entries(vars)) {
    s = s.replace(`{${k}}`, v);
  }
  return s;
}
