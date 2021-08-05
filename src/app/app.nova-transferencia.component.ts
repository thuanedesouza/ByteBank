import { Router } from '@angular/router';
import { Transferencia } from './models/transferencia.model';
import { TransferenciaService } from './services/transferencia.service';
import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',//seletor precisa começar com app-
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent {

   //emissor de evento
   @Output() aoTransferir = new EventEmitter<any>();


  // criaando metodo para printar na tela quando submetemos novo valor na transferência
  valor:number; //varipável do tipo number.
  destino: number;


constructor(private service: TransferenciaService, private router: Router){}



  transferir() {
    console.log('Solicitada nova transferência')
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

   // this.aoTransferir.emit(valorEmitir);//esse valor vai pra variável $event que tá no .html
   // agora ao transferir ele vai adicionar no server:

   this.service.adicionar(valorEmitir).subscribe(resultado =>{
     console.log(resultado);
     this.limparCampos();

     this.router.navigateByUrl('extrato');
       }, error => console.error(error));

    //this.limparCampos(); foi pra dentro do service pra que em caso de erro ele faça diferente
  }

  limparCampos(){
    this.valor = 0;
    this.destino =0;
  }
}
