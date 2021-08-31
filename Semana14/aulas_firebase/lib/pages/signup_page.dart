import 'package:aulas_firebase/controllers/user_controller.dart';
import 'package:aulas_firebase/models/user_model.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';


class SignupPage extends StatefulWidget {
  SignupPage({Key? key}) : super(key: key);

  @override
  _SignupPageState createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  String nome = '';
  String email = '';
  String senha = '';

  late final userController = Provider.of<UserController>(
    context,
    listen: false,
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Criar conta"),
      ),
      body: Form(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Nome',
                ),
                onChanged: (texto) => nome = texto,
              ),
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Email',
                ),
                onChanged: (texto) => email = texto,
              ),
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Senha',
                ),
                onChanged: (texto) => senha = texto,
              ),
              ElevatedButton(
                onPressed: () async {
                  final user = UserModel(nome: nome);
                  await userController.signup(email, senha, user);

                  Navigator.pop(context);
                },
                child: Text('Cria conta'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
