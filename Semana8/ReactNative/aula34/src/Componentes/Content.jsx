import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from '../../Styles/style';


export default function Content() {
    return (
        <View style={styles.contentGL}>
            <Text> Aqui é minha Content: </Text>
            <View style={styles.viewContent}>
                <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                <Text> Aperiam temporibus ullam tempore, dolores fugiat inventore </Text>
                <Text> accusantium? Suscipit soluta veritatis corporis tempore. </Text>
                <Text> Esse deleniti, doloremque ullam consequatur nesciunt deser unt non nihil.</Text>
            </View>

        </View>
    )
}