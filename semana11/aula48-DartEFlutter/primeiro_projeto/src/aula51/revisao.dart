void main() {
  var nome = "José";
  var nomeArquivo = "atividade_final_de_semana.pdf";

  print(nome.isEmpty); //false
  print(nome.isNotEmpty); //true
  print(nome.length); //4
  print(nome.toLowerCase()); //josé
  print(nome.toUpperCase()); //JOSÉ
  print(nome.startsWith(".pdf")); // True

  print(nome
      .endsWith(".pdf")); //Teste, Como o arquivo termina com .pdf, dará true
  print(nome[3]); // letra na posição 3 de 'josé' >> "é"
  print(nome.indexOf('o')); // Vai buscar a letra O em 'josé', ou seja, sera '1'

  print(nome.split("")); // Splita > "J","o","s","e"

  //exemplos de tipagem e declaração
  var lista = <int>[]; //lista de inteiros
  final List<int> lista2 = []; //Lista vazia com outra sintaxe

  var listaa = <int>[1, 2, 3];
  listaa.add(100); // [1, 2 ,3 ,100]
  print(listaa);
  listaa.removeAt(0); // [2, 3, 100]
  print(listaa);

  // Exemplos de for com lista para acessar os dados dela
  // Ex. 1
  int soma = 0;
  for (var item in lista) {
    //pega o item diretamente
    soma += item;
  }

  print(soma);

  // Ex. 2
  int soma2 = 0;
  for (var i = 0; i < lista.length; i++) {
    //pega pelo indice
    soma2 += lista[i];
  }
  print(soma2);
}
