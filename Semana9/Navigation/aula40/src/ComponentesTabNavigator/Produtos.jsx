import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, NavigationContainer } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Produtos({navigation}){
    //Constante dados com informações em objeto
    const dados ={
        id: 1,
        nome: 'Playstashow',
        preco: 3000,
    }

    return(
        <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center' }}>
            <Text> Tela de Produtos </Text>
            {/* Mostrando o nome do produto, os outros serão vistos em detalhes  */}
            <Text>{`produto: ${dados.nome}`}</Text>

            <Button
                title='Ir para Detalhes'
                onPress={() => navigation.navigate('Detalhes')}
            />
            {/* passando dados como parametro da função .navigate  */}

        </View>

    )
}