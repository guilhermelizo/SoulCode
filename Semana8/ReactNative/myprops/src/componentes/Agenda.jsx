import React from 'react';
import { View, Text } from 'react-native';
import RodapeInfo from './RodapeInfo';

 export default function Agenda(props){
     return(
         <View> 
             <Text>  Agenda! </Text>
             <Text> Nome: {props.nome} </Text>
             <Text> Telefone: {props.telefone} </Text>
             <Text> E-mail: {props.email} </Text>
            <Text> --------------------- </Text>

             <RodapeInfo empresa="SoulCode Academy" dev="Guilherme Lizo" />
         </View>
         
     )
 }


 /**
 * Crie um componente Agenda
 * que receba props
 * 
 * e renderize a seguinte informação
 * 
 * Nome: x
 * Telefone: x
 * email: x
 * 
 * Em Content Renderize  6vzs Agenda com informações passadas diferentes
 * 
 */
