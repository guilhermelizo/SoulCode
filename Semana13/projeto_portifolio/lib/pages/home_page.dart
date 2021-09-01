import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:projeto_portifolio/pages/curriculum_page.dart';
import 'package:projeto_portifolio/pages/projeto_page.dart';
import 'package:projeto_portifolio/pages/tecnologias_page.dart';
import 'dart:io';

import 'package:url_launcher/url_launcher.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  openwhatsapp(String num, String texto) async {
    var whatsappURlAndroid =
        "https://api.whatsapp.com/send?phone=551170530338text=Ol%C3%A1!";
    var whatappURLIos =
        "https://wa.me/\$whatsapp?text=\$%7BUri.parse(mensagem)%7D";
    if (Platform.isIOS) {
      // for iOS phone only
      await launch(whatappURLIos, forceSafariVC: true);
    } else {
      // android , web
      await launch(whatsappURlAndroid);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(" Guilherme Lizo"),
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
                      new MaterialPageRoute(builder: (context) => HomePage()));
                }),
            ListTile(
                leading: Icon(Icons.military_tech),
                title: Text("Tecnologias Conhecidas"),
                onTap: () {
                  Navigator.push(
                      context,
                      new MaterialPageRoute(
                          builder: (context) => TecnologiasPage()));
                }),
            ListTile(
                leading: Icon(Icons.print),
                title: Text("Projetos Realizados"),
                onTap: () {
                  Navigator.push(
                      context,
                      new MaterialPageRoute(
                          builder: (context) => ProjetosPage()));
                }),
            ListTile(
                leading: Icon(Icons.list),
                title: Text("Curriculum"),
                onTap: () {
                  Navigator.push(
                      context,
                      new MaterialPageRoute(
                          builder: (context) => CurriculumPage()));
                }),
          ],
        ),
      ),
      //************************************************/
      //********************** BODY ********************/
      //************************************************/
      body: Container(
        padding: EdgeInsets.symmetric(horizontal: 15),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              Container(
                height: 150,
                width: 150,
                child: CircleAvatar(
                  backgroundImage: AssetImage(
                    '../lib/assets/images/guilhermelizo.jpg',
                  ),
                ),
              ),
            ]),
            Text(
              "Seja bem vindo ao meu aplicativo portifólio!",
              textAlign: TextAlign.justify,
            ),
            Text(
              "Me chamo Guilherme Lizo, tenho 29 anos.",
              textAlign: TextAlign.justify,
            ),
            Text("Tenho como meta me especializar na área de desenvolvimento mobile."),

            Text(
              "Estudante de Análise e Desenvolvimento de Sistemas e atualmente realizando o bootcamp",
              textAlign: TextAlign.justify,
            ),
            Text(
              "Front End e Mobile realizado pela Soulcode Academy.",
              textAlign: TextAlign.justify,
            ),
            Column(children: [
              // Container body parte inferior
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children:[ Column(children: [
                  Text("Quer conhecer?", style: TextStyle(fontSize: 11)),
                  Container(
                    padding: EdgeInsets.all(3),
                    decoration: BoxDecoration(
                      border: Border.all(),
                      borderRadius: BorderRadius.circular(2),
                    ),
                    child: InkWell(
                      child: Image.asset(
                        '../lib/assets/images/soulcode.jpeg',
                        width: 30,
                      ),
                      onTap: () => launch(
                        'https://soulcodeacademy.org/',
                      ),
                    ),
                  ),
                ]),
              ]),
              Text(
                "",
                textAlign: TextAlign.justify,
              ),

              // **************************************************
              // ************ Botões de Contato *******************
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  InkWell(
                    child: Image.asset(
                      '../lib/assets/images/github.png',
                      width: 50,
                    ),
                    onTap: () => launch(
                      'https://www.github.com/guilhermelizo',
                    ),
                  ),
                  InkWell(
                    child: Image.asset(
                      '../lib/assets/images/linkedin.png',
                      width: 50,
                    ),
                    onTap: () => launch(
                      'https://www.linkedin.com/in/guilhermelizo/',
                    ),
                  ),
                ],
              ),
              Text("Contato:"),
              Text("@guilhermelizo"),

              // *****************************************************
              // ****************** Botão Whatsapp *******************
              FloatingActionButton(
                onPressed: () =>
                    // launchWhatsApp(phone: '555195887955', message: 'Olá!'),
                    openwhatsapp('551170530338', 'Olá Guilherme!'),
                child: FaIcon(
                  FontAwesomeIcons.whatsapp,
                  color: Theme.of(context).iconTheme.color,
                ),
                backgroundColor:
                    Theme.of(context).floatingActionButtonTheme.backgroundColor,
              ),

            ]),
          ],
        ),
      ),
    );
  }
}
