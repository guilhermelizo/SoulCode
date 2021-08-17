//3) Crie uma função que recebe uma lista de numeros
// e remove dela os numeros pares.

void main() {
  var listaNumeros = <int>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  void numerosPares(List<int> listaNumeros) {
    return listaNumeros.removeWhere((listaNumeros) => listaNumeros.isEven);
  }

  numerosPares(listaNumeros);
  print(listaNumeros);
}


