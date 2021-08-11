/*
 * 3) crie um componente Musica com state(Objeto) com as seguintes propriedades:
 * nome, duração, album. O state deve ser preenchido em seus valores com parametros vindo 
 * das props. Renderize as informações do State, e Mais 3 Texts onde possua as informações Rock, Funk e Sertanejo. Ao clicar em cada uma delas, deverá alterar o state, para valores de
 * musicas de cada estilo.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Musica extends Component{
    state={
        nome: this.props.nome,
        duracao: this.props.duracao,
        album: this.props.album,
    };
    render(){
        return(
            <View>
                <Text> Atividade 3:</Text>
                <Text> 
                    {` 
                    ${this.state.nome} 
                    ${this.state.duracao}
                    ${this.state.album}
                    `}
                </Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            nome: "Cold - Five Finger Death Punch", 
                            duracao: "3:45min",
                            album:"The Wrong Side of Heaven"
                        })
                    }
                }> 
                    Rock: 
                </Text> 
                <Text>-------</Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            nome: "E ela vem - MC Livinho",
                            duracao: "4:12min",
                            album:"Azul Piscina"
                        })
                    }
                }> 
                    Funk: 
                </Text>
                <Text>-------</Text>
                <Text onPress ={
                    () => {
                        this.setState({
                            nome: "Eu dormi na praça - Bruno e Marrone",
                            duracao: "3:27min",
                            album:"Eu não sou Vagabundo"
                        })
                    }
                }> 
                    Sertanejo: 
                </Text>
                <Text>-------</Text>
            </View>
        )
        

    }
}