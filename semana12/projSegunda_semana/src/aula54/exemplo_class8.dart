// Exemplo 08
// Crie uma classe Pessoa: atributos -> nome, idade
// Crie uma classe Aluno que herda de Pessoa: atributos -> media, ano
// Crie uma classe Professor que herda de Pessoa: atributos -> disciplina(String) e ano

class Pessoa {
  String nome;
  int idade;

  Pessoa(this.nome, this.idade);

  void apresentar() {
    print('Oi, meu nome é $nome, e tenho $idade anos');
  }
}

class Aluno extends Pessoa {
  double media;
  int ano;

  Aluno(this.media, this.ano, String nome, int idade) : super(nome, idade);

  @override
  void apresentar() {
    super.apresentar(); // super.apresentar Este comando trás o 'apresentar()' igual da classe pai
    print('Eu sou o aluno $nome, e tenho $idade anos, estou no ano $ano e minha média é $media');
  }

  void fazerProjeto() {
    print("Estou fazendo um projeto...");
  }
}

class Professor extends Pessoa {
  String disciplina;
  int ano;

  Professor(this.disciplina, this.ano, String nome, int idade)
      : super(nome, idade);

  @override
  void apresentar() {
    super.apresentar();
    print("Eu ensino $disciplina no ano $ano");
  }
}

void main() {
  var aluno1 = Aluno(8.6, 2021, "jose", 25);
  var professor1 = Professor('front-end', 2021, 'joão', 30);
  var pessoa1 = Pessoa('carlos', 31);

//   aluno1.apresentar();
//   aluno1.fazerProjeto();

  Pessoa p = aluno1;
  Pessoa p2 = professor1;
  p.apresentar(); // Chama o metodo apresentar do aluno;
  p2.apresentar(); //Chama o método apresentar do professor
}
