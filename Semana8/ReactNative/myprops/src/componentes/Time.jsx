/*
 * 2) crie um componente Time baseado em função, que recebe uma sua chama as seguintes propriedades(props):
 * time, pontos, golsMarcados e golsSofridos.
 * Renderize essas informações de forma organizada.
 * 
 * Chame o componente 3x com valores diferentes.
 * 
 */
import React from 'react';
import { View, Text } from 'react-native';

export default function Time(props){
    return(
        <View> 
            <Text> *********   </Text>
            <Text> Atividade 2:</Text>
            <Text> Time: {props.time} </Text>
            <Text> Pontos: {props.pontos} </Text>
            <Text> Gols Marcados: {props.golsMarcados} </Text>
            <Text> Gols Sofridos: {props.golsSofridos} </Text>

        </View>
        
    )
}