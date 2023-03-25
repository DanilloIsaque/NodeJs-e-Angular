import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  valor ='visivel';
  mostrar(){
    if(this.valor=='visivel'){
      this.valor='invisivel';
    }else{
      this.valor='visivel'
    }
  }

  texto='';

}
