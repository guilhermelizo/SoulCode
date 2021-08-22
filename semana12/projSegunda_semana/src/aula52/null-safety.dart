import 'dart:math' as math;

// Null-safety
void main() {
  // nullable - são tipos com ?
  int? valor = null; // variavel valor pode ser null
  List<int>? lista = null;

  // null-check
  if (valor != null) {
    print(valor.isEven);
  } else {
    print("É nulo =(");
  }

  var comprimento = lista?.length; // null
  // var comprimento2 = lista!.length; // da erro

  print(area());
  print(area2());
  print(area3()); // dá erro

  // null-check
  // operador ?
  // operador ??
  // operador !
}

// null-check
double area({double? raio}) {
  if (raio != null) {
    return math.pi * raio * raio;
  }

  return 0.0;
}

// usando operador ??
double area2({double? raio}) {
  var r = raio ?? 1;

  return math.pi * r * r;
}

double area3({double? raio}) {
  return math.pi * raio! * raio;
}

double? area4({double? raio}) {
  if (raio != null) {
    return math.pi * raio * raio;
  }

  return null;
}
