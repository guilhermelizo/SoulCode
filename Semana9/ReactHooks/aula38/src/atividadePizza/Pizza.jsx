import React, {useState, createContext, useContext} from "react";
import { View, Text } from "react-native";
import {styles} from '../estilo/estilo';
import {  ContextPizza } from "./ComponenteContext";
    // {Nome do context criado}  --- from ---  nome do componente onde foi criado

export default function Pizza(){
    //Aqui estamos extraindo os dados do objeto (destruction),
    //e permitindo o uso dos dados, através do useContexto
    //chamando o MeuContexto
    const{pizza} = useContext(ContextPizza);

    return(
        <View> 
            <Text>Pizza </Text>
            <Text>Sabor: {pizza.sabor} </Text>
            <Text>Ingrediente: {pizza.ingrediente} </Text>
            <Text>Valor: {pizza.valor} </Text>
            <Text>Adicional: {pizza.adicional} </Text>

        </View>
    )
}