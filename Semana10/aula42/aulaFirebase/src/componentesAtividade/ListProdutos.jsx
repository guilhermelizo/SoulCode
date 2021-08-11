import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, ActivityIndicator, FlatList, ViewBase } from 'react-native';
import firebase from '../../firebase'




export default function ListProdutos({navigation}){
    //Este State será responsável por escolher a renderização após carregar as informações
    const [loading, setLoading] = useState(true);
    //State responsável por receber os dados do banco
    const [state, setState] = useState([]);

    useEffect(
        () => navigation.addListener('focus', () =>  {
            pegaDados();
        }), [] 
    )


    // Esta conexão será praticamente padrão, trocando apenas para a conexão desejada no lugar de 'Produtos'
    const pegaDados = async () =>{
        const produtos = firebase.db.collection('produtos');
        const querySnapShot = await produtos.get();
        const dados = querySnapShot.docs;

        //listProdutos inicia um array vazio e com o .push receberá um objeto com os dados do documento
        const listProdutos = [];
        /**
         * listProdutos é um arrau que vai criar um {objeto} com varios {objetos}
         * Key é a variavel criada para receber o id do firebase.
         * Doc.id está acessando o documento individual e trazendo a chave única de cada um
         */

        dados.forEach(
            doc =>{
                listProdutos.push({
                    ...doc.data(), key: doc.id
                })
            }
        )
        setState(listProdutos);
        setLoading(false);  // Com o recebimento dos dados, o loading irá para false, parando com o icone de carregando
    }

    if(loading){
        //O ActivityIndicator é o componente padrão de loading (o circulo girando)
        return   <ActivityIndicator size="large" color="#3595ff" />

    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Lista de Produtos </Text>
            <Button    // Botão que leva para a página de adicionar usuários (AddProdutos)
                title='Adicionar Usuário'
                onPress={ () => {setLoading(true); navigation.navigate('AddProdutos')}}
                /> 
            <FlatList
                data={state}
                renderItem={
                    ({item}) => (
                        <View style={styles.container}>
                            <Text>Nome: ${item.nome} </Text>
                            <Text>Email: ${item.email} </Text>
                            <Button 
                                title='Editar'
                                onPress={ () => {navigation.navigate('EditProdutos', item.key)}}
                            />
                            <Button 
                                title='Excluir'
                                onPress={ () => {navigation.navigate('DeleteProdutos', item.key)}}
                            />
                            <Text>-----------------</Text>
                        </View>
                    )
                }
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
