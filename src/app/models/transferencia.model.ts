

  export interface Transferencia {
      id?: number|string;
      valor: string;
      destino: string;
      data?: Date;
  }

  export interface RootObject {
      Transferencias: Transferencia[];
  }



