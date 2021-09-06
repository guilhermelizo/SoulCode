import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:diario_viagens/controllers/user_controller.dart';
import 'package:diario_viagens/models/user_model.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';


/// Exercício - Crie uma tela separada para listar os usuários.
/// -----> USANDO FUTURE BUILDER <-----
/// Destacar o usuário que está logado. 

class _ListaUsuariosPageState extends State<ListaUsuariosPage> {
  @override
  Widget build(BuildContext context) {
    // ignore: unused_local_variable
    late final userController =
        Provider.of<UserController>(context, listen: false);
    return Scaffold(
      appBar: AppBar(
        title: Text(''),
      ),
      body: FutureBuilder<QuerySnapshot<Map<String, dynamic>>>(
        future: FirebaseFirestore.instance.collection('usuarios').get(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return Center(
              child: Lottie.network(
                  'https://assets5.lottiefiles.com/packages/lf20_jny63J.json%27),
            );
          }
          if (snapshot.hasError) {
            return Text('Error');
          }
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Text('Loading');
          }

          final users = (snapshot.data!.docs.map((map) {
            final data = map.data();
            return UserModel.fromMap(data);
          }).toList());

          return ListView.builder(
            itemCount: users.length,
            itemBuilder: (context, index) {
              final user = users[index];
              return ListTile(
                title: Row(
                  children: [
                    user.key == userController.user!.uid
                        ? Text('Usuário logado: ${user.nome}')
                        : Text('Outro usuário: ${user.nome}'),
                  ],
                ),
              );
            },
          );
        },
      ),
    );
  }
}