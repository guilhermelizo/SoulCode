import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';


export default function Produto2(){
    const[produto, setProduto] = useState(
        {
            nome:'',
            preco:'', 
            quantidade:'', 
            estoque:'',
            subtotal: 0,
        }
    )
    //altera a visibilidade do campo
    const[visible, setVisible] = useState(true);

    console.log(produto)

    //revelar conteudo com campo, através do secureTextEntry
    const visivel = () => {
        if(visible){
            setVisible(false)
        }else{
            setVisible(true)
        }
    }

    const handleInputChange = (name, value) => {
        setProduto({
            ...produto, [name]:value
        })
    }

    const calculaSub = () => {
        setProduto({                // Esta é a função que está recebendo o calculo (Fazendo o preço x quantidade)
            ...produto, subtotal: (produto.preco * produto.quantidade)
        })
    }


    return(
        <View>
            <TextInput 
                placeholder="nome" 
                onChangeText={(valor)=> handleInputChange("nome", valor)}
                secureTextEntry={visible}
            />
            <Text onPress={visivel} >Visible</Text>

            <TextInput 
                placeholder="preco"  
                onChangeText={(valor)=> handleInputChange("preco", Number(valor))}
                keyboardType="numeric"
            />
            <TextInput 
                placeholder="quantidade"  
                onChangeText={(valor)=> handleInputChange("quantidade", Number(valor))}
                keyboardType="numeric"
            />
            <TextInput 
                placeholder="estoque"  
                onChangeText={(valor)=> handleInputChange("estoque", Number(valor))}
                keyboardType="numeric"
            />

            <Button tittle="Subtotal" color="#156423"
                onPress={calculaSub}    // Referência para chamar a função de calculo ao clicar no botão
            />

        </View>
    )
}