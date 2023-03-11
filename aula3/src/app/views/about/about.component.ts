import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //declarar propriedade/atributo, como uma variavel global SÓ para o componente
  nome: string='Danillo';  //tem q informar o tipo dela em typescript, porém o angular n obriga
  //pq ele deduz qual o tipo
  semestre ='3º semestre';

  imagem='assets/imagem.jpg';

  somar(valor1:number, valor2:number){ //parametros tbm precisam de tipo
    return valor1 + valor2;
  }

  subtrair(){
    return 5-2;
  }
}
