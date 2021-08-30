import 'package:flutter/material.dart';
import 'package:primeiro_projeto/pages/Aula59/coracao_page.dart';

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
        title: Text("Exemplo Drawer"),
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            
            UserAccountsDrawerHeader(
              accountName: Text("Guilherme Lizo"),
              accountEmail: Text("guilherme.lizo@yahoo.com.br"),
              currentAccountPicture: CircleAvatar(child: Icon(Icons.person)),
              otherAccountsPictures: [CircleAvatar(child: Icon(Icons.person_outline))],
            ),
            ListTile(
                leading: Icon(Icons.person),
                title: Text("Perfil - Home"),
                onTap: () {}),
            ListTile(
                leading: Icon(Icons.add_a_photo),
                title: Text("Fotos"),
                onTap: () {}),
            ListTile(
                leading: Icon(Icons.help), title: Text("Ajuda"), onTap: () {}),
            ListTile(
              title: Text("Configurações"),
              onTap: () {
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => CoracaoPage()));
              },
            ),
          ],
        ),
      ),
      body: ListView(
        physics: BouncingScrollPhysics(),
        children: [
          criaContainer(Colors.green),
          criaContainer(Colors.red),
          criaContainer(Colors.blue),
          criaContainer(Colors.yellow),
          criaContainer(Colors.blue),
          criaContainer(Colors.pink),
          criaContainer(Colors.purple),
          criaContainer(Colors.green),
          criaContainer(Colors.red),
          criaContainer(Colors.blue),
        ],
      ),
    );
  }
}
