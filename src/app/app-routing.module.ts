import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { NovaTransferenciaComponent } from './app.nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';


export const routes: Routes = [
  //definir objetos de configuração, o array das rotas que estou configurando
  //definindo rota vazia para evitar erro
  {path:'', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent },
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
