class Pessoa {
  String nome;
  int idade;
  double peso;
  double altura;

  Pessoa(this.nome, this.idade, this.peso, this.altura);

  void apresentar() {
    print("Olá, meu nome é $nome e tenho $idade anos");
  }
}

void apresentarForaDaClasse(Pessoa p) {
  print("Olá, meu nome é ${p.nome} e tenho ${p.idade} anos");
}

double imc(Pessoa pessoa) {
  return pessoa.peso / (pessoa.altura * pessoa.altura);
}

void main() {
  var pessoa1 = Pessoa('João', 19, 56.0, 1.79); // instanciar = criar objeto
  var pessoa2 = Pessoa('Carlos', 30, 60.0, 1.8);

  pessoa1.apresentar();
  pessoa2.apresentar();

  // print(imc(pessoa));
  // print(imc(pessoa2));

  // print(pessoa.nome);
  // print(pessoa.idade);
  // print(pessoa.peso);
  // print(pessoa.altura);
}
