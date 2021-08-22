// Exemplo 06: Declare listas diferentes que contêm:
// - int
// - String
// - double
// - bool
// Na lista de int, filtre para ter apenas items pares(use where).
// Na lista de String, transforme-a(map) em uma lista de int, pegando o .length de cada
// String.
// Na lista de double, percorra a lista(for) e mostre os valores dentro dela.
// Na lista de bool, transforme-a(map) em uma lista de strings com texto 'true' ou 'false'.
// Use a função .toString, por exemplo: itemBool.toString()

void main() {
  //int
  var listInteiros = <int>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var listaPares = listInteiros.where((item) {
    return item % 2 == 0;
  }).toList();

  //String
  var listaString = <String>["oi", "Hello", "Bom dia", "soulcode"];
  var listaStringNova = listaString.map((item) {
    return item.length;
  }).toList();

  //double
  var listaDouble = <double>[1.75, 2.25, 1.30, 3.45];

  for (var i = 0; i < listaDouble.length; i++) {
    print(listaDouble[i]);
  }

  //bool
  var listaBool = ["True", "False"];
  var listaBoolNova = listaBool.map((item) {
    return item;
  }).toList();

  print('int = $listaPares'); //print int
  print('String = $listaStringNova'); //print String
  print('Double = $listaDouble'); //print Double
  print('Bool = $listaBoolNova'); //print Double
  
}




// Resoluções do professor
// import 'dart:math' as math;

// var listInt = <int>[1,2,3,4,5,6,7,8,9,10];
// var listString = <String>['José', 'João', 'Maria'];
// var listDouble = <double>[5.21, 4.12, 1.67];
// var listBool = <bool>[true, false, false, true];


// var pares = listInt.where((int item) => item.isEven).toList();

// var numInteiros = listString.map((String item) => item.length).toList();

// void imprimeDouble (List<double> param) {
//   for (var item in param) {
//     print('Item: $item');
//   }
// }

// var newString = listBool.map((bool item) => item.toString()).toList();

// void main() {
//   print(pares);
//   print(numInteiros);
//   imprimeDouble(listDouble);
//   print(newString);
// }
