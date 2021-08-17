// Revisão Parametros


void saudacoes(String nome, int idade) {
  print("Olá, eu sou $nome, e tenho $idade anos");
}

// Parâmetro nomeado

void saudacoes2(
  String nome,
  int idade, {
  bool permitido = false,
  int id = 0,
  String senha = "",
}) {
  print("Olá, eu sou $nome, e tenho $idade anos");

  if (permitido) {
    print("Está permitido!");
  } else {
    print("Não está permitido");
  }

  print("id: $id e senha: $senha");
}

void main() {
  // saudacoes("Almir", 18);
  // saudacoes2("Almir", 18);
  // saudacoes2("Almir", 18, permitido: true);
  // saudacoes2("Almir", 19, permitido: true, id: 100);
  // saudacoes2("Almir", 19, permitido: true, id: 100, senha: "123");
  saudacoes2("José", 22, id: 1);
}

// void projetodeSexta(String nome, int quantidade, {bool permitido = false}) {
//   print('O querido professor  $nome pode passar $quantidade trabalhos hoje');
//   if (permitido) {
//     print('Está permitido');
//   } else {
//     print('Não porque está proibido');
//   }
// }

// void main() {
//   projetodeSexta("Almir", 1);
//   projetodeSexta("Almir", 1, permitido: true);
// }
