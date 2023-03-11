import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component {
 jogador ='';

 escolherJogador(NomeJogador:string){
  this.jogador=NomeJogador;                 //chamar a variavel q está fora da função

 }
}
