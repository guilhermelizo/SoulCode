// Exemplo 08: Crie uma função que recebe uma lista de String por parâmetro,
// e para cada item da lista diga se o comprimento da string é par ou ímpar.

void mostrar(List<String> nomes) {
//   //Resolução com for-in:
//   for (var nome in nomes) {
//     if(nome.length.isEven){
//       print("É par!");
//     }else{
//       print("É impar!");
//     }
//   }
// }

// void main() {
//   var nomes = ["José", "João", "Maria"];

//   mostrar(nomes);

  //Resolução com forEach:
  nomes.forEach((String nome) {
    if (nome.length.isEven) {
      print("É par!");
    } else {
      print("É impar!");
    }
  });
}

void main() {
  var nomes = ["José", "João", "Maria"];
  mostrar(nomes);
}
