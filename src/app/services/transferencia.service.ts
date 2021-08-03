import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'// onde o serviço é visto
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias (){
    return this.listaTransferencia;
  }
  adicionar(transferencia: any){
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }
  //por data ser uma regra de negocio do bytebank vamos criar ela aqui
  private hidratar(transferencia: any){//hidratar dados
    transferencia.data = new Date();
  }


  }

