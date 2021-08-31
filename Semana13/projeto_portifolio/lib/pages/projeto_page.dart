import 'package:flutter/material.dart';

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
          title: Text("Projetos:"),
        ),
        body: ListView(
          children: [ 

          
        Container(
        margin: EdgeInsets.all(10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          
          children: [
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Text("Projeto - HTML (13/06/2021)"),       // Falta adicionar a biblioteca 17/06/2021
                      Image.asset('../lib/assets/images/projetos/html.gif',
                        width: 300),
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Text("Projeto - HTML (17/06/2021) ADICIONAR"),      
                      Image.asset('../lib/assets/images/projetos/html.gif',
                        width: 300),
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Text("Projeto - CSS (29/06/2021)"),
                      Image.asset('../lib/assets/images/projetos/css.gif',
                        width: 300),
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Text("Projeto - JScript (29/06/2021)"),
                      Image.asset('../lib/assets/images/projetos/jscript.gif',
                        width: 300),
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Text("Projeto - ReactNative (29/06/2021)"),
                      Image.asset('../lib/assets/images/projetos/reactnative.gif',
                        width: 300),
                      ]
                  ),
                ),
          ],
        ),
      ),
      ]
        )
    );
  }
}
