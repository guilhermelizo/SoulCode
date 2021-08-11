import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Content from './src/componentes/Content';
import Header from './src/componentes/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <Content />

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
