//intorpolação de Strings

// Quando usar chaves:
// - chamar funções
// - chamar metodos dos objetos
// - chamar atributos de objetos

String caixaAlta(String texto) => texto.toUpperCase();

void main() {
  var nome = "José";

  print("Olá, eu sou $nome");
  print("Olá, eu sou ${nome.length}");
  print("Olá, eu sou $caixaAlta(nome)");
  print("Olá, eu sou ${nome.toUpperCase()}");
}
