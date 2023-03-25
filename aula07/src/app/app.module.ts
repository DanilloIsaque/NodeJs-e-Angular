import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { ExerciciosComponent } from './views/exercicios/exercicios.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgifComponent,
    ExerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule// toda vez q usar binding duas vias , tem q chamar aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
