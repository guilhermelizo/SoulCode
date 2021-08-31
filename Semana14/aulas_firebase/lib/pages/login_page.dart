import 'package:aulas_firebase/controllers/user_controller.dart';
import 'package:aulas_firebase/pages/signup_page.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class LoginPage extends StatefulWidget {
  LoginPage({Key? key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  String email = "";
  String senha = "";

  // late - inicialização tardia
  late final UserController userController =
      Provider.of<UserController>(context, listen: false);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Login"),
      ),
      body: Form(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: 'Email'),
                onChanged: (texto) => email = texto,
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Senha'),
                obscureText: true,
                onChanged: (texto) => senha = texto,
              ),
              ElevatedButton(
                onPressed: () async {
                  await userController.login(email, senha);
                },
                child: Text("Login"),
              ),
              Text("OU"),
              OutlinedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => SignupPage(),
                    ),
                  );
                },
                child: Text("Criar conta"),
              )
            ],
          ),
        ),
      ),
    );
  }
}
