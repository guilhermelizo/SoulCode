import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, StatusBar, NavigationContainer, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { style } from '../styles/style';
import Header from './Header';
import Deposito from './Deposito';

export default function Home({navigation}){
    return(
        
        <View style={style.containerhome}>
            <View style={style.dadosBancarios}>
                <Text> Cliente: </Text> 
                <Text> Conta: </Text> 
                <Text> Agencia: </Text> 
                <Text> Tipo de Conta: </Text> 
                <Text> Saldo Atual: </Text> 
            </View>


            <Text> Página Inicial </Text>
            <Button
                title='Entrar'
                onPress={() => navigation.navigate('Deposito')}
            />

            {/* A prop navigation chama a função navigate passando Produtos 
            que no caso sera renderizado e colocado no topo da pilha */}

        </View>

    )
}