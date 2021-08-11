import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from '../../Styles/style';


export default function Header() {
    return (
        <View style={styles.viewHeader}>
            <Text style={styles.textHeader}> Bora codar pra cerurares </Text>
        </View>
    )
}

