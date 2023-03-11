import { Component } from '@angular/core';

@Component({
  selector: 'app-maiuscula',
  templateUrl: './maiuscula.component.html',
  styleUrls: ['./maiuscula.component.css']
})
export class MaiusculaComponent {
  maiuscula( palavra: string){
      return palavra.toUpperCase();
  }
}
