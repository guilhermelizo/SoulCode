import 'package:flutter/material.dart';
import 'package:novo_projeto/controllers/salario_controller.dart';

/*
 Atividade:
  Recrie a página de favorito(tem no template do github),
  usando change notifier

*/



class HelpPage extends StatefulWidget {
  @override
  _HelpPageState createState() => _HelpPageState();
}

class _HelpPageState extends State<HelpPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Ajuda"),
      ),
      body: AnimatedBuilder(
        animation: salarioController,
        builder: (BuildContext context, Widget? child) {
          return Container(
            alignment: Alignment.center,
            color: salarioController.salario <= 0 ? Colors.red : Colors.green,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  salarioController.salario <= 0 ? "Triste =(" : "Feliz =)",
                  style: TextStyle(fontSize: 24, color: Colors.white),
                ),
                ElevatedButton(
                  onPressed: () {
                    if (salarioController.salario >= 10000) {
                      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                          duration: Duration(seconds: 1),
                          content: Text("Ultrapassado os 10k")));
                    } else {
                      salarioController.aumentarSalario(10000);
                    }
                  },
                  child: Text("Ficar Feliz"),
                ),
                const SizedBox(height: 8),
                ElevatedButton(
                  onPressed: () {
                    final dialog = AlertDialog(
                      title: Text("Valorize o que ja tem"),
                      content: Text(
                          "Você já tem R\$ ${salarioController.salario}!!!"),
                    );

                    showDialog(context: context, builder: (context) => dialog);
                  },
                  child: Text("Ficar Rico =)"),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
