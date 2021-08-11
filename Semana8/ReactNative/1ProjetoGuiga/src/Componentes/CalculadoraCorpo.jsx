import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { style } from '../Estilos/style'

export default function calculadoraCorpo(){

    const Butaum = ({ onPress, operador }) => {
        return (
            <TouchableOpacity  onPress={onPress} style={style.buttonLinha}>
            <Text>{operador}</Text>
            </TouchableOpacity>
        )
    } 

    const [valores, setValores] = useState({
         a: 0,
         b: 0,
     });   

    const [result, setResult] = useState(0);


    return (
        <View style={style.calculadoraCorpo}>   

                <Text> C A L C U L A D O R A : </Text>

        {/**********************  VISOR  ********************/}
            <View style= {style.visor}>
                <Text style= {style.visorInput}> O Resultado é: {result} 
                </Text>
            </View>
        {/***************** INICIO DA LINHA 1  **************/}
            <View style= {style.linha}>
                <Butaum onPress={() => setResult(valores.a + valores.b)} operador={"+"} />
                <Butaum onPress={() => setResult(valores.a - valores.b)} operador={"-"} />
                <Butaum onPress={() => setResult(valores.a * valores.b)} operador={"*"} />
                <Butaum onPress={() => setResult(valores.a / valores.b)} operador={"/"} />
            </View>
            {/***************** INICIO DA LINHA 2  **************/}
            <View style= {style.linha}>
                <Butaum onPress={() => setResult(valores.a % valores.b)} operador={"%"} />
                <Butaum onPress={() => setResult(valores.a ** 2)} operador={"a²"} />
                <Butaum onPress={() => setResult(valores.b ** 2)} operador={"b²"} />
                <Butaum onPress={() => setResult(valores.a ** valores.b)} operador={"a^b"} />
            </View>
            {/*************** INPUT VALORES A E B ***************/}
            <View style= {style.linha}>
                    <TextInput 
                        keyboardType="numeric"
                        style={style.visorAB} 
                        placeholder= "Valor A"
                        onChangeText = {(valor) => setValores({ 
                            ...valores, a: Number(valor)
                        })}
                    />
                    <TextInput 
                        keyboardType="numeric"
                        style={style.visorAB}
                        placeholder= "Valor B"
                        onChangeText={(valor) => setValores({
                            ...valores, b: Number(valor)
                        })}
                    />
            </View>
        </View>
    )
}
                