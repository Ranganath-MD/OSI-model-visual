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
  scenarioVideoDesc: { en: 'A media player streams video chunks over UDP.', kn: 'ಮೀಡಿಯಾ ಪ್ಲೇಯರ್ UDP ಮೂಲಕ ವೀಡಿಯೊ ಭಾಗಗಳನ್ನು ಸ್ಟ್ರೀಮ್ ಮಾಡುತ್ತದೆ.' },

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
    en: 'The TCP/IP model condenses the 7 OSI layers into 4 practical layers. Toggle to see the mapping.',
    kn: 'TCP/IP ಮಾದರಿ 7 OSI ಪದರಗಳನ್ನು 4 ಪ್ರಾಯೋಗಿಕ ಪದರಗಳಾಗಿ ಸಂಕ್ಷಿಪ್ತಗೊಳಿಸುತ್ತದೆ. ಮ್ಯಾಪಿಂಗ್ ನೋಡಲು ಟಾಗಲ್ ಮಾಡಿ.',
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
        en: ['Translates data between application and network formats', 'Encrypts and decrypts data for secure transfer', 'Compresses data to optimize transmission'],
        kn: ['ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ಸ್ವರೂಪಗಳ ನಡುವೆ ಡೇಟಾ ಅನುವಾದ ಮಾಡುತ್ತದೆ', 'ಸುರಕ್ಷಿತ ವರ್ಗಾವಣೆಗಾಗಿ ಡೇಟಾ ಎನ್‌ಕ್ರಿಪ್ಟ್/ಡಿಕ್ರಿಪ್ಟ್ ಮಾಡುತ್ತದೆ', 'ರವಾನೆ ಅನುಕೂಲಕ್ಕಾಗಿ ಡೇಟಾ ಸಂಕ್ಷಿಪ್ತಗೊಳಿಸುತ್ತದೆ'],
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
      description: { en: 'Reliable end-to-end delivery and flow control.', kn: 'ವಿಶ್ವಾಸಾರ್ಹ ಎಂಡ್-ಟು-ಎಂಡ್ ವಿತರಣೆ ಮತ್ತು ಹರಿವು ನಿಯಂತ್ರಣ.' },
      responsibilities: {
        en: ['Segments data into units and reassembles them', 'Provides reliable, ordered delivery (TCP) or fast (UDP)', 'Handles error control and flow control'],
        kn: ['ಡೇಟಾ ಭಾಗಗಳಾಗಿ ವಿಭಜಿಸಿ ಮರುಸೇರಿಸುತ್ತದೆ', 'ವಿಶ್ವಾಸಾರ್ಹ, ಕ್ರಮಬದ್ಧ ವಿತರಣೆ (TCP) ಅಥವಾ ವೇಗ (UDP)', 'ದೋಷ ನಿಯಂತ್ರಣ ಮತ್ತು ಹರಿವು ನಿಯಂತ್ರಣ ನಿರ್ವಹಿಸುತ್ತದೆ'],
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
        en: ['Frames data with MAC addressing', 'Error detection (CRC) and correction', 'Media Access Control (MAC)'],
        kn: ['MAC ವಿಳಾಸದೊಂದಿಗೆ ಡೇಟಾ ಫ್ರೇಮ್ ಮಾಡುತ್ತದೆ', 'ದೋಷ ಪತ್ತೆ (CRC) ಮತ್ತು ಸರಿಪಡಿಸುವಿಕೆ', 'ಮೀಡಿಯಾ ಆಕ್ಸೆಸ್ ಕಂಟ್ರೋಲ್ (MAC)'],
      },
    },
    1: {
      name: { en: 'Physical', kn: 'ಫಿಸಿಕಲ್' },
      description: { en: 'Transmission of raw bits over a physical medium.', kn: 'ಭೌತಿಕ ಮಾಧ್ಯಮದ ಮೇಲೆ ಕಚ್ಚಾ ಬಿಟ್‌ಗಳ ರವಾನೆ.' },
      responsibilities: {
        en: ['Transmits raw bit stream over physical media', 'Defines voltage, timing, and cable specs', 'Converts bits to signals (electrical, optical, radio)'],
        kn: ['ಭೌತಿಕ ಮಾಧ್ಯಮದ ಮೇಲೆ ಕಚ್ಚಾ ಬಿಟ್ ಸ್ಟ್ರೀಮ್ ರವಾನಿಸುತ್ತದೆ', 'ವೋಲ್ಟೇಜ್, ಟೈಮಿಂಗ್, ಕೇಬಲ್ ಸ್ಪೆಕ್ ನಿರ್ಧರಿಸುತ್ತದೆ', 'ಬಿಟ್‌ಗಳನ್ನು ಸಿಗ್ನಲ್ ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ (ವಿದ್ಯುತ್, ಆಪ್ಟಿಕಲ್, ರೇಡಿಯೊ)'],
      },
    },
  } as Record<LayerNumber, {
    name: LangStr;
    description: LangStr;
    responsibilities: LangArr;
  }>,

  // Header names for layers (used in step descriptions)
  headerNames: {
    7: { en: 'Application Data', kn: 'ಅಪ್ಲಿಕೇಶನ್ ಡೇಟಾ' },
    6: { en: 'Presentation Header', kn: 'ಪ್ರೆಜೆಂಟೇಶನ್ ಹೆಡರ್' },
    5: { en: 'Session Header', kn: 'ಸೆಷನ್ ಹೆಡರ್' },
    4: { en: 'TCP Header', kn: 'TCP ಹೆಡರ್' },
    3: { en: 'IP Header', kn: 'IP ಹೆಡರ್' },
    2: { en: 'Ethernet Header & Trailer', kn: 'ಇಥರ್ನೆಟ್ ಹೆಡರ್ ಮತ್ತು ಟ್ರೈಲರ್' },
    1: { en: 'Bits (Signal)', kn: 'ಬಿಟ್‌ಗಳು (ಸಿಗ್ನಲ್)' },
  } as Record<LayerNumber, LangStr>,

  // Data unit names
  dataUnitNames: {
    7: { en: 'Data', kn: 'ಡೇಟಾ' },
    6: { en: 'Data', kn: 'ಡೇಟಾ' },
    5: { en: 'Data', kn: 'ಡೇಟಾ' },
    4: { en: 'Segment', kn: 'ಸೆಗ್ಮೆಂಟ್' },
    3: { en: 'Packet', kn: 'ಪ್ಯಾಕೆಟ್' },
    2: { en: 'Frame', kn: 'ಫ್ರೇಮ್' },
    1: { en: 'Bits', kn: 'ಬಿಟ್‌ಗಳು' },
  } as Record<LayerNumber, LangStr>,

  // TCP/IP layer names
  tcpipLayers: {
    Application: { en: 'Application', kn: 'ಅಪ್ಲಿಕೇಶನ್' },
    Transport: { en: 'Transport', kn: 'ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್' },
    Internet: { en: 'Internet', kn: 'ಇಂಟರ್ನೆಟ್' },
    'Network Access': { en: 'Network Access', kn: 'ನೆಟ್‌ವರ್ಕ್ ಆಕ್ಸೆಸ್' },
  } as Record<string, LangStr>,

  // Encapsulation explainer stages
  stages: {
    en: [
      'Application Data', '+ Presentation Hdr', '+ Session Hdr',
      'Segment (+ TCP Hdr)', 'Packet (+ IP Hdr)', 'Frame (+ Ethernet Hdr/Trl)',
      'Bits (Physical signal)', 'Frame (received)', 'Packet (− Ethernet)',
      'Segment (− IP)', '− Session Hdr', '− Presentation Hdr',
      'Application Data (− App Hdr)',
    ],
    kn: [
      'ಅಪ್ಲಿಕೇಶನ್ ಡೇಟಾ', '+ ಪ್ರೆಜೆಂಟೇಶನ್ ಹೆಡರ್', '+ ಸೆಷನ್ ಹೆಡರ್',
      'ಸೆಗ್ಮೆಂಟ್ (+ TCP ಹೆಡರ್)', 'ಪ್ಯಾಕೆಟ್ (+ IP ಹೆಡರ್)', 'ಫ್ರೇಮ್ (+ ಇಥರ್ನೆಟ್ ಹೆಡರ್/ಟ್ರೈಲರ್)',
      'ಬಿಟ್‌ಗಳು (ಭೌತಿಕ ಸಿಗ್ನಲ್)', 'ಫ್ರೇಮ್ (ಸ್ವೀಕೃತ)', 'ಪ್ಯಾಕೆಟ್ (− ಇಥರ್ನೆಟ್)',
      'ಸೆಗ್ಮೆಂಟ್ (− IP)', '− ಸೆಷನ್ ಹೆಡರ್', '− ಪ್ರೆಜೆಂಟೇಶನ್ ಹೆಡರ್',
      'ಅಪ್ಲಿಕೇಶನ್ ಡೇಟಾ (− ಅಪ್ಲಿಕೇಶನ್ ಹೆಡರ್)',
    ],
  },

  // TCP flow steps
  tcpFlowSteps: {
    en: ['Data', '+ TCP Hdr → Segment', '+ IP Hdr → Packet', 'Frame / Bits', '→ receive →', 'Application Data'],
    kn: ['ಡೇಟಾ', '+ TCP ಹೆಡರ್ → ಸೆಗ್ಮೆಂಟ್', '+ IP ಹೆಡರ್ → ಪ್ಯಾಕೆಟ್', 'ಫ್ರೇಮ್ / ಬಿಟ್‌ಗಳು', '→ ಸ್ವೀಕರಿಸಿ →', 'ಅಪ್ಲಿಕೇಶನ್ ಡೇಟಾ'],
  },

  // Mapping summary
  mappingSummary: {
    en: [
      'Application (TCP/IP) = OSI L5–L7 (Session, Presentation, Application)',
      'Transport (TCP/IP) = OSI L4 (Transport) — identical',
      'Internet (TCP/IP) = OSI L3 (Network) — identical',
      'Network Access (TCP/IP) = OSI L1–L2 (Physical, Data Link)',
    ],
    kn: [
      'ಅಪ್ಲಿಕೇಶನ್ (TCP/IP) = OSI L5–L7 (ಸೆಷನ್, ಪ್ರೆಜೆಂಟೇಶನ್, ಅಪ್ಲಿಕೇಶನ್)',
      'ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್ (TCP/IP) = OSI L4 (ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟ್) — ಒಂದೇ',
      'ಇಂಟರ್ನೆಟ್ (TCP/IP) = OSI L3 (ನೆಟ್‌ವರ್ಕ್) — ಒಂದೇ',
      'ನೆಟ್‌ವರ್ಕ್ ಆಕ್ಸೆಸ್ (TCP/IP) = OSI L1–L2 (ಫಿಸಿಕಲ್, ಡೇಟಾ ಲಿಂಕ್)',
    ],
  },

  // Step description templates
  stepMediumWifi: { en: 'Wi-Fi radio waves', kn: 'ವೈ-ಫೈ ರೇಡಿಯೊ ತರಂಗಗಳು' },
  stepMediumFiber: { en: 'optical fiber', kn: 'ಆಪ್ಟಿಕಲ್ ಫೈಬರ್' },
  stepMediumCable: { en: 'the Ethernet cable', kn: 'ಇಥರ್ನೆಟ್ ಕೇಬಲ್' },

  stepSenderTitle: { en: 'Sender: L{n} {layer} adds {header}', kn: 'ಕಳುಹಿಸುವವರು: L{n} {layer} {header} ಸೇರಿಸುತ್ತದೆ' },
  stepReceiverTitle: { en: 'Receiver: L{n} {layer} removes {header}', kn: 'ಸ್ವೀಕರಿಸುವವರು: L{n} {layer} {header} ತೆಗೆಯುತ್ತದೆ' },
  stepMediumTitle: { en: 'Bits travel across {medium}', kn: 'ಬಿಟ್‌ಗಳು {medium} ಮೂಲಕ ಪ್ರಯಾಣಿಸುತ್ತವೆ' },

  stepSenderBody: {
    en: "The sender's {layer} layer ({proto}) processes the data and prepends a {header}. This header carries addressing, control, and protocol-specific information needed by the receiver's matching layer. The result is a {dataUnit} passed down to layer {next}.",
    kn: "ಕಳುಹಿಸುವವರ {layer} ಪದರ ({proto}) ಡೇಟಾ ಪ್ರಕ್ರಿಯೆ ಮಾಡಿ {header} ಮುಂಭಾಗದಲ್ಲಿ ಸೇರಿಸುತ್ತದೆ. ಈ ಹೆಡರ್ ವಿಳಾಸ, ನಿಯಂತ್ರಣ, ಮತ್ತು ಪ್ರೋಟೋಕಾಲ್ ಮಾಹಿತಿ ಹೊಂದಿರುತ್ತದೆ. ಇದರ ಫಲಿತಾಂಶ {dataUnit} ಆಗಿ ಪದರ {next}ಕ್ಕೆ ಕಳುಹಿಸಲ್ಪಡುತ್ತದೆ.",
  },
  stepReceiverBody: {
    en: "The receiver's {layer} layer ({proto}) reads the {header} to verify addressing and integrity, then strips it away. The remaining payload is passed up to layer {next} as a {dataUnit}.",
    kn: "ಸ್ವೀಕರಿಸುವವರ {layer} ಪದರ ({proto}) {header} ಓದಿ ವಿಳಾಸ ಮತ್ತು ಸಮಗ್ರತೆ ಪರಿಶೀಲಿಸಿ, ಅದನ್ನು ತೆಗೆಯುತ್ತದೆ. ಉಳಿದ ಪೇಲೋಡ್ {dataUnit} ಆಗಿ ಪದರ {next}ಕ್ಕೆ ಕಳುಹಿಸಲ್ಪಡುತ್ತದೆ.",
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
  const entry = translations[key];
  if (entry && typeof entry === 'object' && 'en' in entry && 'kn' in entry && Array.isArray((entry as LangArr).en)) {
    return (entry as LangArr)[lang];
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

export function tHeaderName(layer: LayerNumber, lang: Lang): string {
  return translations.headerNames[layer][lang];
}

export function tDataUnitName(layer: LayerNumber, lang: Lang): string {
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
