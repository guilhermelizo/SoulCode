import 'package:flutter/material.dart';

class TecnologiasPage extends StatefulWidget {
  TecnologiasPage({Key? key}) : super(key: key);

  @override
  _TecnologiasPageState createState() => _TecnologiasPageState();
}

class _TecnologiasPageState extends State<TecnologiasPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Tecnologias"),
      ),
      body: Container(
        margin: EdgeInsets.all(10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Image.asset('../lib/assets/images/tecnologias/html.png',
                        width: 80),
                        Text("HTML")
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Image.asset('../lib/assets/images/tecnologias/css.png',
                        width: 80),
                        Text("CSS")
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Image.asset('../lib/assets/images/tecnologias/js.png',
                        width: 80),
                        Text("JavaScript")
                      ]
                  ),
                ),
              
              ]),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Image.asset('../lib/assets/images/tecnologias/jquery.png',
                        width: 80),
                        Text("JQuery")
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Image.asset('../lib/assets/images/tecnologias/bootstrap.png',
                        width: 80),
                        Text("Bootstrap")
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Image.asset('../lib/assets/images/tecnologias/firebase.png',
                        width: 80),
                        Text("Firebase")
                      ]
                  ),
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Image.asset('../lib/assets/images/tecnologias/reactnative.png',
                        width: 80),
                        Text("ReactNative")
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Image.asset('../lib/assets/images/tecnologias/dart.png',
                        width: 80),
                        Text("Dart")
                      ]
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: Column(
                    children: [
                      Image.asset('../lib/assets/images/tecnologias/flutter.png',
                        width: 80),
                        Text("Flutter")
                      ]
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
