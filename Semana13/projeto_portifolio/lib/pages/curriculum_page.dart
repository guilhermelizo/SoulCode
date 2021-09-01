import 'package:flutter/material.dart';

class CurriculumPage extends StatefulWidget {
  @override
  _CurriculumPageState createState() => _CurriculumPageState();
}

class _CurriculumPageState extends State<CurriculumPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Curriculum"),
      ),
      body: ListView(
        children: [
          Container(
            margin: EdgeInsets.all(1),
            child: Column(
              children: [
                Text("Nome: Guilherme Augusto Lizo de Oliveira"),
                Text("Nasc.: 11/07/1992 -> 29 anos"),
                Text("Telefone: (11) 97053-0338"),
              ],
            ),
          ),
          SizedBox(
            width: 150,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(""),
                Text("Academico:", style: TextStyle(fontSize: 18)),
                Text(""),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Análise e Desenvolvimento de Sistemas", style: TextStyle(fontSize: 16)),
                    Text("[UnicSul]"),
                    Text("2° Semestre - Cursando"),
                    Text("______________________"),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Desenvolvimento de Jogos", style: TextStyle(fontSize: 16)),
                    Text("[Fatec-SP]"),
                    Text("5° Semestre - Trancada"),
                    Text("______________________"),
                  ],
                ),
                Text("Idiomas: Inglês-Avançado / Espanhol-Básico"),
                Text(""),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(" Extra Curricular: ", style: TextStyle(fontSize: 18)),
                    Text(""),
                    Text("Curso Análise e desenvolvimento de sistemas - ITB"),
                    Text("Java Programmer Módulo I - Impacta"),
                    Text("Java Programmer Módulo II - Impacta"),
                    Text("Desenvolv. para dispositivos móveis - Impacta"),
                    Text("SQL Server 2008 - Impacta"),
                    Text("Pacote Office 2000 - Microcamp"),
                    Text("Aprendendo a Empreender - Sebrae"),
                    Text("Finanças (Básico) - Sebrae"),
                    Text("______________________"),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      " Historico de Carreira:", style: TextStyle(fontSize: 18)),
                    Text(""),
                    Text("Escola do Futuro: 01/2015 - 01/2016", style: TextStyle(fontSize: 16)),
                    Text("Analista de Suporte (Estágio)"),
                    Text(" - Suporte ao Servidor; "),
                    Text(" - Suporte presencial e remoto;"),
                    Text(" - Suporte a redes;"),
                    Text(" - Geração de relatórios;"),
                    Text(" - Manutenção de Hardware."),
                    Text("____________"),
                    Text(""),
                    Text("Exact Target: 03/2014 - 09/2014", style: TextStyle(fontSize: 16)),
                    Text("suporte para Marketing Cloud (Estágio)"),
                    Text(" - Elaboração de relatórios;"),
                    Text(" - Testes em e-mail marketing."),
                    Text("____________"),
                    Text(""),
                    Text("Grupo Pão de Açúcar : 11/2012 - 07/2013", style: TextStyle(fontSize: 16)),
                    Text("Assistente A"),
                    Text(" - Gestão de Abastecimento."),
                    Text(" - Gerenciamento da rede de Mini Mercados;"),
                    Text(" - Geração de relatórios;"),
                    Text(" - Análise de estoque;"),
                    Text(" - Emissão de pedidos;"),
                    Text(" - Conhecimentos em Order."),
                    Text("____________"),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
