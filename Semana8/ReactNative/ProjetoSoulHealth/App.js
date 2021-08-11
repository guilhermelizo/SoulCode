import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { style } from './src/componentes/estilos/estilo';

import Header from './src/componentes/Header';
import Footer from './src/componentes/Footer';
import Informacao from './src/componentes/Informacao';
import ComponenteIMC from './src/componentes/ComponenteIMC';
import Conteudo from './src/componentes/Conteudo';

export default function App() {
  return (
    <SafeAreaView style={style.corpoAPP}>
      <ScrollView>

      <Header  />

      <Conteudo />
      
      
      <Footer />
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}



