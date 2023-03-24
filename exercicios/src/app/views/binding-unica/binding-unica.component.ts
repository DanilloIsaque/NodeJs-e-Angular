import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-unica',
  templateUrl: './binding-unica.component.html',
  styleUrls: ['./binding-unica.component.css']
})
export class BindingUnicaComponent {
  musica='Unsainted';
  album='We Are Not Your Kind';
  interprete='slipknot';

  soma(n1:number,n2:number){
    return n1+n2;
  }

  classeCss='vermelho';

  mudarCor(){
    if(this.classeCss=='vermelho'){
      this.classeCss ='azul';
    }else{
      this.classeCss = 'vermelho';
    }
  }

  trocarImg1='invisivel';
  trocarImg2='invisivel';
  trocarImg3='invisivel';

  trocarImg(img:number){
    if(img==1){
  this.trocarImg1='assets/pinscher.jpg';
  this.trocarImg2='invisivel';
  this.trocarImg3='invisivel';
    }else if(img==2){
      this.trocarImg1='invisivel';
  this.trocarImg2='assets/caramelo.jpg';
  this.trocarImg3='invisivel';
    }else{
      this.trocarImg1='invisivel';
  this.trocarImg2='invisivel';
  this.trocarImg3='assets/yorkshire.jpg';
    }
  }

  nome(){
    var valor = prompt("qual o seu nome");

  }

texto='isso é uma div';
  troca(){

  }

  classeCss2 = 'visivel';

  corDiv(num:number){
    if(num==1){
      this.classeCss2 ='trocaverm';
    }else if(num==2){
      this.classeCss2 = 'trocaverd';
    }else{
      this.classeCss2='trocaazul';
    }
   }

}
