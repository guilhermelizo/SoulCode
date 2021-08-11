import React from 'react';
import { StyleSheet, Text, Button, View, StatusBar, NavigationContainer } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({navigation}){
    return(
        <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center' }}>
            <Text> Home Screen </Text>

            <Button
                title='Ir para Produto'
                onPress={() => navigation.navigate('Produtos')}
            />

            {/* A prop navigation chama a função navigate passando Produtos 
            que no caso sera renderizado e colocado no topo da pilha */}

        </View>

    )
}