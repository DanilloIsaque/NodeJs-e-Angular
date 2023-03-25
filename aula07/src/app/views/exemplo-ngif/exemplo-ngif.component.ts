import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ngif',
  templateUrl: './exemplo-ngif.component.html',
  styleUrls: ['./exemplo-ngif.component.css']
})
export class ExemploNgifComponent {
  ativado = false;
  nome="";
  ligaDesliga(){

    this.ativado= !this.ativado; //oposto do false(ligado)

  }

}
