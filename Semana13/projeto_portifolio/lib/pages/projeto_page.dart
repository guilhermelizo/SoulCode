import 'package:flutter/material.dart';

class ProjetosPage extends StatefulWidget {
  ProjetosPage({Key? key}) : super(key: key);

  @override
  _ProjetosPageState createState() => _ProjetosPageState();
}

class _ProjetosPageState extends State<ProjetosPage> {
   @override
  Widget build(BuildContext context) {

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Projetos:"),
        ),
        body: Column(
          children: [
            Row(
              children: [
                
              ],
            ),
          ],
        ),
      ),
    );
  }
}
