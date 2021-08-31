// signed = usuário logado
// unsigned = usuário deslogado
// loading = usuário carregando

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import '../models/user_model.dart';

enum AuthSate { signed, unsigned, loading }

class UserController extends ChangeNotifier {
  AuthSate authSate = AuthSate.loading;

  final _auth = FirebaseAuth.instance;
  final _db = FirebaseFirestore.instance;

  User? get user => _auth.currentUser;

  UserController() {
    _auth.authStateChanges().listen(
      (user) {
        if (user != null)
          authSate = AuthSate.signed;
        else
          authSate = AuthSate.unsigned;

        notifyListeners();
      },
    );
  }

  Future<void> login(String email, String senha) async {
    await _auth.signInWithEmailAndPassword(
      email: email,
      password: senha,
    );
  }

  Future<void> logout() async {
    await _auth.signOut();
  }

  Future<void> signup(
    String email,
    String senha,
    UserModel payload,
  ) async {
    final credentials = await _auth.createUserWithEmailAndPassword(
      email: email,
      password: senha,
    );
    // Próxima etapa, salvar o payload no firestore
    final uid = credentials.user?.uid;
    final data = payload.toMap();
    data['key'] = uid;

    final doc = _db.collection('usuarios').doc(uid);
    await doc.set(data);
  }
}
