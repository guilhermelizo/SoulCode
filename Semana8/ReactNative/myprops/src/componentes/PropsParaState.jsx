import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class PropsParaState extends Component{
   state = {
       nome: this.props.nome,
       preco: this.props.preco,
       parcelas: this.props.parcelas
   };
   
    render(){
        return(
            <View>            
                <Text>Produto: {this.state.nome}</Text>
                <Text>Preço: R$ {this.state.preco}</Text>
                <Text>Em até {this.state.parcelas}x</Text>
                <Text
                    onPress={
                        ()=> this.setState({
                            nome:"Polystation",
                            preco:100,
                            parcelas:5
                        })
                    }
                >Me pressione!!!
                </Text>
            </View>
        )
    }
}