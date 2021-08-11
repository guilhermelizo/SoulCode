import React, {useState, createContext, useContext} from "react";
import { View, Text } from "react-native";
import {styles} from '../estilo/estilo';

import { ContextAtividade, ContextAtv } from "./ContextAtividade";


export default function Leide(){
    //Aqui estamos extraindo os dados do objeto (destruction),
    //e permitindo o uso dos dados, através do useContexto
    //chamando o MeuContexto

    const{atividades} = useContext(ContextAtv);

    return(
        <View>
            <Text>Usando o Contexto - leide</Text>
            <Text>Quantidade de exercicios: {atividades} </Text>
        </View>
    )
}