// Crie um componente que tenha um state(objeto) com as seguintes propriedades vazias:
// Marca, modelo, ano, cor
// Com o useEffect, atribua valores as propriedades do state.

import React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../estilo/estilo';

export default function AtividadeEffect(){
    const[carro, setCarro]= useState({
        marca: '',
        modelo: '',
        ano: '',
        cor: '',
    });

    useEffect(
        () =>{
            setCarro({
                marca:'carroaqui',
                modelo: 'golzola',
                ano: '1992',
                cor: 'branco',
            })
        },[] //colchete para impedir o looping infinito
    )
    console.log(carro)

    return(
        <View style={styles.container}>
            <Text style={styles.subtitleDark}> Atividade de Use Effect </Text>
            <Text>Carro: {carro.marca} </Text>
            <Text>Modelo: {carro.modelo} </Text>
            <Text>Ano: {carro.ano} </Text>
            <Text>Cor: {carro.cor} </Text>


        </View>
    )
    
}