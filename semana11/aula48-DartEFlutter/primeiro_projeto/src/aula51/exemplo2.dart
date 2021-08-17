// Crie uma função que recebe o peso e a altura de uma pessoa
// e retorna o IMC. Crie outra função que recebe um IMC e mostra
// na tela a situação (Abaixo do peso, Normal, etc)

void main() {
  calculaIMC(70, 1.80);
}

double calculaIMC(double peso, double altura) {
  print("Peso: $peso");
  print("Altura: $altura");

  double imc = peso / (altura * 2);
  if (imc < 19) {
    print("Abaixo do peso $imc");
  } else if (imc > 19) {
    print("imc normal $imc");
  } else if (imc > 22) {
    print("Acima do peso $imc");
  } else {
    print("Não é um imc válido");
  }

  print(imc);
  return imc;
}
