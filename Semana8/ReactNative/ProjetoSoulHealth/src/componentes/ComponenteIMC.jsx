// Esse
// componente deve ter um formulário que possua campos para peso e altura. Ao
// clicar no botão, Realizar o calculo do Imc e mostrar seu resultado com base nas
// seguintes situações:
// Abaixo do peso              
// o  
// 17 a 18,4 kg/m2               Fadiga,
// stress, ansiedade
// Peso normal    
// o  
// 18,5 a 24,9 kg/m2           Menor risco de doenças cardíacas e vasculares
// Acima do peso
// o  
// 25 a 29,9 kg/m2               Fadiga,
// má circulação, varizes

// 4.1) Mostrar o teclado numérico quando o usuário tentar
// inserir uma informação no input.
// 4.2) Utilizar states para controlar os campos de TextInput
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, onPress } from 'react-native';
import { style } from './estilos/estilo';

export default function ComponenteIMC() {
    const [result, setResult] = useState(0);

    const [valores, setValores] = useState({
        altura: 0,
        peso: 0,
    });
    
    const [mensagem, setMensagem] = useState("")

    const BtnCalc = ({ onPress }) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <Text>Calcule seu IMC</Text>
            </TouchableOpacity>
        )
    }
    
    const calculaIMC = () => {
         const imc = (valores.peso / (valores.altura * 2)).toFixed(2)
         setResult(imc)

        if ( imc <= 18.4 ) {
            setMensagem(` --- Baixo IMC - Fadiga, stress, ansiedade`)
        }else if ( imc <= 24.9) { 
            setMensagem(`--- Menor risco de doenças cardíacas e vasculares`)
        }else { 
            setMensagem(`--- Alto IMC - Fadiga, má circulação, varizes`)
        }
    }

    
    return (
        <View style={style.corpoIMCFundo}>
            <View style={style.corpoIMC}>


                <Text> Descubra seu IMC!!! </Text>

                {/**********************  VISORES ********************/}
                <View style={style.visor}>
                    <Text style={style.visorInput}> O Resultado é: --- {result}
                    </Text>
                </View>
                <View style={style.visor}>
                    <Text style={style.visorMensagem}> {mensagem}  ---
                    </Text>
                </View>

                {/********** INPUT VALORES ALTURA E PESO *************/}
                <View style={style.linha}>
                    <TextInput
                        keyboardType="numeric"
                        style={style.visorAB}
                        placeholder="Digite sua Altura."
                        onChangeText={(valor) => setValores({
                            ...valores, altura: Number(valor)
                        })}
                    />
                    <TextInput
                        keyboardType="numeric"
                        style={style.visorAB}
                        placeholder="Digite seu Peso."
                        onChangeText={(valor) => setValores({
                            ...valores, peso: Number(valor)
                        })}
                    />
                </View>
                {/***************** INICIO DA LINHA 1  **************/}
                <View style={style.linha}>
                    <BtnCalc onPress={calculaIMC} />
                </View>

            </View>
        </View> // FINAL DO ENVELOPE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    )
}