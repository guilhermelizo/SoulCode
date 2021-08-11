import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList, ViewBase, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';



export default function DeleteFuncionarios({navigation,route}){
    const key = route.params;
    const [ok,setOk] = useState(false);

    const deleteFuncionario = async () => {
        const funcionarios = firebase.db.collection('funcionarios');
        await funcionarios.doc(key).delete()
        .then(
            ()=>{
                ("Esse dai já era, deleted")
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
            <Text style={styles.h1}>Deseja excluir o Funcionario? </Text>
            <Button tittle='Siiiiiim' onPress={deleteFuncionario} />
            <Button tittle='Nãoooooo' onPress={ ()=> navigation.popToTop() } />
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