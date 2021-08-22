// 6) Crie uma lista de Map e armazene em cada posição um Map que
// representa um restaurante com nome, categoria e uma lista de
// avaliações(de 0 a 10).

List<Map<String, dynamic>> listRestaurante = [
  varMap,
  varMap2,
  {
    'nomeRestaurante': 'bar2',
    'categoria': 'medieval',
    'avaliacoes': [10, 1],
  }
];

Map<String, dynamic> varMap = {
  'nomeRestaurante': "padoca do zé",
  'categoria': 'Japonesa',
  'avaliacoes': [7, 8, 3, 8, 4]
};

Map<String, dynamic> varMap2 = {
  'nomeRestaurante': "restaurante 1",
  'categoria': 'italiana',
  'avaliacoes': [4, 8, 6, 8, 2]
};

void main() {
  print(varMap['nomeRestaurante']);

  varMap['nomeRestaurante'] = 'rango do tião';
  print(varMap['nomeRestaurante']);
}
