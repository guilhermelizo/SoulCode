// 5) Com base na questão anterior, filtre os alunos que
// tiveram nota abaixo da média da turma (reprovados).


void calculaMedia(List<Map<String, Object>> turma) {
    double soma = 0;

    turma.forEach((Map<String, Object> item) { 
      var notaAluno = item['media'] as double;
      soma += notaAluno;
    });

    var qtAluno = turma.length;
    var mediaTotal = soma / qtAluno;
    print(mediaTotal);

    turma.forEach((Map<String, Object> item){
      var notaAluno = item['media'] as double;

      if(notaAluno < mediaTotal) print("O aluno ${item['nome']} está reprovado.");
    });
  }