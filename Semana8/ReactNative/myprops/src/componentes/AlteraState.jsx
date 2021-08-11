import React, { Component } from 'react';
import { View , Text } from 'react-native';

// exntends - Palavra reservada para referir a herança pai e filho. 
//No caso abaixo, AlteraState é declarado filho de Component. E o Component por sua vez como
// visto acima, foi importado do React.
export default class AlteraState extends Component{
    state = {
        frase: "Quem é esse pokemon?",
        horario: "Almoço ja ja"
    }

    
    render(){
        return (
            <View>
                <Text onPress ={ // onPress é semelhante ao OnClick do javascript, porem pega no touch do celular tb
                () => {
                    this.setState({   //setState é para setar o novo valor do State
                        frase: "É o Blastoise!"
                    })
                }
            }>
                    {`\nTestando nosso state\nvalor do state: ${this.state.frase}\n`}
                </Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            horario: "Bora rangar!"
                        })
                    }
                }>
                    {`\n ${this.state.horario}\n`}
                </Text>
                <Text> Altera State: </Text>
                <Text> Produto: {this.props.produto} </Text>
                <Text> Preço: R${this.props.preco} </Text>
                <Text> Em até: {this.props.parcelas} X </Text>
                <Text>------------------------</Text>
            </View>
        )
    }

}