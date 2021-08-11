import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList, ViewBase, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';



export default function EditProdutos({navigation, route}){
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
            produtoById(key);
        }), [] 
    )
    
    //recebendo um doc através do ID
    const produtoById = async (id)  =>{
        const produtos = firebase.db.collection("produtos");
        const doc = await produtos.doc(id).get();
        setState(doc.data())
    }

    const EditProdutos = async () => {
        const produtos = firebase.db.collection("produtos");
        await produtos.doc(key).update(state)
        .then(
            ()=>{
                alert("Editedson")
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
            <Text>Editar Usuário </Text>

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
                onPress={EditProdutos}
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