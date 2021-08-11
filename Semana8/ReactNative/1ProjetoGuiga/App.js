import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import Content from './src/Componentes/Content'
import Footer from './src/Componentes/Footer';
import Header from './src/Componentes/Header'
import { style } from './src/Estilos/style';

export default function App() {
  return (
    <SafeAreaView style={style.container}>

       
      <Header />
      <Content />
      <Footer />
      

      <StatusBar style="Content" />
    </SafeAreaView>
  );
}





