import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'// onde o serviço é visto
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {//provê metodos de uma api rest
    this.listaTransferencia = [];
  }

  get transferencias (){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{//fica escutando novas transferências
    return this.httpClient.get<Transferencia[]>(this.url)
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

