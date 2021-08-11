import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, NavigationContainer } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { style } from '../styles/style';

export default function Deposito({navigation}){
    //Constante dados com informações em objeto
    const [dadosBancarios, setDadosBancarios] = useState({
        cliente: "Reactivilson Praia Nostra",
        conta: 16489548,
        agencia: 160,
        tipoConta: "Corrente",
        saldoBancario: 1000000,
    });

    return(
        <View style={style.containerhome}>
            <Text>{`Cliente: ${dadosBancarios.cliente}`}</Text>
            <Text>{`Saldo Atual: ${dadosBancarios.saldoBancario}`}</Text>

            <Text> Quer enriquecer ainda mais? Veja algumas dicas! </Text>
            <Button
                title='Dicas financeiras aqui!'
                onPress={() => navigation.navigate('Dicas')}
            />
            {/* passando dados como parametro da função .navigate  */}

        </View>

    )
}