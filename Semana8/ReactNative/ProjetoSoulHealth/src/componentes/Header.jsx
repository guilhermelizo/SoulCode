import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { style } from './estilos/estilo';


///1) Componente Header com o Nome do App.

export default function Informacao(props) {

    return (
        <View style={style.corpoHeader}>
                <Text style={style.headerText}>Aplicativo SoulHealth.</Text>
        </View>
    )
}

