import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList, ViewBase, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';



export default function EditFuncionarios({navigation, route}){
    const key = route.params;
    console.log(key)
    //constante de verificação que sera usada para realizar o retorno a pagina principal do app.
    //enquanto for false veremos a renderização de confirmação e quando for true direciona para o inicio
    const [ok,setOk] = useState(false);
    //estado que ira receber os valores do firebase para inserção
    const[state, setState] = useState({
        nome:'',
        email:'',
    });

    useEffect(
        () => navigation.addListener('focus', () =>  {
            funcionarioById(key);
        }), [] 
    )
    
    //recebendo um doc através do ID
    const funcionarioById = async (id)  =>{
        const funcionarios = firebase.db.collection("funcionarios");
        const doc = await funcionarios.doc(id).get();
        setState(doc.data())
    }

    const EditFuncionarios = async () => {
        const funcionarios = firebase.db.collection("funcionarios");
        await funcionarios.doc(key).update(state)
        .then(
            ()=>{
                alert("Opa, pra já chefia, editado!")
                setOk(true)
                }
        ).catch(
            error => alert(error)
        )
    }
    

    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]: value
        })
    }

    if(ok){
        alert("Entrooooou!");
        navigation.popToTop();
    }

    return(
        <View>
            <Text>Editar Funcionario </Text>

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
                defaultValue={state.email}
                onChangeText={(value)=> handleInputChange('email',value)}
            />

            <Button 
                title='Editar'
                onPress={EditFuncionarios}
                style={styles.input}
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