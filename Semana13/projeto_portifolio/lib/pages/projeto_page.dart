import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ProjetosPage extends StatefulWidget {
  ProjetosPage({Key? key}) : super(key: key);

  @override
  _ProjetosPageState createState() => _ProjetosPageState();
}

class _ProjetosPageState extends State<ProjetosPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Projetos"),
        ),
        body: ListView(children: [
          Container(
            margin: EdgeInsets.all(10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(children: [
                    Text("Projeto - HTML (13/06/2021)", style: TextStyle(fontSize: 18),),
                    Text(""),
                    Text("Primeira página, a proposta era um site de filmes utilizando os conhecimentos iniciais adquiridos em html."), // Falta adicionar a biblioteca 17/06/2021
                    Image.asset('../lib/assets/images/projetos/html.gif',
                        width: 350),
                  ]),
                ),
                Text(" ___________________________________________"),
                Text(""),
                
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(children: [
                    Text("Projeto - HTML (17/06/2021)", style: TextStyle(fontSize: 18),),
                    Text(""),
                    Text("Neste, tivemos a proposta de uma biblioteca como finalização do módulo"),
                    Image.asset('../lib/assets/images/projetos/html2.gif',
                        width: 350),
                  ]),
                ),
                Text(" ___________________________________________"),
                Text(""),

                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(children: [
                    Text("Projeto - CSS (29/06/2021)", style: TextStyle(fontSize: 18),),
                    Text(""),
                    Text("O tema era criar um site para uma empresa de açaí com seus produtos"),
                    Image.asset('../lib/assets/images/projetos/css.gif',
                        width: 350),
                  ]),
                ),
                Text(" ___________________________________________"),
                Text(""),

                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(children: [
                    Text("Projeto - JScript (02/07/2021)", style: TextStyle(fontSize: 18),),
                    Text(""),
                    Text("Calculadora, conversor monetario e de temperatura"),
                    Image.asset('../lib/assets/images/projetos/jscript.gif',
                        width: 350),
                  ]),
                ),
                Text(" ___________________________________________"),
                Text(""),

                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(children: [
                    Text("Projeto - ReactNative (26/07/2021)", style: TextStyle(fontSize: 18),),
                    Text(""),
                    Text("Calculadora de IMC e Informações com a utilização dos componentes em ReactNative."),
                    Image.asset('../lib/assets/images/projetos/reactnative.gif',
                        width: 350),
                  ]),
                ),
                Text(" ___________________________________________"),
                Text(""),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(children: [
                    Text("Projeto - ReactNative (04/08/2021)", style: TextStyle(fontSize: 18),),
                    Text(""),
                    Text("Neste, nosso desafio foi criar um aplicativo de mototaxi."),
                    Image.asset('../lib/assets/images/projetos/motoapp1.gif',
                        width: 350),
                    Image.asset('../lib/assets/images/projetos/motoapp2.gif',
                        width: 350),
                    Image.asset('../lib/assets/images/projetos/motoapp3.gif',
                        width: 350),
                  ]),
                ),
                Text(" ___________________________________________"),
                Text(""),
                Container(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text("Quer conhecer mais?"),
                      InkWell(
                        child: Image.asset(
                          '../lib/assets/images/github.png',
                          width: 40,
                        ),
                        onTap: () => launch(
                          'https://www.github.com/guilhermelizo',
                        ),
                      ),
                    ],
                  ),
                ),

              ],
            ),
          ),
        ]));
  }
}
