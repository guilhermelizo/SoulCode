import React from 'react';
import { View , Text } from 'react-native';

//props >>> constante local que irá receber os valores   - Ele cria automaticamente um objeto ao definir os valores
//  Tudo que for dentro de chaves é {JavaScript}
/**
     * props = {
     * nome:"",
     * login:"",
     * dataCriacao:""
     * }
     */
export default function Usuario(props){
    
    return(
        <View> 
            <Text> Meu Usuário </Text>
            <Text> Nome: {props.nome} </Text>
            <Text> Login: {props.login} </Text>
            <Text> Data Criação: {props.dataCriacao} </Text>
            <Text> --------------------- </Text>
        </View>
    )
}