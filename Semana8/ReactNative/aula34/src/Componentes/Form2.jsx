import React, {useState} from "react";
import { View, Text,TextInput, Button, StyleSheet } from "react-native";

export default function FormExemplo() {
     //O primeiro parametro será o State, o segundo é a função que alterará o State (O set)
     //estado com valor unico \/
     const[texto, setTexto]  = useState('');  //useState dita o valor inicial dele
     //estado com ovjeto \/
     const [valores, setValores] = useState({
         a: 0,
         b: 0,
     });   

        const[result, setResult] = useState (0);

     console.log(valores);
     
    return (
        <View>
            <Text>State: {texto} </Text>
            <TextInput 
                style={style.input}
                placeholder= "Digite aqui"
                onChangeText={       //onChangeText ->> função que chama toda vez que digita algo no campo.  Atualizando a função e jogando o que foi digitado dentro pro state
                    (valor) => setTexto(valor)
                }
            />
            
            <Text> Exemplo 2   {`\n`}------- </Text>
            <TextInput 
                style={style.input}
                placeholder= "Valor A"
                onChangeText = {
                    (valor) => setValores({
                        ...valores, a: Number(valor) // ... ->função Spread, serve para separar aquela informação do objeto e altera só aquela propriedade (mantendo o objeto)
                    }) 
                }
            />
            <TextInput 
                style={style.input}
                placeholder= "Valor B"
                onChangeText = {
                    (valor) => setValores({
                        ...valores, b: Number(valor),
                    }) 
                }
            />
            <Text> O Resultado é: {result} </Text>
             <Button 
                title="Calcule"
                onPress ={
                    ()=> setResult (valores.a + valores.b)
                }
             />   


        </View>
    )
}

const style = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 2,
        fontSize:16,
        borderRadius:30,
        backgroundColor: 'antiquewhite',
        
    },
})