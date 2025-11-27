export enum TransportType {
  SERIAL = 'SERIAL',
  TCP_IP = 'TCP_IP',
  FILE = 'FILE'
}

export enum ConnectionMode {
  CLIENT = 'CLIENT',  // Equipamento conecta-se ao servidor LIS
  SERVER = 'SERVER'   // Equipamento aguarda conexões (LIS conecta-se a ele)
}

export interface TransportConfig {
  type: TransportType;
  enabled: boolean;
  timeout?: number;
  
  serial?: SerialConfig;
  tcpip?: TcpIpConfig;
  file?: FileConfig;
}

export interface SerialConfig {
  port: string;
  baudRate: number;
  dataBits?: number;
  stopBits?: number;
  parity?: 'none' | 'even' | 'odd';
  flowControl?: boolean;
}

export interface TcpIpConfig {
  host: string;
  port: number;
  mode: ConnectionMode;  // CLIENT ou SERVER
  protocol?: 'tcp' | 'udp';
  keepAlive?: boolean;
  reconnectInterval?: number;
}

export interface FileConfig {
  inputPath: string;
  outputPath?: string;
  watchMode?: boolean;
  pollingInterval?: number;
  filePattern?: string;
  deleteAfterRead?: boolean;
}
