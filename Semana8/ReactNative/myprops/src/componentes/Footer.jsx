import React from 'react';
import { View, Text } from 'react-native';
import RodapeInfo from './RodapeInfo';

 export default function Footer(){
     return(
         <View> 
             <Text> Footer: </Text>
             <RodapeInfo empresa="SoulCode Academy" dev="Guilherme Lizo" />
         </View>
         
     )
 }