//5 - Crie uma função que recebe dois parametros nomeados 
// e mostra o valor deles.

void mostrar({String email = "gl@email.com", int pin = 1234}) {
print("Credenciais: $email e $pin");
}

void main() {
mostrar (pin: 312312312);
mostrar(email: "jrjrjrjrjr@email.com");
mostrar(pin: 1234455, email: "guigaaaaaa@.com");
}




