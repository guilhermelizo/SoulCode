import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList, ViewBase, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';



export default function AddUsers({navigation}){
    //constante de verificação que sera usada para realizar o retorno a pagina principal do app.
    //enquanto for false veremos a renderização de confirmação e quando for true direciona para o inicio
    const [ok,setOk] = useState(false);
    //estado que ira receber os valores do firebase para inserção
    const[state, setState] = useState({
        nome:'',
        email:'',
    });

    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]: value
        })
    }

    const addUser = async()=>{  // Função chamada ao clicar no botão 'adicionar'
        await firebase.db.collection('users').add(state)
        .then(
            ()=>{
                alert("Sarvadoh!")
                setOk(true)
            }
        ).catch(
            error => alert(error)
        )
    }

    if(ok){
        alert("Entrooooou!");
        navigation.popToTop();
    }

    return(
        <View>
            <Text>Adicionar Usuário </Text>

            <TextInput 
                style={styles.input}
                placeholder ='Nome'
                defaultValue={state.nome}
                onChangeText={(value)=> handleInputChange('nome',value)}
            />

            <TextInput 
                style={styles.input}
                placeholder ='Email'
                textContentType='emailAdress'
                defaultValue={styles.email}
                onChangeText={(value)=> handleInputChange('email',value)}
            />

            <Button 
                title='Adicionar'
                style={styles.input}
                onPress={addUser}
            />

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

    input:{
        height: 60,
        width: '90%',
        borderWidth: 1,
        padding: 10,
        marginTop: 5,
    },

    alert:{
        backgroundColor: 'red',
    },
   
})
