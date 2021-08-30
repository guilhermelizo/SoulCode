import 'package:flutter/material.dart';

class CurriculumPage extends StatefulWidget {
  CurriculumPage({Key? key}) : super(key: key);

  @override
  _CurriculumPageState createState() => _CurriculumPageState();
}

class _CurriculumPageState extends State<CurriculumPage> {
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Curriculum"),
        ),
        body: Column(
          children: [
            Row(
              children: [
               
              ],
            ),
          ],
        ),
      ),
    );
  }
}
