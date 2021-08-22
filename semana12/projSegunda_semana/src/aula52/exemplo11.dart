// Exemplo 11: Crie uma função que cria um Map, esse map possui "nome", "idade", "media". 
// A função cria alunos basicamente. Crie uma lista de alunos na main. E em seguida crie
// outra função, essa função recebe a lista de alunos e um double media como parâmetro.
// OBS: media é um parametro nomeado. Mostrar alunos abaixo dessa media.


// void abaixoDaMedia(List<Map<String, dynamic>> alunos, {double media = 7.0}) {
//   for (var aluno in alunos) {
//     if(aluno['media'] < media){
//       print("${aluno['media']} < media está abaixo da média");
//     }
//   }
// }

// void main() {
//   var alunos = {
//     criarAluno("Jose", 18, 7.0),
//     criarAluno("Maria", 19, 9.0),
//     criarAluno("Jose", 18, 7.4),
//     criarAluno("Jose", 18, 7.9),
//   };
//   abaixoDaMedia(alunos);
//   abaixoDaMedia(alunos, media: 8.0);
// }