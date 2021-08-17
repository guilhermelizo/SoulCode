// 3) Crie uma função que recebe um aluno da soulcode e
// apresenta ele.

void main() {
  listaA(aluno);
}

//   print(aluno);
//   print('aluno novo ${aluno["nome"]}');
//   print('Seja bem vindo ${aluno["nome"]}, você tem ${aluno["idade"]} anos ');




var aluno = {'nome': 'Guiga', 'idade': 29};

void listaA(Map<String, Object> param) {
  print('Aluno - Seja bem vindo!');
  print('Nome: ${param['nome']}');
  print('Idade: ${param['idade']}');
}
