//Realizando o import do useContext para consumir as informações que foram permitidas
import React, {useState, createContext, useContext} from "react";
import { View, Text } from "react-native";
import {styles} from '../estilo/estilo';
//Para consumir os dados que o provider liberou,
//devemos importar o MeuContexto para dentro do componente.
//Detalhe, se um componente importar o contexto não tendo permissão
// de acesso, ele não pode recuperar os dados.
// Pos ele não está na lista de convidados do provider =D
import { MeuContexto } from "./ExCreateContext";


export default function ExUseContext(){
    //Aqui estamos extraindo os dados do objeto (destruction),
    //e permitindo o uso dos dados, através do useContexto
    //chamando o MeuContexto

    const{dados} = useContext(MeuContexto);

    return(
        <View style={styles.container}>
            <Text style={styles.titleDark}>Usando o Contexto</Text>
            <Text>Dados do Contexto - Nome: {dados.nome} </Text>
            <Text>Dados do Contexto - Valor: {dados.valor} </Text>
        </View>
    )
}
