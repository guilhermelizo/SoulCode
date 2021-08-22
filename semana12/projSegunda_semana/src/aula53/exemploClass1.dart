// Exemplo 01: Crie uma classe Pet com atributos:
//      - nome
//      - idade
//      - peso
// E com métodos:
//      - comer()

class Pet {
  //Atributos
  String nome;
  int idade;
  double peso;

  //construtor
  Pet(this.nome, this.idade, this.peso);

  //métodos
  void comer(String alimento, {int quantidade = 1}) {
    print("comi $alimento! $quantidade X");
  }
}

void main() {
  var pet1 = Pet('fred', 2, 4.0);

  pet1.comer('Peixe', quantidade: 100);
}
