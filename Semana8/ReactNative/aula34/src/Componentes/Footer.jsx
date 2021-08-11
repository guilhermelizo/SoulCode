import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from '../../Styles/style';


export default function Footer() {
    return (
        <View style={styles.footerGL}>
            <Text style={styles.textLight}> Aqui é minha Footer: </Text>
        </View>
    )
}