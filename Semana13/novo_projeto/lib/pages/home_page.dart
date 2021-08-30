import 'package:flutter/material.dart';
import 'package:novo_projeto/pages/help_page.dart';
import '../controllers/salario_controller.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Inicio"),
        actions: [
          IconButton(
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(
                builder: (ctx) => HelpPage(),
              )
            ),
            icon: Icon(Icons.help),
            ),
        ],
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Icon(Icons.monetization_on, size: 72, color: Colors.green),
          AnimatedBuilder(
            animation: salarioController,
            builder: (BuildContext context, Widget? child) {
              print("Buildou no animated");
              return Text("R\$ ${salarioController.salario}",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 24,
                    color: Colors.green,
                    fontWeight: FontWeight.bold,
                  ));
            },
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              OutlinedButton(
                child: Row(
                  children: [
                    Icon(Icons.arrow_downward),
                    Icon(Icons.monetization_on_outlined),
                  ],
                ),
                onPressed: () => salarioController.diminuirSalario(100),
              ),
              OutlinedButton(
                child: Row(
                  children: [
                    Text("Limpar"),
                    Icon(Icons.clear_all),
                  ],
                ),
                onPressed: () => salarioController.limparSalario(0),
              ),
              OutlinedButton(
                child: Row(
                  children: [
                    Icon(Icons.arrow_upward),
                    Icon(Icons.monetization_on_outlined),
                  ],
                ),
                onPressed: () => salarioController.aumentarSalario(200),
              ),
            ],
          )
        ],
      ),
    );
  }
}
