import 'package:flutter/material.dart';

class CoracaoPage extends StatefulWidget {
  CoracaoPage({Key? key}) : super(key: key);

  @override
  _CoracaoPageState createState() => _CoracaoPageState();
}

class _CoracaoPageState extends State<CoracaoPage> {
  // Criando um estado inicialmente como falso, para que o coração não tenha cor nenhuma.
  bool favorito = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: GestureDetector(
        // onTap funciona como um onClick no celular.
        onTap: () {
          // alterna o estado do favorito
          setState(() {
            favorito = !favorito;
          });
        },
        child: Icon(
          Icons.favorite,
          color: Colors.black,
          size: 60.0,
        ),
      ),
    ));
  }
}