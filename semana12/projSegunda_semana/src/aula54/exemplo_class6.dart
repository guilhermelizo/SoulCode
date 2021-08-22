// Exemplo 06:
// Crie uma classe Produto com os atributos:
// - nome, preço e categoria

// Crie uma classe Carrinho de Compras com o atributo:
// lista de produtos(começa vazio)
// E com os métodos:
// - calcularTotal(pode ser printar nota fiscal)
// - limpar(use a função .clear() da lista)
// - remover produto( com removeAt)
// - adicionar produto (com add)

class Produto {
  String nome;
  double preco;
  String categoria;

  Produto(this.nome, this.preco, {this.categoria = 'sem categoria'});
}

class Carrinho {
  List<Produto> produtos = [];

  void adicionar(Produto p) {
    produtos.add(p);
  }

  // carrinho.removerPorIndex(0); - remove pela posição do item(inicial)
  // carrinho.removerPorIndex(.length -1); - remove pela posição do item(final)
  // carrinho.removerPorElemento(feijao); - remove pelo nome do item
  void removerPorIndex(int index) {
    produtos.removeAt(index);
  }

  void removerPorElemento(Produto param) {
    produtos.remove(param);
  }

  void calcularTotal() {
    double total = .0;
    for (var produto in produtos) {
      total += produto.preco;
    }
    print('''
    ********** Nota Fiscal **********
    
    -------------------------------
    O Total de sua compra foi:  $total
    ''');
  }
}

void main() {
  var arroz = Produto('Arroz', 10.5, categoria: 'Alimentos');
  var feijao = Produto('Feijão', 14.7, categoria: 'Alimentos');
  var cafe = Produto('Café', 11.3, categoria: 'Alimentos');

  var carrinho = Carrinho();
  carrinho.adicionar(arroz);
  carrinho.adicionar(feijao);
  carrinho.adicionar(cafe);
  carrinho.removerPorElemento(arroz);

  carrinho.calcularTotal();
}



//*****************************************************************
// OUTRA RESOLUÇÃO COMO EXEMPLO ABAIXO: ***************************
//*****************************************************************

// class Produto{
//     String nome;
//     double preco;
//     String categoria ;
 
//     Produto(this.nome, this.preco, this.categoria);
// }
 
// class CarrinhoDeCompras{
//       List<Produto> listaDeProdutos;
 
//       CarrinhoDeCompras(this.listaDeProdutos);
 
//       void calcularTotal(){
//         var soma = 0.0;
//         print(
//         '''
//           **********Nota Fiscal**********
//           -------------------------------
//             Data da compra: 18/08/2021
//           Produtos Comprados:
//         ''');
//         for (var caracteristicas_produto in listaDeProdutos) {
//           soma += caracteristicas_produto.preco;
//         print(
//           '''
//           - ${caracteristicas_produto.nome} - ${caracteristicas_produto.categoria} = R\$ ${caracteristicas_produto.preco}
//           ''');
//         }
//         print(
//         '''
//                   Valor Total: R\$ $soma
//         ''');
//       }
//       void limpar(){
//         listaDeProdutos.clear();
//       }
//       void adicionarProduto(Produto p){
//         listaDeProdutos.add(p);
//       }
 
//       void removerProdutoPorIndex(int index) => listaDeProdutos.removeAt(index);
 
//       void removerProdutoPorElemento(Produto p) => listaDeProdutos.remove(p);
      
// }
 
// void main (){
//   var produto1 = Produto('tv', 1500, 'eletronico');
//   var produto2 = Produto('ps4', 2500, 'game');
//   var produto3 = Produto('cama', 2000, 'moveis');
//   var produto4 = Produto('mouse', 20, 'informatica');
//   var produto5 = Produto('bala', 0.50, 'doces');
//   var produto6 = Produto('pneu', 500, 'automotivo');
 
// var carrinho = CarrinhoDeCompras([]);
// print(carrinho.listaDeProdutos);
 
// carrinho.adicionarProduto(produto1);
// carrinho.adicionarProduto(produto2);
// carrinho.adicionarProduto(produto3);
// carrinho.adicionarProduto(produto4);
// carrinho.adicionarProduto(produto5);
// carrinho.adicionarProduto(produto6);
 
// print(carrinho.listaDeProdutos);
// carrinho.calcularTotal();
 
// carrinho.removerProdutoPorElemento(produto3);
// carrinho.removerProdutoPorElemento(produto5);
// carrinho.calcularTotal();
// }




















