// 10) Crie uma função que recebe 4 parâmetros nomeados e 1
// posicional. Exiba o valor delas.

void aluno(String nome,
    {String turma = 'BWC3',
    String curso = "Front-end/Mobile",
    String soulcode = 'SoulCode Academy',
    String modulo = "Dart & Flutter"}) {
  print(
      'O Aluno ${nome} da turma ${turma} atualmente está no curso ${curso} no módulo ${modulo}. O bootcamp é realizado pela ${soulcode}');
}

void main() {
  aluno('Jose');
  aluno('Guilherme');
}
