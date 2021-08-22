// import 'package:aula_1/pages/dio_page.dart';   exemplo do navigator
import 'package:flutter/material.dart';

class Principal extends StatefulWidget {
  @override
  _PrincipalState createState() => _PrincipalState();
}

class _PrincipalState extends State<Principal> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(0, 0, 0, 0.9),
      appBar: AppBar(
        leading: Icon(Icons.sports_mma),
        title: Text('Jotaro'),
        centerTitle: true,
        backgroundColor: Colors.amber,
        toolbarHeight: 70.0,
      ),
      //O body só aceita um child(Widget), por isso usei o Stack(O Stack empilha os widgets em forma de cascata, o que estiver primeiro vai ficar mais embaixo). fiz isso para poder colocar uma imagem de fundo com um gradiente em cima dela e o conteúdo em cima das duas.
      body: Stack(
        children: <Widget>[
          Container(
              //Container com a imagem de fundo(AssetImage vem da máquina, NetworkImage da net)
              decoration: BoxDecoration(
                  image: DecorationImage(
            image: AssetImage('../lib/assets/images/3.png'),
            fit: BoxFit.fill,
          ))),
          Container(
              //container com o gradient, começando do centro-topo ao centro-baixo
              decoration: BoxDecoration(
            gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Color.fromRGBO(0, 0, 0, 0.4),
                  Color.fromRGBO(0, 0, 0, 0.8)
                ]),
          )),
          Container(
              margin: EdgeInsets.symmetric(
                horizontal: 40,
                vertical: 20,
              ),
              // Mais ou menos a mesma ideia do Stack, porém o ListView faz uma lista que pode scrollar
              child: Center(
                  child: ListView(
                children: <Widget>[
                  Container(
                      margin: EdgeInsets.symmetric(vertical: 20),
                      child: Text(
                        'ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA',
                        style: TextStyle(
                            color: Colors.amber, fontWeight: FontWeight.bold),
                        textAlign: TextAlign.center,
                      )),
                  Container(
                      margin: EdgeInsets.symmetric(vertical: 100),
                      child: Text(
                        'ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA',
                        style: TextStyle(
                            color: Colors.amber, fontWeight: FontWeight.bold),
                        textAlign: TextAlign.center,
                      )),
                ],
              )))
        ],
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.sports_mma_outlined),
        backgroundColor: Colors.amber,
        onPressed: () {
          //Função de navegação entre as páginas, funciona comoa navegação Stack do React. .push empilha mais uma página, .pop retira da pilha.
          // Navigator.push(  << Deixei de exemplo
          //     context, new MaterialPageRoute(builder: (context) => Dio()));
        },
      ),
    );
  }
}
