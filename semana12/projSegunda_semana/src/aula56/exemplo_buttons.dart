import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final textControler = TextEditingController();
  String password = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Exemplo', style: TextStyle(fontSize: 30)),
          centerTitle: true,
          toolbarHeight: 100,
        ),
        body: Column(
          children: [
            Container(
              alignment: Alignment.center,
              margin: EdgeInsets.symmetric(vertical: 50),
              width: 393,
              height: 50,
              //ElevatedButton
              child: Container(
                child: ElevatedButton(
                  child: Text('ElevatedButton'),
                  style: ElevatedButton.styleFrom(
                      primary: Colors.blue, elevation: 10),
                  onPressed: (() {}),
                ),
              ),
            ),
            Container(
              alignment: Alignment.center,
              margin: EdgeInsets.symmetric(vertical: 50),
              width: 393,
              height: 50,
              //TextButton
              child: Container(
                child: TextButton(
                  child: Text('TextButton'),
                  onPressed: (() {}),
                ),
              ),
            ),
            Container(
              alignment: Alignment.center,
              margin: EdgeInsets.symmetric(vertical: 50),
              width: 393,
              height: 50,
              //TextButton
              child: Container(
                child: IconButton(
                  iconSize: 48,
                  icon: Icon(
                    Icons.favorite,
                    color: Colors.indigo,
                  ),
                  onPressed: (() {}),
                ),
              ),
            ),
            Container(
              alignment: Alignment.center,
              margin: EdgeInsets.symmetric(vertical: 50),
              width: 393,
              height: 50,
              //TextButton
              child: Container(
                child: OutlinedButton(
                  child: Text('OutlinedButton'),
                  onPressed: (() {}),
                ),
              ),
            ),
          ],
        ));
  }
}
