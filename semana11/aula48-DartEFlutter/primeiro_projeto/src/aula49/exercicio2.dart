// 2) Crie uma função que recebe uma lista de nomes,
// e exibe todos os nomes dela em CAIXA ALTA.

void main() {
  var listaNomes = <String>["tio zé", "joão da padaria", "tiririca"];

  String uperCase(String nomeUpper) {
    return nomeUpper;
  }

  print(listaNomes.map((String item) {
    return "$item".toUpperCase();
  }).toList());
}
