import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final textController = TextEditingController();
  String valor = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Text & TextField'),
        centerTitle: true,
      ),
      body: Center(
        child: Container(
          width: 300,
          child: TextField(
            controller: textController,
            // obscureText: true, // para usar em senhas
            keyboardType: TextInputType.number,
            onSubmitted: (texto) {
              // executa quando aperta enter
              // textController.text = 'soulcode';
            },
            onChanged: (texto) {
              // executa quando digita
              valor = texto;
            },
            style: meuEstilo,
            decoration: InputDecoration(
              labelText: 'Sua senha',
              hintText: 'Sua senha',
              border: OutlineInputBorder(),
              prefixIcon: Icon(Icons.lock),
              suffixIcon: Icon(Icons.visibility),
            ),
          ),
        ),
      ),
    );
  }
}

// A estilização pode ser criada e jogada em uma variável, tornando assim
// a fácil reutilização do código apenas chamando esta variável nos locais que
// buscar ter esta estilização. Lembrando um pouco de Styled Components do React Native
const meuEstilo = TextStyle(
  fontWeight: FontWeight.w300,
  fontStyle: FontStyle.italic,
  fontSize: 32,
  fontFamily: 'monospace',
  color: Colors.amber,
  decoration: TextDecoration.underline,
);

const textFieldStyle = TextField(
  obscureText: true,
  keyboardType: TextInputType.number,
  decoration: InputDecoration(
    // labelText: 'Sua senha',
    hintText: 'Sua senha',
    border: OutlineInputBorder(),
  ),
);
