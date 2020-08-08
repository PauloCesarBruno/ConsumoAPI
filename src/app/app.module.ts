import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Adcionado para usar o FormsMudule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ListagemService } from './listagem.service';
import { HttpClientModule } from '@angular/common/http';

// Os Import´s Abaixo são para o PIPE de moéda Brasilera...
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule // Adcionado para usar o FormsMudule
  ],
  providers: [ ListagemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
