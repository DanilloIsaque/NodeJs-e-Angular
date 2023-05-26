import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ClienteComponent } from './views/cliente/cliente.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';//toolbar pego no angular material em api
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule//toolbar pego no angular material em api
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
