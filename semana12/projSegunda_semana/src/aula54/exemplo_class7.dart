// Exemplo 07
// Crie uma classe Aluno com atributos: nome, media.
// Crie uma classe Turma com atributos: lista de alunos e nome da turma.
// A classe Turma possui o método:
// - mostrar os alunos da turma
// - calcular a media da turma

class Aluno {
  String nome;
  double media;

  Aluno(this.nome, this.media);
}

class Turma {
  List<Aluno> lista_de_alunos = [];
  String nome_da_turma;

  Turma(this.nome_da_turma);

  void mostrar_alunos() {
    lista_de_alunos.forEach((param) => print('${param.nome}  ${param.media}'));
  }

  void adicionar(Aluno param) {
    lista_de_alunos.add(param);
  }

  void calculoMedia() {
    var media = 0.0;
    lista_de_alunos.forEach((param) => media += param.media);
    print('Media da turma $nome_da_turma: ${media / lista_de_alunos.length}');
  }
}

void main() {
  var turma = Turma("TurmaBCW");

  turma.adicionar(Aluno("Eweton garibaldi", 10));
  turma.adicionar(Aluno("Tchurileib Bragant", 10));
  turma.adicionar(Aluno("Carla Truton", 10));
  turma.adicionar(Aluno("Tubirabiruba ronaldo", 8));

  turma.mostrar_alunos();
  turma.calculoMedia();
}
