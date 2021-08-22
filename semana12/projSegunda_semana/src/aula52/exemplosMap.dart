// Exemplos com Map

void main() {
  var map = <String, dynamic>{"nome": "Guiga"};
  map["nome"] = "Guilherme";
  map["sobrenome"] = "Lizo";
  map["idade"] = "18";
  map["notas"] = [
    7.8,
    8.5,
    9.0
  ]; // double está sendo aceito pela declaração do dynamic

  print(map); //imprime todos os map

  print(criaAluno("José", 20, 8.6));
}

// Exemplo de função que cria um map
Map<String, dynamic> criaAluno(String nome, int idade, double media) {
  var map = {"nome": nome, "idade": idade, "media": media};

  return map;
}

// Exemplo de função que cria um map - outra sintaxe
Map<String, dynamic> criaAluno2(String nome, int idade, double media) => {
      "nome": nome,
      "idade": idade,
      "media": media,
    };

void apresentaAluno(Map<String, dynamic> aluno) {
  var nome = aluno['nome'];
  var idade = aluno['idade'];
  var media = aluno['media'];
  print('Olá ${nome}. Eu tenho ${idade} anos. minha média é ${media}');

  var meuAluno = criaAluno("josé", 20, 8.6);
  apresentaAluno(meuAluno);
}
