export interface ExtendedFabricObject extends fabric.Object {
  id: string;
  __skipEmit?: boolean;
}

export interface SocketDetails {
  clientId: string;
}
export interface SerializedObjectData {
  id: string;
  type: string;
  [key: string]: any;
}
