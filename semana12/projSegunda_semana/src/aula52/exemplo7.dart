// Exemplo 07: Crie uma função que recebe uma lista como parâmetro nomeado, e retorna
// a soma de todos os seus elementos. É uma lista de double.

void soma({List<double> param = const []}) {
  print(param.reduce((value, element) => value + element).toStringAsFixed(2));
}

var lista = <double>[1.4, 2.43, 6.54];

void main() {
  soma(param: lista);
}

//resolução do Professor:

// double somaElementos({List<double> lista = const []}) {
//   double soma = 0;

//   for (var item in lista) {
//     soma += item;
//   }

//   return soma;
// }

// void main() {
//   print(somaElementos());
//   print(somaElementos(lista: [1.2, 3.4]));
// }
