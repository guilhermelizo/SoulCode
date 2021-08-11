// ARRUMAR AINDA ESTA COMO DETALHES


import React from 'react';
import { StyleSheet, Text, Button, View, StatusBar, NavigationContainer } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { style } from '../styles/style';

export function DicasComponente(props){

    return(
        <View>
            <Text>{props.titulo} </Text>
            <Text> {props.dica} </Text>
        </View>
    )
}

export default function Detalhes({navigation}){
    return(
        <View style={style.containerhome}>
            <View style={style.containerDicas}>
                <DicasComponente titulo="1. Faça um orçamento" dica="Elabore uma lista com todos os seus custos fixos, como água, luz, telefone, aluguel etc." />
                <DicasComponente titulo="2. Estabeleça metas para economizar" dica="A economia não pode ser feita somente com o dinheiro que sobrou no final do mês. Ela deve ser um objetivo." />
                <DicasComponente titulo="3. Restrinja seus gastos do dia a dia" dica="Da mesma forma que você deve estipular metas para economizar, uma boa ideia é definir metas para os gastos." />
            </View>

            <Button
                title='Voltar para Home'
                onPress={() => navigation.navigate('Home')}
            /> 

        </View>

    )
}