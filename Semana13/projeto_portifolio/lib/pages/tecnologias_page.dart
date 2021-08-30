import 'package:flutter/material.dart';

class TecnologiasPage extends StatefulWidget {
  TecnologiasPage({Key? key}) : super(key: key);

  @override
  _TecnologiasPageState createState() => _TecnologiasPageState();
}

class _TecnologiasPageState extends State<TecnologiasPage> {
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Tecnologias"),
        ),
        body: Column(
          children: [
            Row(
              children: [
                Image.asset('../lib/assets/images/html.png', width: 50),
                Image.asset('../lib/assets/images/css.png'),
                Image.asset('../lib/assets/images/js.png'),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
