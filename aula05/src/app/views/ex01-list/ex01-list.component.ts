import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01-list',
  templateUrl: './ex01-list.component.html',
  styleUrls: ['./ex01-list.component.css']
})
export class Ex01ListComponent {
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
  this.trocarImg3='assets/yorkshire.jpeg';
    }

  }
}
