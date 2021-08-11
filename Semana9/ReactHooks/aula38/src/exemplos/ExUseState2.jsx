import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "../estilo/estilo";

export default function ExUseState2() {
    /**
     * Estado no formato de Objeto com chave e valor
     */
    const [state, setState] = useState({
        nome: "TV 32 CCE",
        preco: "3000",
    });

    return (
        <View style={styles.container}>
            <Text style={styles.subtitleDark}>Exemplo UseState2</Text>

            <Text>{`Valor de nome: ${state.nome}`}</Text>

            {/* A Função OnChangeText irá alterar o state apenas com a chave nome,
            mantendo intacto qualquer outra chave contida no objeto, por conta do ...state 
            ...state impede que os dados que não serão
            alterados se perca, nesse caso o preco  */}

            <TextInput
                style={styles.input}
                placeholder='Nome'
                defaultValue={state.nome}
                onChangeText={
                    (value) => setState({ ...state, nome: value })
                }
            />


            <Text> {`Valor de preço: ${state.preco}`}</Text>
            {/* A função onChangeText irá alterar o state apenas a chave preco,
            mantendo intacto qualquer outra chave contida no objeto,
            por conta do ...state 
            
            ...state impede que os dados serao alterados se perca, neste caso o nome*/}

            <TextInput
                style={styles.input}
                placeholder='Preço'
                defaultValue={state.preco}
                onChangeText={
                    (value) => setState({ ...state, preco: value })
                }
            />

            <Button
                onPress={() => setState({
                    nome: "",
                    preco: "",

                }) //usando função anonima com setState para limpar o estado state
                }
                title='Limpar'
            />
        </View>
    );
}
