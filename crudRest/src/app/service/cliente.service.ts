import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) {

  }

  //gest
  listar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/cliente');
  }

  //post
  inserir(cliente:Cliente): Observable<Cliente>{//n é obrigatório
   return this.http.post<Cliente>('http://localhost:3000/cliente', cliente)

  }

  atualizar(cliente:Cliente){//chamar o id
   return  this.http.put<Cliente>(`http://localhost:3000/cliente/${cliente.id}`,cliente);//depois do id , é os dados atualizados do cliente
  }
  excluir(id:number):Observable<any>{ //any seria qualquer tipo

    return this.http.delete(`http://localhost:3000/cliente/${id}`);
  }
}
