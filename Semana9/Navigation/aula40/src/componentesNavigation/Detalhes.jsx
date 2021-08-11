import React from 'react';
import { StyleSheet, Text, Button, View, StatusBar, NavigationContainer } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Detalhes({route, navigation}){
      //Constante recebendo os valores passados no route na chave params
      const dados = route.params;

    return(
        <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center' }}>
            <Text> Tela de Detalhes </Text>
            {/* mostrando os dados recebidos no formato de objeto.chave  */}
            <Text>{`\ncódigo: ${dados.id} \nproduto: ${dados.nome} \nR$: ${dados.preco}`}</Text>

            <Button
                title='Ir para Produtos'
                onPress={() => navigation.push('Produtos')}
            /> 
            <Text> </Text>

            <Button
                title='Tela Anterior'
                onPress={() => navigation.goBack()}
            /> 
            <Text> </Text>

            <Button    // Se for utilizar a push para voltar, neste caso ela so volta ao topo da pilha. Com o pop to top ela fecha as outras e fica na home
                title='Retornar a Home'
                onPress={() => navigation.popToTop()}
            />

        </View>

    )
}