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
  numero=0;

  tipoContato='';

  valor1= 0;
  valor2= 0;

  resultado = 0;

  calcular(op:string){
    if(op=="+"){
      this.resultado= this.valor1 + this.valor2;
    }else if(op=="-"){
      this.resultado= this.valor1 - this.valor2;
    }else if(op=="*"){
      this.resultado= this.valor1 * this.valor2;
    }else{
      this.resultado= this.valor1 / this.valor2;
    }
  }
}
