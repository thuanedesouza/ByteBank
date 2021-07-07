import { Component } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',//seletor precisa começar com app-
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent {
  // criaando metodo para printar na tela quando submetemos novo valor na transferência

  transferir() {
    console.log('Solicitada nova transferência')
  }
}
