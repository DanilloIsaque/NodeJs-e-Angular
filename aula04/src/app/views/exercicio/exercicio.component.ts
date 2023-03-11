import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.css']
})
export class ExercicioComponent {
  imagem='assets/blood.jpg';

  img='img';
  img2='img2';
  img3='img3';
  imgN='assets/blood3.1.jpg';
  trocarImg(){
    if(this.imagem =='assets/blood3.1.jpg'){
      this.imagem = 'assets/blood3.jpg';
    }
    else{
      this.imagem='assets/blood3.1.jpg';
    }
  }
}
