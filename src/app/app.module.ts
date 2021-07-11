import { NovaTransferenciaComponent } from './app.nova-transferencia.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//exportando um modulo que é do angular

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
