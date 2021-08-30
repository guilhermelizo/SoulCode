import 'package:flutter/material.dart';
import 'package:projeto_portifolio/pages/curriculum_page.dart';
import 'package:projeto_portifolio/pages/projeto_page.dart';
import 'package:projeto_portifolio/pages/tecnologias_page.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(" Guilherme Lizo - Portifólio"),
      ),
      //************************************************/
      //********************** DRAWER *****************/
      //************************************************/
      drawer: Drawer(
        child: ListView(
          children: [
            UserAccountsDrawerHeader(
              accountName: Text("Guilherme Lizo"),
              accountEmail: Text("guilherme.lizo@yahoo.com.br"),
              currentAccountPicture: CircleAvatar(
                backgroundImage: AssetImage(
                  '../lib/assets/images/guilhermelizo.jpg',
                ),
              ),
            ),
            ListTile(
                leading: Icon(Icons.person),
                title: Text("Apresentação - Home"),
                onTap: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => HomePage()));
                }),
            ListTile(
                leading: Icon(Icons.person),
                title: Text("Tecnologias Conhecidas"),
                onTap: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => TecnologiasPage()));
                }),
            ListTile(
                leading: Icon(Icons.person),
                title: Text("Curriculum"),
                onTap: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => CurriculumPage()));
                }),
            ListTile(
                leading: Icon(Icons.person),
                title: Text("Projetos Realizados"),
                onTap: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => ProjetosPage()));
                }),
          ],
        ),
      ),
      //************************************************/
      //********************** BODY ********************/
      //************************************************/
      body: Padding(
        padding: EdgeInsets.all(10),
        child: Column(
          children: [
            Container(
              height: 150,
              width: 150,
              child: CircleAvatar(
                backgroundImage: AssetImage(
                  '../lib/assets/images/guilhermelizo.jpg',
                ),
              ),
            ),
            Text(
              ''' 
            Seja bem vindo ao meu aplicativo portifólio!
            Eu sou o Guilherme Lizo, tenho 29 anos.
            Estudante da área de Análise e desenvolvimento de Sistemas
            e atualmente realizando o bootcamp Front End & Mobile da Soulcode.
               ''',
            ),
          ],
        ),
      ),
    );
  }
}
