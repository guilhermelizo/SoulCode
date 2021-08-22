import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int counter = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueGrey,
      appBar: AppBar(
        title: Text('Aula scaffold'),
        centerTitle: true,
        leading: Icon(Icons.favorite),
      ),
      floatingActionButton: FloatingActionButton(
        //fab
        child: Icon(Icons.add_a_photo),
        onPressed: () {},
      ),
    );
  }
}
