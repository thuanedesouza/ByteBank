

  export interface Transferencia {
      id: string;
      valor: string;
      destino: string;
      data: Date;
  }

  export interface RootObject {
      transferencias: Transferencia[];
  }
