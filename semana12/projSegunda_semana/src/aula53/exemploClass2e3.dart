// Exemplo 02: Crie uma classe Carro com atributos:
//  - marca
//  - ano
//  - ligado
//  - quantidade de combustivel
// E com métodos:
//    - ligar
//    - desligar
//    - abastecer


class Carro{
  //Atributos
  String marca;
  int ano;
  bool ligado;
  double combustivel;
  
  //construtor
  Carro(this.marca, this.ano, this.ligado, this. combustivel);
  
  //métodos
  void ligar(){
    if (!ligado){
      ligado = true;
      print("O carro esta Desligando...");
    }
  }
  
  void desligar (){
    if (ligado){
      ligado = false;
      print("O carro esta Ligando...");
      
    }
  }
  
  void abastecer (){
    combustivel = 60;
  }
  
  void acelerar(){
    if(ligado && combustivel > 0);
    print("VRUMMMM...");
    combustivel -= 1;
  }
}

//3
void mostraCarro(Carro carro) {
  print('''
  Marca: ${carro.marca},
  Ano: ${carro.ano},
  quantidade Combustivel: ${carro.combustivel}
  ''');
}


void main(){
  var carro1 = Carro('Ferrari', 2009, false, 20);
  carro1.ligar();
  //carro1.desligar();
  //carro1.abastecer();
  print(carro1.combustivel);
  carro1.acelerar();
  print(carro1.combustivel);
  
  mostraCarro(carro1);
}

// Exemplo 03: Crie uma função que recebe um objeto do tipo Carro,
// por parâmetro, e mostra todas as informações dele.


