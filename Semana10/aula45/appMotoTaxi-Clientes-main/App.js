import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState }  from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ListarItemId from './src/componente/ListarItemId';
import ListarItem from './src/componente/ListarItem';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './firebase'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text> listarItem (corporativa)</Text>
      <ListarItemId />

      <Text> listarItem (usuario)</Text>
      <ListarItem />


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
