import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component {

raca ='';

imagem(){
if (this.raca =='yorkshire') {
  this.raca="assets/yorkshire.jpeg"
} else if(this.raca=='pinscher') {
  this.raca="assets/pinscher.jpg"
}else if(this.raca=='viralata'){
  this.raca="assets/viralata.jpg"
}
}

cachorro='';

}
