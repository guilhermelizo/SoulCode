import React from 'react';
import { View, Text } from 'react-native';
import { style } from '../Estilos/style';
import CalculadoraCorpo from './CalculadoraCorpo'


export default function Content(){
    return(
        <View style={style.container}> 
            <CalculadoraCorpo />
            
            
        </View>
    )
}