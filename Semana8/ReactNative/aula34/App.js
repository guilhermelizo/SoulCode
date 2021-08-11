import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';
import Cadastro from './src/componentes/Cadastro';
import { styles } from './Styles/style';
import Produto from './src/Componentes/Produto';



export default function App() {
  return (
   <View>
      <SafeAreaView style={styles.containerGL}>
        <StatusBar hidden ={false} backgroundColor = "#00BCD4"></StatusBar> 
        {/* <Header />
        <Text> Aula 33! </Text>
        <Content />
        <Footer /> */}
        <View style={styles.containerGL}>
        {/* <Cadastro /> */}
        <Text> --- </Text>
        <Produto />
        </View>
      </SafeAreaView>
    </View>
   
  );
}

