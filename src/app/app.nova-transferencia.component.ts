import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',//seletor precisa começar com app-
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent {
  // criaando metodo para printar na tela quando submetemos novo valor na transferência
  valor:number; //varipável do tipo number.
  destino: number;

  @Output() aoTransferir = new EventEmitter<any>();


  transferir() {
    console.log('Solicitada nova transferência')
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);//esse valo vai pra variável $event que tá no .html
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino =0;
  }
}
