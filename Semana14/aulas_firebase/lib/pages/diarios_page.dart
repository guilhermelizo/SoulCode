import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:diario_viagens/controllers/user_controller.dart';
import 'package:diario_viagens/models/diario_model.dart';
import 'package:diario_viagens/pages/edit_diario_page.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';


class DiariosPage extends StatefulWidget {
  @override
  _DiariosPageState createState() => _DiariosPageState();
}

class _DiariosPageState extends State<DiariosPage> {
  late final userController =
      Provider.of<UserController>(context, listen: false);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Diários'),
        centerTitle: true,
      ),
      body: StreamBuilder<QuerySnapshot<Map<String, dynamic>>>(
        stream: FirebaseFirestore.instance
            .collection('diarios')
            .where('ownerKey', isEqualTo: userController.user!.uid)
            .orderBy('titulo')
            .snapshots(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Center(
              child: CircularProgressIndicator(),
            );
          }
          final diarios = (snapshot.data!.docs.map(
            (map) {
              final data = map.data();
              return DiarioModel.fromMap(data, map.id);
            },
          ).toList());

          return ListView.builder(
            itemCount: diarios.length,
            itemBuilder: (context, index) {
              final diario = diarios[index];
              return Column(
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          color: Colors.black87,
                          child: Text(
                            diario.titulo,
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 25, color: Colors.white),
                          ),
                        ),
                      ),
                    ],
                  ),
                  Row(
                    children: [
                      Expanded(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          color: Colors.black12,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              FaIcon(FontAwesomeIcons.globeAmericas),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 10),
                                child: Text(
                                  diario.local,
                                  textAlign: TextAlign.center,
                                  style: TextStyle(fontSize: 18),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                  Row(
                    children: [
                      Expanded(
                        child: Container(
                          padding: EdgeInsets.all(20),
                          child: Text(
                            diario.diario,
                            style: TextStyle(fontSize: 16),
                            textAlign: TextAlign.justify,
                          ),
                        ),
                      ),
                    ],
                  ),
                  Row(
                    children: [
                      Expanded(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          child: diario.imagem != null
                              ? Image.memory(
                                  diario.imagem!,
                                )
                              : Container(
                                  child: Icon(Icons.no_photography),
                                  width: 100,
                                  height: 250,
                                  color: Colors.blue,
                                ),
                        ),
                      ),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Container(
                        margin: EdgeInsets.only(bottom: 20),
                        child: IconButton(
                            onPressed: () {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) =>
                                      EditDiarioPage(diario: diario),
                                ),
                              );
                            },
                            icon: FaIcon(
                              FontAwesomeIcons.edit,
                              size: 25,
                            )),
                      ),
                      Container(
                        margin: EdgeInsets.only(bottom: 20),
                        child: IconButton(
                            onPressed: () async {
                              await FirebaseFirestore.instance
                                  .collection('diarios')
                                  .doc(diario.key)
                                  .delete();
                            },
                            icon: FaIcon(
                              FontAwesomeIcons.trashAlt,
                              size: 25,
                            )),
                      ),
                    ],
                  )
                ],
              );
            },
          );
        },
      ),
    );
  }
}
