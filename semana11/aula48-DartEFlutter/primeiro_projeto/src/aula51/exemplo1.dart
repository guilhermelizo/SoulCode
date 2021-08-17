// Exemplo 01: Crie uma função que retorna a média de 3 numeros
// Mas antes exibe no console(print) cada um deles

void main() {
  print("Olá");
  calculaMedia(7.5, 8, 6.7);
}

double calculaMedia(double x, double y, double z) {
  print("Nota 1: $x");
  print("Nota 2: $y");
  print("Nota 3: $z");

  double media = (x + y + z) / 3;
  print(media);
  return media;
}
