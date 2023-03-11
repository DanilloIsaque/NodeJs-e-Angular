import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropbindComponent } from './views/propbind/propbind.component';
import { ExercicioComponent } from './views/exercicio/exercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    PropbindComponent,
    ExercicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
