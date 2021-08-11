import React, {useState, createContext, useContext} from "react";
import { View, Text } from "react-native";
import {styles} from '../estilo/estilo';

import {  ContextAtv } from "./ContextAtividade";
    // {Nome do context criado}  --- from ---  nome do componente onde foi criado

export default function Filipe(){
    //Aqui estamos extraindo os dados do objeto (destruction),
    //e permitindo o uso dos dados, através do useContexto
    //chamando o MeuContexto
    const{atividades} = useContext(ContextAtv);

    return(
        <View>
            <Text>Usando o Contexto - Filipe</Text>
            <Text>Dados do Contexto - Quantidade de exercicios: {atividades} </Text>
        </View>
    )
}