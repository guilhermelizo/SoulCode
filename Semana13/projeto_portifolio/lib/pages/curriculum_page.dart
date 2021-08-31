import 'package:flutter/material.dart';

class CurriculumPage extends StatefulWidget {
  CurriculumPage({Key? key}) : super(key: key);

  @override
  _CurriculumPageState createState() => _CurriculumPageState();
}

class _CurriculumPageState extends State<CurriculumPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Curriculum"),
      ),
      body: ListView(
        children: [
          Container(
            margin: EdgeInsets.all(1),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text("Nome: Guilherme Augusto Lizo de Oliveira"),
                Text("Nasc.: 11/07/1992 -> 29 anos"),
              ],
            ),
          ),
          SizedBox(
            width: 150,
            child: Column(
              children: [
                Text("Academico:"),
                Column(
                  children: [
                    Text("[UnicSul]"),
                    Text("Análise e Desenvolvimento de Sistemas"),
                    Text("2° Semestre - Cursando")
                  ],
                ),
                Column(
                  children: [
                    Text("[Fatec-SP]"),
                    Text("Desenvolvimento de Jogos"),
                    Text("5° Semestre - Trancada")
                  ],
                ),
                
              ],
            ),
          ),
        ],
      ),
    );
  }
}
