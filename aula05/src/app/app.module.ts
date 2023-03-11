import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { Ex04Component } from './views/ex04/ex04.component';
import { Ex01ListComponent } from './views/ex01-list/ex01-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex03Component,
    Ex04Component,
    Ex01ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
