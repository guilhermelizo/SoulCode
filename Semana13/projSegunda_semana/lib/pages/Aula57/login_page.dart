import 'package:flutter/material.dart';
import 'package:primeiro_projeto/pages/Aula57/cadastro_page.dart';

class LoginPage extends StatefulWidget {
  LoginPage({Key? key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    final textStyles = Theme.of(context).textTheme;

    return Scaffold(
      appBar: AppBar(
        title: Text("Login"),
      ),
      body: Padding(
        padding: EdgeInsets.all(24.0),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text("Entrar", style: textStyles.headline4),
              Text("Bem vindo de volta", style: textStyles.subtitle1),
              TextFormField(
                validator: (param) {
                  if (param != null && param.isNotEmpty) {
                    if (!param.contains("@") || param.length < 8) {
                      return "Digite um email válido.";
                    }
                  } else {
                    return "Campo obrigatório.";
                  }
                },
                keyboardType: TextInputType.emailAddress,
                decoration: InputDecoration(
                  labelText: 'Email',
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 8),
              TextFormField(
                validator: (param) {
                  if (param != null && param.isNotEmpty) {
                    if (!param.contains("@") || param.length < 8) {
                      return "Digite uma senha com 8 caracteres ou mais";
                    }
                  } else {
                    return "Campo obrigatório.";
                  }
                },
                obscureText: true,
                decoration: InputDecoration(
                  labelText: 'Senha',
                  border: OutlineInputBorder(),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8.0),
                child: ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState?.validate() ?? false) {
                      print('Login realizado!');
                    }
                  },
                  child: Padding(
                    padding: EdgeInsets.symmetric(vertical: 16),
                    child: Text("Login"),
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8.0),
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => CadastroPage()));
                  },
                  child: Padding(
                    padding: EdgeInsets.symmetric(vertical: 16),
                    child: Text("Cadastre-se"),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
