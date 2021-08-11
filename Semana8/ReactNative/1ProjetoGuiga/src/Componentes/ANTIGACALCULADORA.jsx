//Este foi o primeiro código que desenvolvi, achei que havia ficado com muitas linhas e fiz o que pude para reduzir no outro. 
//Este código está aqui apenas para via de registro


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, TextInput  } from 'react-native';
import { style } from '../Estilos/style'

export default function calculadoraCorpo(){

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
                <TouchableOpacity style={style.buttonLinha}>   
                    <Text onPress ={
                    ()=> setResult (valores.a + valores.b)
                    }> + 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonLinha}>
                <Text onPress ={
                    ()=> setResult (valores.a - valores.b)
                    }> - 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonLinha}>
                    <Text onPress ={
                    ()=> setResult (valores.a * valores.b)
                    }> * 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonLinha}>
                <Text onPress ={
                    ()=> setResult(valores.a / valores.b)
                    }> / 
                    </Text>
                </TouchableOpacity>
            </View>

            {/***************** INICIO DA LINHA 2  **************/}
            <View style={style.linha}>
                <TouchableOpacity style={style.buttonLinha}>
                <Text onPress ={
                    ()=> setResult(valores.a % valores.b)
                    }> % 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonLinha}>
                    <Text onPress ={
                        () => setResult(valores.a * valores.a)
                    }> a² </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonLinha}>
                <Text onPress ={
                        () => setResult(valores.b * valores.b)
                    }> b² </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonLinha}>
                <Text onPress ={
                        () => setResult(valores.a ** valores.b)
                    }> a^b </Text>
                </TouchableOpacity>
            </View>
            {/*************** INPUT VALORES A E B ***************/}
            <View style= {style.linha}>
                    <TextInput 
                    style={style.visorAB}
                    placeholder= "Valor A"
                    onChangeText = {
                        (valor) => setValores({
                            ...valores, a: Number(valor), // ... ->função Spread
                        }) 
                    }
                     />
                    <TextInput 
                    style={style.visorAB}
                    placeholder= "Valor B"
                    onChangeText = {
                        (valor) => setValores({
                            ...valores, b: Number(valor),
                        }) 
                    }
                />
            </View>
        </View>
    )
}