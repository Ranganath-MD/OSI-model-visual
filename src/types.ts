export type LayerNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Direction = 'down' | 'up';

export type ModelType = 'osi' | 'tcpip';

export interface Protocol {
  name: string;
  description: string;
}

export interface LayerInfo {
  number: LayerNumber;
  name: string;
  shortName: string;
  description: string;
  responsibilities: string[];
  protocols: string[];
  devices: string[];
  headerName: string; // e.g. "TCP Header"
  dataUnitName: string; // e.g. "Segment"
  color: string; // tailwind-ish hex for accents
}

export interface TcpIpLayer {
  name: string;
  osiLayers: LayerNumber[];
  description: string;
  protocols: string[];
  headerName: string;
  dataUnitName: string;
  color: string;
}

export interface Scenario {
  id: string;
  label: string;
  description: string;
  dataLabel: string; // e.g. "Email"
  layerProtocols: Partial<Record<LayerNumber, { name: string; note?: string }>>;
  transportType: 'cable' | 'fiber' | 'wifi';
}

export type Side = 'sender' | 'receiver';

export type Phase =
  | { kind: 'sender'; layer: LayerNumber }
  | { kind: 'medium' }
  | { kind: 'receiver'; layer: LayerNumber };
