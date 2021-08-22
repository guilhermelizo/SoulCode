void main() {
  var numeros = <int>[1, 2, 3];

  numeros.add(20); //[1,2,3,20]
  numeros.removeAt(0); //[2,3,20] remove pelo index
  numeros.remove(20); //[2,3] remove o primeiro igual

  int soma = 0;

//for in
  for (var item in numeros) {
    soma += item;
  }

//for
  for (var i = 0; i < numeros.length; i++) {
    print(numeros[i]);
  }

//map - converte ema lista em outra lista
  var novaLista = numeros.map((item) {
    return "Número: $item";
  }).toList(); //converte o .map em lista

  var novaLista2 = numeros.map((int item) {
    return item + 1;
  }).toList();

  print(novaLista);
  print(novaLista2);

  var listaFiltrada = numeros.where((int item) {
    return item % 2 == 0;
  });
}
