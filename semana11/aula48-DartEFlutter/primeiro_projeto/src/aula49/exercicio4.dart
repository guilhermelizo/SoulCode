// 4) Crie uma função que cria Maps que representam alunos
// (nome, idade, média). Crie uma lista de alunos chamada sala
// e calcule a média da turma.


//var usuario = {"nome": "José", "idade": 17}  << outra forma de declarar

// criaAluno
//   var map = {
//     "nome": "josé", // Chave-valor
//     "idade": 20,
//     "notas": [8.0, 9.5, 7.0],
//   };

  
Map<String, Object> criaAluno(String nome, int idade, double media) {
  var aluno = {"nome": nome, "idade": idade, "media": media};
 
  return aluno;
}
 
var sala = [
  criaAluno("José", 20, 7.0),
  criaAluno("Josée", 23, 5.0),
];
 
void calculaMedia(List<Map<String, Object>> turma) {
  double soma = 0;
  
  turma.forEach((Map<String, Object> item) {
    var notaAluno = item["media"] as double;
    soma = soma + notaAluno;
  });
  
  var qtAlunos = turma.length;
  var media = soma / qtAlunos;
  
  print("A média é: $media");

  calculaMedia(sala);
}




