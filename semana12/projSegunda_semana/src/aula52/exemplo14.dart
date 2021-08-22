// Exemplo 14: Explique com exemplos o uso dos operadores "?", "??" e "!"


// void main() {
//   List<bool>? dados;

//   // Operador "?"
//   // Acessa propriedade/função do objeto, caso ele seja nulo,
//   // a operação retorna nulo também.
//   print(dados?.length);

//   // Operator "??"
//   // Testa se o valor é nulo, caso seja atribui outro valor.
//   var comprimento = dados?.length ?? 0;

//   print(comprimento);

//   // Operator "!"
//   // Promove um nullable a non-nullable
//   print(dados!.length);
// }