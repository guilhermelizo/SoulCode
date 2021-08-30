import 'package:flutter/material.dart';
import 'package:primeiro_projeto/pages/Aula60/exemplo_drawer.dart';
// import 'package:primeiro_projeto/pages/Aula58/home_page.dart';
// import 'package:primeiro_projeto/pages/Aula58/exemplo_listview2.dart';
// import 'package:primeiro_projeto/pages/Aula57/cadastro_page.dart';
// import 'package:primeiro_projeto/pages/Aula57/login_page.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(colorScheme: ColorScheme.highContrastLight()),
      title: 'AulasApp',
      home: HomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}
