

import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class PessoaProps extends Component{
    state = {
       nome: this.props.nome,
       habilidade: this.props.habilidade,
       gostaDe: this.props.gostaDe
    };
    render(){
        return(
            <View>
                <Text>Nome: {this.state.nome}</Text>
                <Text>Habilidade: {this.state.habilidade}</Text>
                <Text>Gosta de: {this.state.gostaDe}</Text>
            </View>
        )
    }
}