// crie um componente Carro que tenha um state(objeto) com as seguinte informações
//  * marca, modelo, ano, cor, preco. atribua valores a cada uma.
//  * Renderize as informações em Texts separados por propriedade.
// *
//  * Para cada Text com informação do state, realize a troca(setState) de informação da
//  * propriedade presente naquele Text ao pressionar nele. Ex: pressionou onde está o valor de 
//  * marca, alterar o valor dessa propriedade.
//  * /


import React, { Component } from 'react';
import {View , Text } from 'react-native';

export default class Carro extends Component{
    state={
        marca: "Golzão invocado",
        modelo:"bolinha",
        ano:"2010",
        cor:"Branco",
        preco:"R$9999",
    };
    render(){
        return(
            <View>
                <Text> Atividade 1:</Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            marca: "Fuscão marotão!"
                        })
                    }
                }> 
                    Marca: {this.state.marca}
                </Text>

                <Text>---</Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            modelo: "Antiguera!"
                        })
                    }
                }>
                    Modelo: {this.state.modelo}
                </Text>

                <Text>---</Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            ano: "1960!"
                        })
                    }
                }>
                    Ano: {this.state.ano}
                </Text>

                <Text>---</Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            cor: "Azul!"
                        })
                    }
                }>
                    Cor: {this.state.cor}
                </Text>

                <Text>---</Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            preco: "R$1999!"
                        })
                    }
                }>
                    Preço: {this.state.preco}
                </Text>
            </View>
        )
    }
}    
