/**
 * Crie um componente baseado classe chamado PessoaProps
 * Que renderize as seguintes informações via props
 * 
 * Atividade de Props
 * Dados da Pessoa
 * Nome: X
 * Habilidade: X
 * Gosta de: X
 * 
 * Chamar 2x com valores diferentes
 * Sendo um deles deve ter dados relacionados ao Almir.
 * 
 * Crie um componente baseado em classe chamado TrocaDados
 * onde teremos um state com as seguintes informações de propriedade(Objeto):
 * Nome: Leide, Hobbie: Passar atividades bem Legais, InfoAdicionais: Rica com fazenda
 * 
 * Renderizar essas propriedades na tela. 
 * Ao clicar no Text das informações alterar o state para os seguintes dados:
 * Nome: Filipe, Hobbie: Fazer passeios na praia em frente sua casa, InfoAdicionais: Tem uma amiga Rica chama Leide kkkk
 */


import React, { Component } from 'react';
import {View , Text} from 'react-native';

 export default class TrocaDados extends Component{
     state = {
         nome: "Leide",
         hobbie: "Passar atividades bem legais",
         infoAdicionais: "Rica com fazenda"
     };
     render(){
         return(
             <View> 
                <Text> Nome: {this.state.nome} </Text>
                <Text> Hobbie: {this.state.hobbie} </Text>
                <Text> Infos Adicionais: {this.state.infoAdicionais}</Text>
                <Text
                    onPress={
                        ()=> this.setState({
                            nome:"Filipe",
                            hobbie: "Fazer Passeios Praianos",
                            infoAdicionais: "Tem uma amiga rica chamanda Leide k"
                        })
                    }
                > Me pressione!!!
                </Text>
             </View>
             )
     }
 }