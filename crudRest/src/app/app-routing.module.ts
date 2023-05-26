import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './views/cliente/cliente.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  {path:'cliente',component:ClienteComponent },
  {path:'sobre',component:SobreComponent},
  //se tiver outra rota
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
