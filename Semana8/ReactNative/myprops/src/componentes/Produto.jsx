import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Produto extends Component{
    render(){
        return(
            <View> 
                <Text> Produto:  {this.props.produto}  </Text>
                <Text> Valor do Produto em R$:  {this.props.valorProduto} </Text>
                <Text> Quantidade em Estoque:  {this.props.quantidadeEstoque}  </Text>
                <Text> Validade:  {this.props.validade}  </Text>
                <Text> --------------------- </Text>
            </View>
        )
    }

}

