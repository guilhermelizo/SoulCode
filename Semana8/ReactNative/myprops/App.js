import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Content from './src/componentes/Content' ;
import Footer from './src/componentes/Footer';
import Header from './src/componentes/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Atividade!</Text>
      {/* <Header /> */}
      <Content />
      {/* <Footer /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
