// 7) Crie uma função que recebe um parâmetro posicional e um
// nomeado, e exiba esses valores.




void carroCompras (String produto, double preco, {String categoria = 'eletronicos'} ) {
  
  print('Produto: ${produto}');
  print('Preço: ${preco}');
  print('Categoria: ${categoria}');
  print("");
  
  print("O carrinho de compras tem ${produto} com o preço ${preco} da categoria ${categoria}");
  print("-------");
  
}


void main() {
  carroCompras('Playstashow' , 2999.80,);
  carroCompras('Celular', 3000,);
}

