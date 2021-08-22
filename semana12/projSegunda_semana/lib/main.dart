import 'package:flutter/material.dart'; // Material para Android e o Cupertino para IOS
import 'pages/aula55/home_page.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AulasApp',
      home: HomePage(),
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.deepPurple,
        primaryColor: Colors.purple,
      ),
    );
  }
}
