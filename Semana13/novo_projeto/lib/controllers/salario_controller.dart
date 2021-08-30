import 'package:flutter/material.dart';

final salarioController = SalarioController();

// Change notifier é uma classe que vem com o flutter, muito usado para gerencia de state
// Ele sabe que houve uma mudança e então executa uma ação
class SalarioController extends ChangeNotifier {
  int salario = 0;

  void aumentarSalario(int valor) {
    salario += valor;
    notifyListeners();
  }

  void diminuirSalario(int valor) {
    salario -= valor;
    notifyListeners();
  }

  void limparSalario(int? valor) {
    salario = 0;
    notifyListeners();
  }
}
