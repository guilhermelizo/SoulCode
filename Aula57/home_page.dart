import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Widget criaContainer(Color color) => Container(
        height: 56,
        width: 56,
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(8),
        ),
      );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Cadastro'),
          centerTitle: true,
          toolbarHeight: 80,
        ),
        body: Container(
          color: Colors.black,
          //height: 200,
          // width: 200,
          child: Column(
            //mainAxisAlignment (Vertical)
            // mainAxisAlignment: MainAxisAlignment.end,
            // mainAxisAlignment: MainAxisAlignment.center,
            // mainAxisAlignment: MainAxisAlignment.spaceBetween,
            // mainAxisAlignment: MainAxisAlignment.spaceAround,
            // mainAxisAlignment: MainAxisAlignment.spaceEvenly,

            //crossAxisAlignment(Horizontal)
            // crossAxisAlignment: CrossAxisAlignment.center,
            // crossAxisAlignment: CrossAxisAlignment.end,
            // crossAxisAlignment: CrossAxisAlignment.start,
            // crossAxisAlignment: CrossAxisAlignment.stretch,

            children: [
              criaContainer(Colors.orange),
              criaContainer(Colors.pink),
              criaContainer(Colors.green),
              Expanded(
                child: Container(
                    color: Colors.brown,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        criaContainer(Colors.lime),
                        Expanded(
                          child: Container(
                            color: Colors.blue,
                          ),
                        ),
                      ],
                    )),
              ),
              Expanded(
                  child: Container(
                color: Colors.red,
              )),
              Expanded(
                  child: Container(
                color: Colors.orange,
              )),
            ],
          ),
        ));
  }
}
