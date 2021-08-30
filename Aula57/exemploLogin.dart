import 'package:flutter/material.dart';
import 'package:primeiro_projeto/main.dart';

class LoginPage extends StatefulWidget {
  LoginPage({Key? key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    final textStyles = Theme.of(context).textTheme;

    return Scaffold(
      appBar: AppBar(
        title: Text("Login"),
      ),
      body: Column(
        children: [
          Text(
            "Entrar",
            style: textStyles.headline4,
          ),
          Text(
            "Bem vindo de volta!",
            style: textStyles.subtitle1,
          ),
          TextField(),
          TextField(),
          ElevatedButton(
            onPressed: () {},
            child: Text("Login"),
          )
        ],
      ),
    );
  }
}
