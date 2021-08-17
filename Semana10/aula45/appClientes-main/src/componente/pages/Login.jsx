import React, { useState, useRef } from 'react';
import firebase from '../../../firebase';
import { Text, View, TextInput, ActivityIndicator, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useEffect, useContext } from 'react'
import { UserContext } from './UserContext';
import { Ionicons } from '@expo/vector-icons'

import { Container, StyledImage, Input, CaixaBtn, TextLogin, ViewPad, ContainerPrinc } from '../styles/style';

import { LinearGradient } from 'expo-linear-gradient';

// import { TextInputMask } from 'react-native-masked-text';

export default function Login() {
    const { logar, deslogar } = useContext(UserContext);
    // const cpfRef = useRef(null);
    // const cellRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [newUser, setNewUser] = useState(false);
    const [dados, setDados] = useState({
        nome: '',
        email: '',
        cpf: '',
        idade: '',
        endereco: '',
        telefone: '',
    })
    const [state, setState] = useState({
        senha: "",
        msg: "",
    });

    const addUser = async (param) => {
        await firebase.db
            .collection('users')
            .doc(param)
            .set(dados)
            .then(() => {
                alert('Usuário adicionado');
            })
            .catch((error) => alert(error));
    };

    const handleInputChangeState = (name, value) => {
        setState({
            ...state,
            [name]: value
        });
    };

    const handleInputChangeDados = (name, value) => {
        setDados({
            ...dados,
            [name]: value
        });
    };

    useEffect(
        () => {
            const auth = firebase.auth;
            const unsubscribed = auth.onAuthStateChanged(
                user => {
                    if (user) {
                        if (user.emailVerified) {
                            logar(user);
                        } else {
                            auth.signOut();
                            deslogar();
                            setLoading(false);
                        }
                    } else {
                        setLoading(false)
                    }
                }
            )
            return () => {
                unsubscribed();
            }
        }, []
    )

    const login = async () => {
        const auth = firebase.auth;
        const { email } = dados;
        const { senha } = state;
        try {
            const resposta = await auth.signInWithEmailAndPassword(email, senha)
            setState({ ...state, msg: "Loguei" })
            setDados({ ...dados })
        } catch (error) {
            setState({ ...state, msg: "Email ou Senha invalidos" })
            setDados({ ...dados })
        }
    }

    const cadastrar = async () => {
        const auth = firebase.auth;
        const { email } = dados;
        const { senha } = state;
        if (senha.length >= 6) {
            try {
                const resposta = await auth.createUserWithEmailAndPassword(email, senha);
                auth.currentUser.sendEmailVerification();
                await addUser(auth.currentUser.uid)
                setNewUser(false);
                setState({ ...state, msg: "verifique sua conta de email" })
            } catch (error) {
                setState({ ...state, msg: "Não foi possível cadastrar o usuário" })
            }
        } else {
            setState({ ...state, msg: "Senha deve conter no mínimo 6 caracteres" })
        }

        setState({
            senha: "",
            msg: "",
        })

        setDados({
            nome: '',
            email: '',
            cpf: '',
            idade: '',
            endereco: '',
            telefone: '',
        })
    }

    if (loading) {
        return <ActivityIndicator />
    }

    return (
        <ScrollView>
            <ContainerPrinc >
                <StyledImage
                    source={require('../image/icon.png')}
                />
                <TextLogin >{newUser ? "Novo Usuário" : ""}</TextLogin>
                {newUser ? <ViewPad >
                    <Input
                        placeholder="Nome"
                        placeholderTextColor="white"
                        onChangeText={(value) => handleInputChangeDados('nome', value)}
                        value={dados.nome}
                    />

                    <Input
                        placeholder="Email"
                        placeholderTextColor="white"
                        onChangeText={(value) => handleInputChangeDados('email', value)}
                        value={dados.email}
                    />
                    <Input
                        placeholder="Idade"
                        placeholderTextColor="white"
                        onChangeText={(value) => handleInputChangeDados('idade', value)}
                        value={dados.idade}
                    />
                    <Input
                        placeholder={'CPF'}
                        placeholderTextColor="white"
                        type={'cpf'}
                        value={dados.cpf}
                        onChangeText={(value) => handleInputChangeDados('cpf', value)}
                    />

                    <Input
                        placeholder="Endereço"
                        placeholderTextColor="white"
                        onChangeText={(value) => handleInputChangeDados('endereco', value)}
                        value={dados.endereco}
                    />
                    <Input
                        placeholder={'Telefone'}
                        placeholderTextColor="white"
                        type={'cel-phone'}
                        value={dados.telefone}
                        onChangeText={(value) => handleInputChangeDados('telefone', value)}
                    />

                    <Input
                        placeholder="Senha"
                        placeholderTextColor="white"
                        onChangeText={(value) => handleInputChangeState('senha', value)}
                        value={state.senha}
                    />
                </ViewPad>
                    :
                    <ViewPad >
                        <Input
                            placeholder="Email"
                            placeholderTextColor="white"
                            onChangeText={(value) => handleInputChangeDados('email', value)}
                            value={dados.email}
                        />
                        <Input
                            placeholder="Senha"
                            placeholderTextColor="white"
                            onChangeText={(value) => handleInputChangeState('senha', value)}
                            value={state.senha}
                        // secureTextEntry={true}
                        />
                    </ViewPad>
                }
                <LinearGradient colors={['#FBAB7E', '#F7CE68']}>
                    <ViewPad>
                        {newUser ?
                            <CaixaBtn
                                onPress={cadastrar}
                            >
                                <TextLogin> Cadastrar </TextLogin>
                            </CaixaBtn>
                            :
                            <CaixaBtn
                                onPress={login}
                            >
                                <TextLogin> Login </TextLogin>
                            </CaixaBtn>
                        }
                    </ViewPad>
                </LinearGradient>
                <ViewPad >{newUser ? <Text onPress={() => setNewUser(false)}>Login</Text> : <Text onPress={() => setNewUser(true)} >Cadastrar</Text>}
                    <Text >{state.msg}</Text>
                </ViewPad>
            </ContainerPrinc>
        </ScrollView>
    )
}