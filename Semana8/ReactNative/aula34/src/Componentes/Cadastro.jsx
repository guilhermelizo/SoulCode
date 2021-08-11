/**
 *  Crie um componente baseado em função chamado Cadastro
 * nele teremos um estado (objeto) com as seguintes propriedades
 * nome, email, cpf, telefone, rua, cidade. Todas elas com valores iniciais " ". 
 * 
 * Na renderização ( no return ) campo de TextInput para cada uma das propriedades do estado
 * 
 */

 import React, {useState} from "react";
 import { View, Text,TextInput, Button, StyleSheet } from "react-native";
 
 export default function Cadastro() {
    
    const [state, setState] = useState({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        rua: '',
        cidade: '',
    })


    /** Esta função serve para realizar a alteração em cada um dos campos com o onChange 
     * sem a necessidade de criar em todos, basta chamar esta função com a propriedade que recebera o valor */
    const handleInputChange = (nomeState, valorNovo) => {
        /** setState para realizar a alteração (apenas a propriedade passada no parametro) */
        setState({
            ...state, [nomeState]: valorNovo
    /**...FunçaoSpread,  [PropriedadeQueSeraAlterada] : ValorQueEstaSendoPassadoParaOCampo*/
    /** Quando ele monta a estrutura [nomeState] : valorNovo. 
     *                          ->> Ex: [ email ] : (Valor_Do_Campo) */
        })  
    }

    /** A Função "OnChangeText é ativada a cada nova alteração no texto naquele input" */
    /** É inclusive uma função padrão para isso e utilizada comumente em formulários */

    console.log(state)
    return(
        <View>
            <TextInput 
                placeholder= "Nome"
                onChangeText={
                /** (valor) <- É o que for digitado no input */
                    (valor) => handleInputChange('nome', valor)
                }
            />

            <TextInput 
                placeholder= "Email"
                onChangeText={
                    (valor) => handleInputChange('email', valor)
                }
            />

            <TextInput 
                placeholder= "CPF"
                onChangeText={
                    (valor) => handleInputChange('cpf', valor)
                }
            />

            <TextInput 
                placeholder= "Telefone"
                onChangeText={
                    (valor) => handleInputChange('telefone', valor)
                }
            />

            <TextInput 
                placeholder= "Rua"
                onChangeText={
                    (valor) => handleInputChange('rua', valor)
                }
            />

            <TextInput 
                placeholder= "Cidade"
                onChangeText={
                    (valor) => handleInputChange('cidade', valor)
                }
            />

        </View>
    )

}