// 5) Crie uma função que recebe uma lista de números e retorna a
// soma de todos os elementos


void main() {
var varArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 int retornoLista = listaFunc(varArray);
  
  print(retornoLista);

}

int listaFunc(List<int> lista) {
  
  int totalLista = 0;
  for (var item in lista) {
    //pega o item diretamente
    totalLista += item;
  }
  
   return totalLista;
}
