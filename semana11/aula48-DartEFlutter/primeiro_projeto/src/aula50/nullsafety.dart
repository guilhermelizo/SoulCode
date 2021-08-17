//null safety - da nova atualização do dart
//non-nullables > as variaveis não podem ser nulas

//Exemplo de Erro:
// void main() {
//   int n;

//   print(n);
// }

// void main(){
//    List<int>? lista;  // o '?' faz com que posa ser nulo, como pode não ser
//   print(lista);
//   //print(lista.length);

//   if(lista != null){
//     //print(lista.length);
//   }

//   var qt = lista?.length; //como ela está/pode estar nula, é necessário '?' tb

//   // o '??' serve como teste, e se for nulo, mostrará 0. Se não for, mostrará o valor recebido
//   var a = qt ?? 0;
//   print(a);

// }

// void main(){
//   List<int>? lista = [1, 2];

//   //o '!' diz que com certeza ali(lista) tem valor
//   print(lista!.length); //Mas se não tiver valor, dará erro
// }

//1 - Crie um int que pode ser nulo
//2 - crie uma lista que pode ser nula

void main() {
  int? numero = 4;
  List? dados;

  // Mostre se o numero tem valor e se é par.
  var numeroRecebe = numero.isEven;  //trocar para 'numero?' retirei o ? pois ficava dando 'erro' no vscode kk
  print(numeroRecebe);

  // Acessem o length de dados sem fazer
  // null-acheck
  // ignore: unused_local_variable
  var quantidade = dados?.length; //quantidade pode ser nula

  // Acesse length considerando que dados possui algum valor
  // ignore: unused_local_variable
  var qt = dados!.length;

  // Crie um Map<String, int> que pode ser nulo
  // ignore: unused_local_variable
  Map<String, int>? mapa;

  // Crie um bool que pode ser nulo
  // ignore: unused_local_variable
  bool? boleano;
  // Crie um int comum
  // ignore: unused_local_variable
  int comum = 0;
}
