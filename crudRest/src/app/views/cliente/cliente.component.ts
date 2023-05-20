import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  listaClientes :Cliente[]=[];

  cliente= new Cliente();
  estaEditando=false;

  constructor(private clienteService:ClienteService){

  }
  ngOnInit(): void {
    this.listar();
  }


listar(){
  //não trava o codigo, continua executando a linha de baixo
                                  //colocar o parametro
  this.clienteService.listar().subscribe(clientes=>{
    this.listaClientes= clientes;
  });

}

inserir(){
  this.clienteService.inserir(this.cliente).subscribe(cliente=>{
    window.alert("Cadastrado com sucesso!");
    this.listar(); // quando inserir o cliente, ele atualiza de novo
  })
}

remover(id:number){
  this.clienteService.excluir(id).subscribe(()=>{//n tem parametro
    window.alert("Excluido com sucesso!");
    this.listar(); // quando inserir o cliente, ele atualiza de novo
  });
}
atualizar(){
  this.clienteService.atualizar(this.cliente).subscribe(cliente=>{
    window.alert("Atualizado com sucesso!");
    this.listar(); // quando inserir o cliente, ele atualiza de novo

  })
}

salvar(){//chamar ou de cadastro ou de atualizacão
  if(this.estaEditando){
    this.atualizar();
  }else{
    this.inserir();
  }
}

selecionar(cliente:Cliente){
  this.cliente=cliente;
  this.estaEditando=true;
  window.alert("Editar");
}

cancelar(){
  // volta para cadastrar
  window.alert("CADASTRO");
  this.estaEditando=false;
  this.cliente= new Cliente();//apaga os campos
}

}
