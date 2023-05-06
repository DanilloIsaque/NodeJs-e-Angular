import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class CepService {
// http é o nome  da variavel
//com private , todas funções conseguem acessar a função
  constructor(private http:HttpClient) { } //injeção do http client; private n disponivel para outras classes

  obterEndereco(cep: string): Observable<Endereco> { // : indica o retorno; observable é o retorno
    //this.http.get('https://viacep.com.br/ws/'+cep+'/json/');
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);

  }
}
