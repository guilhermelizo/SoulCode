import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { style } from './estilos/estilo';

//// 3) Componente Informação:

// Esse
// componente deve ser um componente baseado em função que receba 3 informações
// via props: titulo, autor e conteúdo. O componente deve renderizar à informação de
// maneira organizada.


// Sem o pros, em const, teria-se que usar o This
export default function Informacao(props){

    return(
        <View style={style.corpoINFO}>
            <Text style={style.tituloINFO}>{props.titulo} </Text>
            <Text style={style.autorINFO}> {props.autor} </Text>
            <Text style={style.conteudoINFO}> {props.conteudo} </Text>
        </View>
    )
}

