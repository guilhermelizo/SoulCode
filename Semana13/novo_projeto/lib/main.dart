import 'package:flutter/material.dart';
// import 'package:novo_projeto/pages/help_page.dart';
import 'package:novo_projeto/pages/home_page.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aula Controllers',
      home: HomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}
