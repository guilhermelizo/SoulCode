//4 - Crie uma função que recebe o raio de um circulo e
// retorne o comprimento da circunferencia. A formula é
// C = 2 * PI * R
//O raio é um parametro nomeado e recebe o valor padrão de 100.

double circunferencia({double raio = 100}) {
  const pi = 3.14;
  return 2 * pi * raio;
}

void main() {
  print(circunferencia());
  print(circunferencia(raio: 500));
}
