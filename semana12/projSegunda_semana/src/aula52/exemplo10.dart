// Exemplo 10:
// Crie variáveis do tipo int, double, String e bool que podem ser null.
// Tente acessar propriedades de cada uma usando o ?

void main() {
  int? valorInteiro = null;
  double? valorDouble = null;
  String? valorString = null;
  bool? valorBool = null;

  print(valorInteiro);
  print(valorDouble);
  print(valorString);
  print(valorBool);
}

// void main(){
//   int? numero = 10;
//   double? nota;
//   String? nome;
//   bool? ligado;

//   print(numero?.isEven);
//   print(nota?.toString());
//   print(nome?.toUpperCase());
//   print(ligado?.toString());
// }