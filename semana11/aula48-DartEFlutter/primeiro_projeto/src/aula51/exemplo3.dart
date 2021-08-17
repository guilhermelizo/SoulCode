// Crie funções para representar uma calculadora: soma, subtração
//multiplicação e divisão. Crie outra função que recebe 2 numeros
// e um sinal '+', '-', '*' ou '/', e com base neles chame a função
// que corresponde ao sinal.

void main() {
  print("O resultado é: ${calculadora(3, 5, '*')}");
}

double calculadora(double n1, double n2, String operador) {
  print("Valor1: $n1");
  print("Valor2: $n2");
  if (operador == '+') {
    return n1 + n2;
  } else if (operador == '-') {
    return n1 - n2;
  } else if (operador == '*') {
    return n1 * n2;
  } else if (operador == '/') {
    return n1 / n2;
  } else {
    print("Não é um operador válido");
  }

  return calculadora(n1, n2, operador);
}
