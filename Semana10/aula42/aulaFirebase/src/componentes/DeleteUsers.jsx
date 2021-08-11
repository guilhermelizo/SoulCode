import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList, ViewBase, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';



export default function DeleteUsers({navigation,route}){
    const key = route.params;
    const [ok,setOk] = useState(false);

    const deleteUser = async () => {
        const users = firebase.db.collection('users');
        await users.doc(key).delete()
        .then(
            ()=>{
                ("Deletadooooo")
                setOk(true)
            })
            .catch(
                error =>alert(error)
            )
    }

    if(ok){
        navigation.popToTop()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Deseja excluir o usuário? </Text>
            <Button tittle='Sim' onPress={deleteUser} />
            <Button tittle='Não' onPress={ ()=> navigation.popToTop() } />
        </View>
    )

}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 12,
    },

    h1:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 12,
    },

})