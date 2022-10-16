import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonagemComponent } from './personagem/personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
