import React from 'react';
import { View, Text } from 'react-native';

 export default function RodapeInfo(props){
     return(
         <View> 
             <Text> Empresa: {props.empresa} </Text>
             <Text> Dev: {props.dev} </Text>

         </View>
         
     )
 }