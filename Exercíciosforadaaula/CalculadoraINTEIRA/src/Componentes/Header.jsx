import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { style } from "../Estilos/style";


export default function Header() {
    return (
        <View style={style.header}>
            <Text> Projeto Calculadora com React! </Text>
        </View>
    )
}

