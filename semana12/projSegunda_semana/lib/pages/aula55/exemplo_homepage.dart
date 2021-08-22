import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  HomePage2State createState() => HomePage2State();
}

class HomePage2State extends State<HomePage> {
  int counter = 0;

  @override
  Widget build(BuildContext context) {
    print("Buildo");
    return Scaffold(
      body: ElevatedButton(
        child: Text('Apertou: $counter'),
        onPressed: () {
          setState(() {
            counter++;
          });
        },
      ),
    );
  }
}
