import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class Produto {
  final String nome;
  final String picture;
  final double preco;

  Produto(this.nome, this.picture, this.preco);
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final produtos = <Produto>[
    Produto(
      "Bolsa",
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      109.95,
    ),
    Produto(
      "Camisa",
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      22.3,
    ),
    Produto(
      "Jaqueta",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      55.99,
    ),
    Produto(
      "Pulseira",
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      695,
    ),
    Produto(
      "HD Externo",
      "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      64,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    final textStyles = Theme.of(context).textTheme;

    return Scaffold(
      backgroundColor: Colors.white,
      body: ListView.builder(
          itemCount: produtos.length,
          itemBuilder: (BuildContext context, int index) {
            Produto produto = produtos[index];

            return Container(
              decoration: BoxDecoration(border: Border.all()),
              padding: const EdgeInsets.all(16.0),
              margin: const EdgeInsets.all(16.0),
              child: Column(children: [
                Image.network(produto.picture, height: 256),
                Text(produto.nome, style: textStyles.headline4),
                Text(
                  "R\$ ${produto.preco}",
                  style: textStyles.headline5?.copyWith(color: Colors.purple),
                ),
              ]),
            );
          }),
    );
  }
}
