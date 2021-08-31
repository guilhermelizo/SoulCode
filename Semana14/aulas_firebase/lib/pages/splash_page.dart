import '../controllers/user_controller.dart';
import 'home_page.dart';
import 'login_page.dart';
import '../widgets/splash_loading_widget.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class SplashPage extends StatefulWidget {
  SplashPage({Key? key}) : super(key: key);

  @override
  _SplashPageState createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  @override
  Widget build(BuildContext context) {
    return Consumer<UserController>(
      builder: (context, userController, child) {
        switch (userController.authSate) {
          case AuthSate.signed:
            return HomePage();
          case AuthSate.unsigned:
            return LoginPage();
          case AuthSate.loading:
            return SplashLoadingWidget();
        }
      },
    );
  }
}
