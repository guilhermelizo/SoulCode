import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import firebase from '../../firebase';

export default function CadastrarMotorista() {
    const [ motorista, setMotorista ] = useState({
        nome: '',
        email: '',
        registro: ''
    });

    const [ state, setState ] = useState({
        senha: '',
        msg: ''
    });

    const [ veiculo, setVeiculo ] = useState({
        ano: '',
        cor: '',
        documento: ''
    });

    const handleInputChangeSenha = (param, value) => {
        setState({
            ...state,
            [param]: value
        });
    };

    const handleInputChangeMotorista = (param, value) => {
        setMotorista({
            ...motorista,
            [param]: value
        });
    };

    const handleInputChangeVeiculo = (param, value) => {
        setVeiculo({
            ...veiculo,
            [param]: value
        });
    };

    const cadastrar = async () => {
        const auth = firebase.auth;
        const email = motorista.email;
        const senha = state.senha;

        if (senha.length >= 6) {
            try {
                await auth.createUserWithEmailAndPassword(email, senha);
                setState({ ...state, msg: 'verifique sua conta de email' });
                await addUser(auth.currentUser.uid);
            } catch (error) {
                console.log(error);
                setState({ ...state, msg: 'Não foi possível cadastrar o usuário' });
            }
        } else {
            setState({ ...state, msg: 'Senha deve conter no mínimo 6 caracteres' });
        }
    };

    const addUser = async (param) => {
        await firebase.db
            .collection('motorista')
            .doc(param)
            .set({ motorista, veiculo })
            .then(() => {
                alert('Usuário adicionado');
            })
            .catch((error) => alert(error));
    };

    return (
        <View>
            <View>
                <Text>Cadastrar Motorista</Text>

                <TextInput
                    placeholder={'Nome'}
                    value={motorista.nome}
                    onChangeText={(value) => handleInputChangeMotorista('nome', value)}
                />

                <TextInput
                    placeholder={'Email'}
                    value={motorista.email}
                    onChangeText={(value) => handleInputChangeMotorista('email', value)}
                />

                <TextInput
                    placeholder={'Senha'}
                    value={state.senha}
                    onChangeText={(value) => handleInputChangeSenha('senha', value)}
                />

                <TextInput
                    placeholder={'Registro'}
                    value={motorista.registro}
                    onChangeText={(value) => handleInputChangeMotorista('registro', value)}
                />

                <TextInput
                    placeholder={'Ano do veículo'}
                    value={veiculo.ano}
                    onChangeText={(value) => handleInputChangeVeiculo('ano', value)}
                />

                <TextInput
                    placeholder={'Cor do veículo'}
                    value={veiculo.cor}
                    onChangeText={(value) => handleInputChangeVeiculo('cor', value)}
                />

                <TextInput
                    placeholder={'Documento'}
                    value={veiculo.documento}
                    onChangeText={(value) => handleInputChangeVeiculo('documento', value)}
                />

                <Button
                    title="add"
                    onPress={() => {
                        cadastrar();
                    }}
                />
            </View>
        </View>
    );
}