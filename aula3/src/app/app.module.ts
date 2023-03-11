import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { ExercicioComponent } from './views/exercicio/exercicio.component';
import { MaiusculaComponent } from './views/maiuscula/maiuscula.component';
import { Ex03Component } from './views/ex03/ex03.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExercicioComponent,
    MaiusculaComponent,
    Ex03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
