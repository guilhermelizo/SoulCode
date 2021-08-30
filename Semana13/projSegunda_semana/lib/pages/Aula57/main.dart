import 'package:flutter/material.dart';
// import 'package:primeiro_projeto/pages/Aula57/cadastro_page.dart';
import 'package:primeiro_projeto/pages/Aula57/login_page.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(colorScheme: ColorScheme.highContrastDark()),
      title: 'AulasApp',
      home: LoginPage(),
      debugShowCheckedModeBanner: false,
    );
  }
}
