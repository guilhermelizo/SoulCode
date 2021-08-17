import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import firebase from '../../../firebase';

import { Container, TextLogin, TextSecund, TextHist, TextHistCorr, Bordinha } from '../styles/style';

import { LinearGradient } from 'expo-linear-gradient';

export default function Historico() {
    const [loading, setLoading] = useState(true)
    const [stateMoto, setStateMoto] = useState([]);
    const [stateUser, setStateUser] = useState([]);
    const [listCorridas, setListCorridas] = useState([]);
    const [listUsers, setListUsers] = useState([]);

    useEffect(
        () => { pegaDadosConcluidas() }
    ), []

    ///// PegaDadosCorrida > Atributos que irão para o motorista
    const pegaDadosCorrida = async () => {
        const motor = firebase.db.collection('corrida');
        const querySnapshot = await motor.get();
        const dados = querySnapshot.docs;
        const listCorridas = [];
        dados.forEach(
            doc => {
                listCorridas.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
        setStateMoto(listCorridas);
        setLoading(false);
    }
    if (loading) {
        <ActivityIndicator />
    }

    ///// PegaDadosUsuarios > atributos que irão para o usuario
    const pegaDadosConcluidas = async () => {
        const users = firebase.db.collection('corrida');
        const querySnapshot = await users.where('status', '==', 'Finalizada').get();
        const dados = querySnapshot.docs;
        const listCorridas = [];
        dados.forEach(
            doc => {
                listCorridas.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
        setStateUser(listCorridas);
    }
    return (
        <ScrollView>
            <LinearGradient colors={['#EEE3EE', '#E3EDF7']}>
            <Container >

                <TextHist >Minhas Corridas</TextHist>
                <TextHist >Concluidas</TextHist>
                <FlatList
                    data={stateUser}
                    renderItem={({ item }) => (
                        <View >
                            <View >
                                <TextHistCorr >Origem: {item.origem}</TextHistCorr>
                                <TextHistCorr >Destino: {item.destino}</TextHistCorr>
                                <TextHistCorr >Status: {item.status}</TextHistCorr>
                                <TextHistCorr >---------------</TextHistCorr>
                            </View>
                        </View>
                    )}
                />

            </Container>
            </LinearGradient>
        </ScrollView >
    )
}