import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList, TextInput } from 'react-native';

export default function Login() {
    const [newUser, setNewUser] = useState(false);
    const [state, setState] = useState({
        email: '',
        senha: '',
        msg: '',
    })

    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]: value
        })
    }


    return (
        <View style={styles.loginView}>
            <View style={styles.formView}>
                <Text> {newUser ? "Novo Usuário" : "Login"} </Text>

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    defaultValue={state.email}
                    onChangeText={(value)=> handleInputChange('email',value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    defaultValue={state.senha}
                    secureTextEntry={true}
                    onChangeText={(value)=> handleInputChange('senha',value)}
                />  {/* secureTextEntry serve para esconder as informações, trocando a senha por asteristicos ******/}
                {newUser ? (<TextInput
                    style={styles.input}
                    placeholder='Confirmar Senha'
                    defaultValue={state.senha}
                    secureTextEntry={true}
                />) : "" }



                {/* Aqui abaixo é condição ternária. (É um novo usuário? Se sim, executa a primeira parte, se não, a segunda 
                    (após os 2 pontos, exemplo >>> é verdadeiro : É falso )) **/}
                {newUser ? <Button title='Cadastrar' /> : <Button title='Login' />}

                <Text style={styles.msg}> {state.msg} </Text>

                {newUser ? (
                    <Text onPress={() => setNewUser(false)}>Já possui usuário? Efetuar login!</Text>
                ) : (
                    <Text onPress={() => setNewUser(true)}>Cadastre-se</Text>
                )}


            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    loginView: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    formView: {
        width: '80%',
    },

    input: {
        fontSize: 16,
        padding: 5,
        margin: 5,
    },

    msg: {
        color: 'red',
    },



})