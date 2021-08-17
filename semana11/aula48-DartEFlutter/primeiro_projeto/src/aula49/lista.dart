void main() {
  var listaNotas = <int>[1, 2, 3]; // use em funções
  List<int> listaNotas2 = []; // use em classes(atributos)
  // Adicionando a lista
  listaNotas.add(1);
  listaNotas.add(1);
  // Informações da lista
  print(listaNotas.length); // Quantidade de elementos
  print(listaNotas.isEmpty); // Está vazio?
  print(listaNotas.isNotEmpty); // Ñ está vazio?
  print(listaNotas[0]);
  print(listaNotas.elementAt(0));
  // Remoção
  final removido = listaNotas.removeAt(0);
  final deuCerto = listaNotas.remove(500);
  // Acesso
  final index = listaNotas.indexOf(2);
  // Percorrendo lista
  int soma = 0;
  // listaNotas é [2 ,3, 1 ,1]
  for (int n in listaNotas) {
    // pega o elemento
    soma += n;
  }
  // usa o indice
  for (int i = 0; i < listaNotas.length; i++) {
    print(listaNotas[i]);
  }
  print(soma);

  // where (onde?)
  print(listaNotas.where((int item) {
    return item.isEven; // item % 2 == 0
  }).toList());

  // arrow function
//   print(listaNotas.where((int item) => item.isEven).toList());

  // forEach (para cada)
  listaNotas.forEach((item) {
    print(item);
  });

  // map (mapear)
  print(listaNotas.map((int item) {
    return "Frase: $item";
  }).toList());

  // por que toList?
//   final List novaLista = listaNotas.where((int item) {
//     return item.isEven;
//   });
}
