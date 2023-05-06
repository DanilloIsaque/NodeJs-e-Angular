import { Component } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent {
cep = '';
//n aparece nada , só quando tiver algo
endereco?:Endereco = undefined;

constructor(private cepService:CepService){}//variavel:classe

consultarCep(){

this.cepService.obterEndereco(this.cep).subscribe(endereco=>{ //this.cep subscrive e ve se tem algo;
  // quando tiver um resposta no observable, ele retorna o q está dentro
  //aqui vai ser chamado quando o servidor responder
  this.endereco = endereco;
});//dentro das chaves é o corpo da funcao

}

}
