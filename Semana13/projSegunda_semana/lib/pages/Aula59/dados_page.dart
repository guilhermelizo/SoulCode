import 'package:flutter/material.dart';
// import 'package:my_first_app/main.dart';

class DadosPage extends StatefulWidget {
  final String email;
  final String senha;

  DadosPage(this.email, this.senha);

  @override
  _DadosPageState createState() => _DadosPageState();
}

class _DadosPageState extends State<DadosPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dados'),
        centerTitle: true,
        leading: Text(''),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            child: Text('Email: ${widget.email}'),
          ),
          Container(
            child: Text('Senha: ${widget.senha}'),
          ),
          ElevatedButton(
              onPressed: () {
                Navigator.pop(context, 'Deslogado!');
              },
              child: Text('Voltar')),
        ],
      ),
    );
  }
}
