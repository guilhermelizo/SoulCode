// ATIVIDADE
// Crie uma página de registro de produto:
// Com os campos:
// * nome
// * quantidade
// * preço
// * categoria
// * desconto
// * código
// * fornecedor
// * fabricante
// Todos dentro de uma Column, envolva ela
// em um SingleChildScrollView com bouncing.

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
// import 'package:validators/validators.dart';

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
        title: Text("Cadastro de Produto"),
      ),
      body: Container(
        padding: EdgeInsets.all(20.0),
        child: SingleChildScrollView(
          physics: BouncingScrollPhysics(),
          // key: _formKey,
          child: Column(
            children: [
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Nome do Produto',
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {},
                  keyboardType: TextInputType.name,
                ),
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Quantidade',
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {},
                  keyboardType: TextInputType.name,
                ),
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Preço',
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {},
                  keyboardType: TextInputType.number,
                ),
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Categoria',
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {},
                  keyboardType: TextInputType.emailAddress,
                ),
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Desconto',
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {},
                  keyboardType: TextInputType.multiline,
                ),
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Código',
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {},
                  keyboardType: TextInputType.multiline,
                ),
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Fornecedor',
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {},
                  keyboardType: TextInputType.multiline,
                ),
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Fabricante',
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {},
                  keyboardType: TextInputType.multiline,
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8.0),
                child: ElevatedButton(
                  onPressed: () {},
                  child: Padding(
                    padding: EdgeInsets.symmetric(vertical: 8),
                    child: Text("Cadastrar"),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
