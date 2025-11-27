import { MedicalSegment } from './Segment';
import { TransportConfig, TransportType } from './Transport';

export interface Device {
  id: string;
  name: string;
  manufacturerId: string;
  segment: MedicalSegment;
  supportedProtocols: string[];
  transports: TransportConfig[];
  activeTransport?: TransportType;
  isActive: boolean;
  configuration?: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
}
