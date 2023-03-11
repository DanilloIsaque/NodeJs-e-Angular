import { Component } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component {
  classeDiv1='invisivel';
  classeDiv2='invisivel';
  classeDiv3='invisivel';

 trocarAba(aba:number) {
  if(aba==1) {
    this.classeDiv1='visivel';
    this.classeDiv2='invisivel';
    this.classeDiv3='invisivel';

  }  else if(aba==2){
    this.classeDiv1='invisivel';
    this.classeDiv2='visivel';
    this.classeDiv3='invisivel';
  }else{
    this.classeDiv1='invisivel';
    this.classeDiv2='invisivel';
    this.classeDiv3='visivel';
  }
  }
}
