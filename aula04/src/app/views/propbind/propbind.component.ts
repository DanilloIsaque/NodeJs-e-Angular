import { Component } from '@angular/core';

@Component({
  selector: 'app-propbind',
  templateUrl: './propbind.component.html',
  styleUrls: ['./propbind.component.css']
})
export class PropbindComponent{
  pais="brasil"

  trocarPais(pais:string) {
    this.pais = pais;
  }
  pais2 = "alemanha";

  trocarPais2(){
    if(this.pais2 =='brasil'){
      this.pais2 = 'alemanha';
    }
    else{
      this.pais2='brasil';
    }
  }
}


