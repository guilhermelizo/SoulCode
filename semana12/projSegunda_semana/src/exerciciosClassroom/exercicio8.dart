// 8) Crie variáveis de vários tipos que podem ser null(nesse caso
// algumas você pode colocar um valor, mas use ?). Em seguida,
// atribua um valor padrão caso o valor de cada variável seja
// nulo. Em seguida chame algum método ou propriedade dessas
// variáveis considerando a possibilidade de serem nulas.

String? nome;
int? idade;
String? sobrenome;


void main() {
  print('nome: ${nome}, idade: ${idade}, sobrenome:${sobrenome}');
  print("");
  
  nome = 'José';
  idade = 35;
  sobrenome = 'Gomes';
  print('nome: ${nome}, idade: ${idade}, sobrenome:${sobrenome}');
  
  
}