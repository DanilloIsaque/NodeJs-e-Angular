import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:HttpClient) { } //injeção do http cliente; private n disponivel para outras classes

  obterEndereco(cep: string){
    //this.http.get('https://viacep.com.br/ws/'+cep+'/json/');
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`);//consigo interpolar a variavel com esse simbolo
  }
}
