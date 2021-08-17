import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { UserContext } from './UserContext';
import firebase from '../../../firebase';

import { ContainerViagem, InputHome, TextLogin, CaixaBtn, ImageBack, ViewHome, TextHome, TextLoginBTN } from '../styles/style';

import { LinearGradient } from 'expo-linear-gradient';

export default function Viagens({ navigation }) {
    const { usuario } = useContext(UserContext)

    const [ok, setOk] = useState(false)

    const [statusCorrida, setStatusCorrida] = useState()
    const [statusMotorista, setStatusMotorista] = useState()

    const [corrida, setCorrida] = useState({
        origem: '',
        destino: '',
        email: usuario.email,
        pagamentos: '',
    })

    console.log(usuario)

    const handleInputChange = (name, value) => {
        setCorrida({
            ...corrida, [name]: value
        })
    }

    const addCriarCorridas = async (param, corrida) => {
        await firebase.db.collection("corrida").add({ destino: corrida.destino, origem: corrida.origem, status: 'Solicitada', email: corrida.email, metodoPag: corrida.pagamentos, keyPassageiro: param.uid })
            .then(
                () => {
                    alert("Corrida Criada")
                    setOk(true)
                }
            ).catch(
                error => alert(error)
            )
    }

    // Pagina a ser definida para retorno após 
    // a corrida ter sido criada com sucesso

    return (
        <ContainerViagem >
            <ImageBack
                source={require('../image/foto3.png')}
            >
                <InputHome
                    placeholder='Pra onde vamos?'
                    placeholderTextColor="black"
                    onChangeText={(value) => handleInputChange('destino', value)}
                />
                <InputHome
                    placeholder='Onde estou?'
                    placeholderTextColor="black"
                    onChangeText={(value) => handleInputChange('origem', value)}
                />
                <InputHome
                    placeholder='Forma de Pagamento'
                    placeholderTextColor="black"
                    onChangeText={(value) => handleInputChange('pagamentos', value)}
                />
                <LinearGradient colors={['#FBAB7E', '#F7CE68']}>
                    <CaixaBtn
                    ><TextLoginBTN
                        // onPress={() => navigation.navigate('Solicitacao')}
                        onPress={() => { addCriarCorridas(usuario, corrida), setStatusCorrida('Solicitada') }}
                    >
                            Solicitar
                        </TextLoginBTN>
                    </CaixaBtn>
                </LinearGradient>

                <ViewHome >
                    <TextHome
                        onPress={
                            () => {
                                setStatusCorrida("Em andamento")
                            }
                        }
                    >
                        Status {statusCorrida}
                    </TextHome>
                    <TextHome
                        onPress={
                            () => {
                                setStatusCorrida("Finalizada")
                            }
                        }
                    >
                        Valor:
                    </TextHome>
                </ViewHome>

                <ViewHome
                >
                    <TextHome
                        onPress={
                            () => {
                                setStatusMotorista("Bruna Carro Vermelho placa cdf123")
                            }
                        }
                    >
                        Informação do motociclista: {statusMotorista}
                    </TextHome>
                </ViewHome>
            </ImageBack>
        </ContainerViagem>
    )
}