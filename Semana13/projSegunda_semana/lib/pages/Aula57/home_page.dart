// mport 'package:flutter/material.dart';

// class HomePage extends StatefulWidget {
//   @override
//   _HomePageState createState() => _HomePageState();
// }

// class _HomePageState extends State<HomePage> {
//   Widget criaContainer(Color color) => Container(
//     height: 56,
//     width: 56,
//     decoration: BoxDecoration(
//       color: color,
//       borderRadius: BorderRadius.circular(8),
//     ),
//   );

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//         appBar: AppBar(
//           title: Text("SoulCode Template"),
//         ),
//         body: Container(
//           color: Colors.black,
//           child: Column(
//             children: [
//               criaContainer(Colors.orange),
//               criaContainer(Colors.pink),
//               criaContainer(Colors.green),
//               Container(
//                 color: Colors.brown,
//                 child: Row(
//                   mainAxisAlignment: MainAxisAlignment.center,
//                   children: [
//                     criaContainer(Colors.lime),
//                     criaContainer(Colors.indigo),
//                   ],
//                 ),
//               )
//             ],
//           ),
//         ));
//   }
// }