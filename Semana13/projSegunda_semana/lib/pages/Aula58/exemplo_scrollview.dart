import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Widget criaContainer(Color color) => Container(
        height: 128,
        width: 56,
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(8),
        ),
      );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Exemplo SingleChildScrollView"),
      ),
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            criaContainer(Colors.purple),
            criaContainer(Colors.red),
            criaContainer(Colors.black),
            criaContainer(Colors.orange),
            criaContainer(Colors.green),
            criaContainer(Colors.purple),
            criaContainer(Colors.blue),
            criaContainer(Colors.yellow),
            criaContainer(Colors.green),
            criaContainer(Colors.purple),
          ],
        ),
      ),
    );
  }
}
