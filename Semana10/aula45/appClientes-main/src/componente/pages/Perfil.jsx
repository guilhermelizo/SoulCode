import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from './UserContext';
import firebase from '../../../firebase';

import { ContainerPerfil, CaixaBtnMin, TextLogin, TextSecund, CaixaCont, CaixaPerfil, LogoPerfil, InputPerfil, TextTer } from '../styles/style';
import { LinearGradient } from 'expo-linear-gradient';


export default function Perfil() {

  const { usuario } = useContext(UserContext)
  const [valorUser, setValorUser] = useState()
  const [cliente, setCliente] = useState([])
  const [loading, setLoading] = useState(true)

  const handleInputChangeAtualizar = (name, value) => {
    setValorUser({
      ...valorUser, [name]: value
    })
  }

  const userById = async (id) => {
    const cliente = firebase.db.collection('users');
    const doc = await cliente.doc(id).get();
    setCliente(doc.data());
  }

  useEffect(
    () => { userById(usuario.uid) }, []
  ), []

  const parado = async (a, b, c, d, e) => {
    const motoca = firebase.db.collection('users');
    const nome = b
    const telefone = c
    const cpf = d
    const endereco = e
    const doc = await motoca.doc(a).update({
      nome: nome,
      telefone: telefone,
      cpf: cpf,
      endereco: endereco,
    })
  }

  return (
    
    <ScrollView>
      <LinearGradient colors={['#EEE3EE', '#E3EDF7']}>
      <ContainerPerfil>
      
        <TextLogin > Meu Perfil </TextLogin>

          <LogoPerfil source={require('../image/user.jpg')} />

        <TextSecund>Bem vindo</TextSecund>
        <TextSecund>{cliente.nome}</TextSecund>

        <CaixaPerfil>
          <Icon name="user" size={30} />
          <TextTer >Nome completo: {cliente.nome}</TextTer>
        </CaixaPerfil>
        <InputPerfil
          placeholder="Edite seu nome aqui"
          placeholderTextColor="black"
          onChangeText={(value) => handleInputChangeAtualizar("nome", value)}
        />

        <CaixaPerfil>
          <Icon name="phone" size={30} />
          <TextTer >Telefone: {cliente.telefone}</TextTer>
        </CaixaPerfil>
        <InputPerfil
          placeholder="Edite seu telefone aqui"
          placeholderTextColor="black"
          onChangeText={(value) => handleInputChangeAtualizar("telefone", value)}
        />

        <CaixaPerfil>
          <Icon name="check" size={30} />
          <TextTer >CPF: {cliente.cpf}</TextTer>
        </CaixaPerfil>
        <InputPerfil
         placeholder="Edite seu CPF aqui"
         placeholderTextColor="black"
          onChangeText={(value) => handleInputChangeAtualizar("cpf", value)}
        />

        <CaixaPerfil>
          <Icon name="paper-plane" size={30} />
          <TextTer >Endereço: {cliente.endereco}</TextTer>
        </CaixaPerfil>
        <InputPerfil
         placeholder="Edite seu endereço aqui"
         placeholderTextColor="black"
          onChangeText={(value) => handleInputChangeAtualizar("endereco", value)}
        />

        <LinearGradient colors={['#FBAB7E', '#F7CE68']}>
          <CaixaBtnMin
            onPress={() => { parado(usuario.uid, valorUser.nome, valorUser.telefone, valorUser.cpf, valorUser.endereco), userById(usuario.uid) }}
          >
            <Text>Editar</Text>
          </CaixaBtnMin>
        </LinearGradient>

        <CaixaCont >
          <Icon name="envelope" size={30} />
          <Text > Email: {usuario.email}</Text>
        </CaixaCont>
        
        
      </ContainerPerfil>
      </LinearGradient>
    </ScrollView>
    
  );
}