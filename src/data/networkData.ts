import type { LayerInfo, TcpIpLayer, Scenario, LayerNumber } from '@/types';

export const OSI_LAYERS: LayerInfo[] = [
  {
    number: 7,
    name: 'Application',
    shortName: 'App',
    description: 'Network services for end-user applications.',
    responsibilities: [
      'Provides network services directly to user applications',
      'Defines protocols for email, web, file transfer',
      'Handles resource sharing and remote access',
    ],
    protocols: ['HTTP', 'HTTPS', 'SMTP', 'FTP', 'DNS'],
    devices: ['Web browsers', 'Mail clients'],
    headerName: 'Application Data',
    dataUnitName: 'Data',
    color: '#ef4444',
  },
  {
    number: 6,
    name: 'Presentation',
    shortName: 'Pres',
    description: 'Translation, encryption, and compression of data.',
    responsibilities: [
      'Translates data between application and network formats',
      'Encrypts and decrypts data for secure transfer',
      'Compresses data to optimize transmission',
    ],
    protocols: ['TLS', 'SSL', 'JPEG', 'ASCII', 'MIME'],
    devices: ['Gateways', 'Encryption libraries'],
    headerName: 'Presentation Header',
    dataUnitName: 'Data',
    color: '#f97316',
  },
  {
    number: 5,
    name: 'Session',
    shortName: 'Sess',
    description: 'Manages sessions between applications.',
    responsibilities: [
      'Opens, manages, and terminates sessions',
      'Handles dialog control and synchronization',
      'Manages checkpoints and recovery',
    ],
    protocols: ['NetBIOS', 'RPC', 'PPTP', 'Sockets'],
    devices: ['Session managers'],
    headerName: 'Session Header',
    dataUnitName: 'Data',
    color: '#eab308',
  },
  {
    number: 4,
    name: 'Transport',
    shortName: 'Trans',
    description: 'Reliable end-to-end delivery and flow control.',
    responsibilities: [
      'Segments data into units and reassembles them',
      'Provides reliable, ordered delivery (TCP) or fast (UDP)',
      'Handles error control and flow control',
    ],
    protocols: ['TCP', 'UDP', 'QUIC'],
    devices: ['Firewalls (some)', 'Load balancers'],
    headerName: 'TCP Header',
    dataUnitName: 'Segment',
    color: '#22c55e',
  },
  {
    number: 3,
    name: 'Network',
    shortName: 'Net',
    description: 'Routing data between networks using logical addresses.',
    responsibilities: [
      'Logical addressing (IP addresses)',
      'Routes packets between networks',
      'Handles fragmentation and reassembly',
    ],
    protocols: ['IP (IPv4/IPv6)', 'ICMP', 'OSPF', 'BGP'],
    devices: ['Routers', 'Layer-3 switches'],
    headerName: 'IP Header',
    dataUnitName: 'Packet',
    color: '#06b6d4',
  },
  {
    number: 2,
    name: 'Data Link',
    shortName: 'Link',
    description: 'Node-to-node delivery over a physical link.',
    responsibilities: [
      'Frames data with MAC addressing',
      'Error detection (CRC) and correction',
      'Media Access Control (MAC)',
    ],
    protocols: ['Ethernet', 'Wi-Fi (802.11)', 'PPP', 'ARP'],
    devices: ['Switches', 'Bridges', 'NICs'],
    headerName: 'Ethernet Header & Trailer',
    dataUnitName: 'Frame',
    color: '#3b82f6',
  },
  {
    number: 1,
    name: 'Physical',
    shortName: 'Phys',
    description: 'Transmission of raw bits over a physical medium.',
    responsibilities: [
      'Transmits raw bit stream over physical media',
      'Defines voltage, timing, and cable specs',
      'Converts bits to signals (electrical, optical, radio)',
    ],
    protocols: ['Ethernet PHY', 'Wi-Fi PHY', 'Bluetooth radio'],
    devices: ['Hubs', 'Repeaters', 'Cables', 'Fiber', 'NICs'],
    headerName: 'Bits (Signal)',
    dataUnitName: 'Bits',
    color: '#8b5cf6',
  },
];

export const TCPIP_LAYERS: TcpIpLayer[] = [
  {
    name: 'Application',
    osiLayers: [7, 6, 5],
    description: 'Merges OSI Application, Presentation, and Session layers.',
    protocols: ['HTTP', 'SMTP', 'FTP', 'DNS', 'TLS'],
    headerName: 'Application Data',
    dataUnitName: 'Data',
    color: '#ef4444',
  },
  {
    name: 'Transport',
    osiLayers: [4],
    description: 'Same as OSI Transport — end-to-end delivery.',
    protocols: ['TCP', 'UDP', 'QUIC'],
    headerName: 'TCP Header',
    dataUnitName: 'Segment',
    color: '#22c55e',
  },
  {
    name: 'Internet',
    osiLayers: [3],
    description: 'Same as OSI Network — routing and IP addressing.',
    protocols: ['IP', 'ICMP'],
    headerName: 'IP Header',
    dataUnitName: 'Packet',
    color: '#06b6d4',
  },
  {
    name: 'Network Access',
    osiLayers: [2, 1],
    description: 'Merges OSI Data Link and Physical layers.',
    protocols: ['Ethernet', 'Wi-Fi'],
    headerName: 'Frame Header & Trailer',
    dataUnitName: 'Frame / Bits',
    color: '#3b82f6',
  },
];

export const SCENARIOS: Scenario[] = [
  {
    id: 'email',
    label: 'Sending an Email (SMTP)',
    description: 'A mail client sends a message via SMTP over TCP/IP.',
    dataLabel: 'Email',
    transportType: 'cable',
    layerProtocols: {
      7: { name: 'SMTP' },
      6: { name: 'MIME' },
      5: { name: 'TCP Session' },
      4: { name: 'TCP' },
      3: { name: 'IP' },
      2: { name: 'Ethernet' },
      1: { name: 'Ethernet PHY' },
    },
  },
  {
    id: 'web',
    label: 'Loading a Webpage (HTTPS)',
    description: 'A browser requests a page over HTTP protected by TLS.',
    dataLabel: 'Web Request',
    transportType: 'fiber',
    layerProtocols: {
      7: { name: 'HTTP' },
      6: { name: 'TLS' },
      5: { name: 'TCP Session' },
      4: { name: 'TCP' },
      3: { name: 'IP' },
      2: { name: 'Ethernet' },
      1: { name: 'Optical Fiber' },
    },
  },
  {
    id: 'video',
    label: 'Streaming a Video',
    description: 'A media player streams video chunks over UDP.',
    dataLabel: 'Video Chunk',
    transportType: 'wifi',
    layerProtocols: {
      7: { name: 'HTTP / DASH' },
      6: { name: 'Compression' },
      5: { name: 'RTP Session' },
      4: { name: 'UDP' },
      3: { name: 'IP' },
      2: { name: 'Wi-Fi 802.11' },
      1: { name: 'Wi-Fi Radio' },
    },
  },
];

export const OSI_LAYER_MAP: Record<LayerNumber, LayerInfo> = OSI_LAYERS.reduce(
  (acc, l) => {
    acc[l.number] = l;
    return acc;
  },
  {} as Record<LayerNumber, LayerInfo>,
);

export function getLayer(n: LayerNumber): LayerInfo {
  return OSI_LAYER_MAP[n];
}
