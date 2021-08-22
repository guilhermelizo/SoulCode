// Exemplo 09: Crie uma função que recebe os parâmetros (nome, preco, categoria) e retorne um
// Map com as chaves "nome", "preco", "categoria". Essa função cria produtos em forma de Map.
// Em seguida na sua função main, crie uma lista desses maps usando a função que você criou.
// Ou seja, crie uma lista de produtos.
// Fora da main crie uma função que recebe uma lista de maps(fique atento a tipagem), essa função
// irá determinar o total a se pagar pelos produtos. 
// 1) Função que cria produto
// 2) Lista de produtos
// 3) Função que calcula o total a se pagar pelos produtos

void main(){
  
  criaItem("playstashow", 4999.15, "eletronicos");
  criaItem("tevelizaum", 489.15, "eletronicos");
  criaItem("Cerurari", 1999.99, "eletronicos");
  print(listaProdutos);
  
  print(recebePrecos);
  
}

var listaProdutos = [];
//1
void criaItem(String nome, double preco, String categoria) {
   var recebeItem = {
     "nome":      nome, 
     "preco":     preco, 
     "categoria": categoria,
   };
//2  
  listaProdutos.add(recebeItem);
  
  recebePrecos += preco;
}

//3
  var recebePrecos = 0.0;























