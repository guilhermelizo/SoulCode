import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { style } from "../Estilos/style";


export default function Footer() {
    return (
        <View style={style.footer}>
            <Text> Desenvolvido por: Guilherme Lizo </Text>
            <Text> GitHub/Linkedin: @guilhermelizo </Text>
            <Text> Aluno SoulCode Academy </Text>
            <Text> Bootcamp Front End & Mobile Jr. </Text>

        </View>
    )
}

