import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput  } from 'react-native';
import { style } from './estilos/estilo';


///1) Componente Header com o Nome do App.

export default function Informacao(props){

    return(
        <View style={style.corpoFooter}>
            <Text style={style.textoFooter}>
                Atividade Módulo React-Native
            </Text>
            <Text style={style.textoFooter2}>
                Desenvolvido por: Guilherme Lizo.
            </Text>
            <Text style={style.textoFooter}>
                Linkedin / GitHub: @guilhermelizo
            </Text>
            
        </View>
    )
}
