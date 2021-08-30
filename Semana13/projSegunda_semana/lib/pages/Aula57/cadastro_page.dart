import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:validators/validators.dart';

// Crie uma tela de cadastro com os compos;
// * nome
// * sobrenome
// * cpf
// * email
// senha
// Todos os campos devem ter validação

class CadastroPage extends StatefulWidget {
  CadastroPage({Key? key}) : super(key: key);

  @override
  _CadastroPageState createState() => _CadastroPageState();
}

class _CadastroPageState extends State<CadastroPage> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Tela de cadastro"),
      ),
      body: Container(
        padding: EdgeInsets.all(20.0),
        child: Form(
          key: _formKey,
          child: ListView(
            //mainAxisAlignment: MainAxisAlignment.center,
            //crossAxisAlignment: CrossAxisAlignment.stretch,

            children: [
              Text("Os campos com * são obrigatórios"),
              Image.asset("assets/images/imagemcadastro.jpeg"),
              Row(
                children: [
                  Container(
                    width: 140,
                    padding: EdgeInsets.fromLTRB(0, 1, 4, 0),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Nome *', // **** Nome
                        border: OutlineInputBorder(),
                      ),
                      validator: (param) {
                        if (param != null && param.isNotEmpty) {
                          if (!isAlpha(param) && param.length < 2) {
                            return "Digite um nome válido.";
                          }
                        } else {
                          return "Campo obrigatório.";
                        }
                      },
                      keyboardType: TextInputType.name,
                    ),
                  ),
                  Container(
                    width: 140,
                    padding: EdgeInsets.fromLTRB(4, 1, 0, 0),
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Sobrenome *', // **** Sobrenome
                        border: OutlineInputBorder(),
                      ),
                      validator: (param) {
                        if (param != null && param.isNotEmpty) {
                          if (!isAlpha(param) && param.length < 2) {
                            return "Digite um sobrenome válido.";
                          }
                        } else {
                          return "Campo obrigatório.";
                        }
                      },
                      keyboardType: TextInputType.name,
                    ),
                  ),
                ],
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  decoration: InputDecoration(
                    labelText: 'CPF *', // **** CPF
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {
                    if (param != null && param.isNotEmpty) {
                      if (!isNumeric(param) && param.length < 11) {
                        return "Digite CPF válido.";
                      }
                    } else {
                      return "Campo obrigatório.";
                    }
                  },
                  keyboardType: TextInputType.number,
                ),
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Email *', // **** EMAIL
                    border: OutlineInputBorder(),
                  ),
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
                ),
              ),
              Container(
                width: 200,
                padding: EdgeInsets.symmetric(vertical: 8.0),
                child: TextFormField(
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Senha *',
                    border: OutlineInputBorder(),
                  ),
                  validator: (param) {
                    if (param != null && param.isNotEmpty) {
                      if (param.length < 8) {
                        return "Digite uma senha com 8 caracteres ou mais";
                      }
                    } else {
                      return "Campo obrigatório.";
                    }
                  },
                  keyboardType: TextInputType.multiline,
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
                    padding: EdgeInsets.symmetric(vertical: 8),
                    child: Text("Cadastrar"),
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
