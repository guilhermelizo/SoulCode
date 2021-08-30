import 'package:flutter/material.dart';
import 'package:primeiro_projeto/pages/Aula59/dados_page.dart';
// import 'package:my_first_app/pages/dados_page.dart';

class LoginPage extends StatefulWidget {
  LoginPage({Key? key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  String email = '';
  String senha = '';

  @override
  Widget build(BuildContext context) {
    final textStyles = Theme.of(context).textTheme;

    return Scaffold(
        appBar: AppBar(
          title: Text('Login'),
          centerTitle: true,
          leading: Icon(Icons.text_fields),
        ),
        body: ListView(
          children: [
            Padding(
              padding: EdgeInsets.all(24.0),
              child: Form(
                key: _formKey,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Padding(
                        padding: const EdgeInsets.only(bottom: 50),
                        child: Image.asset('assets/images/icon2.png',
                            height: 150)),
                    Text(
                      'Bem-vindo(a) de volta!',
                      style: textStyles.subtitle1,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 20),
                      child: TextFormField(
                        validator: (String? texto) {
                          if (texto != null && texto.isNotEmpty) {
                            if (!texto.contains('@') || texto.length < 8) {
                              return 'Digite um email válido.';
                            }
                          } else {
                            return 'Campo vazio, informar seu email.';
                          }
                        },
                        onChanged: (String texto) {
                          email = texto;
                        },
                        keyboardType: TextInputType.emailAddress,
                        decoration: InputDecoration(
                          labelText: 'Email',
                          border: OutlineInputBorder(),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 15),
                      child: TextFormField(
                        validator: (String? texto) {
                          if (texto != null && texto.isNotEmpty) {
                            if (texto.length < 6) {
                              return 'Senha inválida. Deve possuir no mínimo 6 caracteres.';
                            }
                          } else {
                            return 'Campo vazio, informar sua senha.';
                          }
                        },
                        onChanged: (String texto) {
                          senha = texto;
                        },
                        obscureText: true,
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                            labelText: 'Senha',
                            border: OutlineInputBorder(),
                            suffixIcon: Icon(Icons.visibility)),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 20.0),
                      child: ElevatedButton(
                          onPressed: () async {
                            if (_formKey.currentState?.validate() ?? false) {
                              final data = await Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) =>
                                        DadosPage(email, senha),
                                  ));

                              print(data);
                            }
                          },
                          child: Padding(
                            padding: EdgeInsets.symmetric(vertical: 16.0),
                            child: Text('Login'),
                          )),
                    )
                  ],
                ),
              ),
            ),
          ],
        ));
  }
}
