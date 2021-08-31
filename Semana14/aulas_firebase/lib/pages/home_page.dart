import 'package:aulas_firebase/controllers/user_controller.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late final UserController userController =
      Provider.of<UserController>(context, listen: false);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Home"),
        actions: [
          IconButton(
              onPressed: () async {
                await userController.logout();
              },
              icon: Icon(Icons.exit_to_app))
        ],
      ),
    );
  }
}