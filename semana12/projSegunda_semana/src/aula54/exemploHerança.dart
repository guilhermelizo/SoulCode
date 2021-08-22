class Animal {
  String nome;

  Animal(this.nome);

  void comer() {
    print("Comi!");
  }
}

class Cachorro extends Animal {
  // Herança de Animal
  String comidaFavorita;
  //super() faz referência a sua classe pai, 'Animal' e ao atributo 'nome' pertencente a animal
  Cachorro(this.comidaFavorita, String nome) : super(nome);

  @override //A classe filho pode sobre-escrever o metodo da classe pai
  void comer() {
    print(nome);
    super.comer();
    print("Au Au comi...");
  }

  void latir() {
    print("Au au au");
  }
}

void main() {
  var cachorro = Cachorro('ração', 'Max');
  cachorro.comer();
}
