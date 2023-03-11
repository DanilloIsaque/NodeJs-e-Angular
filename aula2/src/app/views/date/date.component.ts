import { Component } from '@angular/core';

@Component({
  selector: 'app-date',//nome do atalho do componente
  //<app-date></app-date> isso seria como colocar todo o html e o q estiver dentro dessa tag, por exemplo
  templateUrl: './date.component.html',// nome do arquivo html desse componente
  styleUrls: ['./date.component.css']
})
export class DateComponent {

  //nao precisa declarar ,usar let ou var....
  data: Date =new Date();
}
