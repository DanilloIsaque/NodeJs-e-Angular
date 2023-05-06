//classe de negocio ou modelo

// export fica visivel para outras classes, tipo o public no java
export class Endereco{
 //cep ?: string  o angular e ts n deixa so  os dois pontos , pois pode ficar indefinido o valor, com "?", eu assumo o problema
  cep = '';
  logradouro = "";
  bairro = "";
  localidade="";
  uf="";

}
