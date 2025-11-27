export interface Protocol {
  id: string;
  name: string;
  version: string;
  type: ProtocolType;
  description?: string;
}

export enum ProtocolType {
  HL7 = 'HL7',
  ASTM = 'ASTM',
  CUSTOM = 'CUSTOM'
}
