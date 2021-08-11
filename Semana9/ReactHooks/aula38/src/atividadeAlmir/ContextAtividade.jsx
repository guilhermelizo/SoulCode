// 1º Criar contexto do numero de atividades
// 2º Prover o valor do numero de atividades
// 3º Use/Consumo do contexto

// EXERCÍCIO DE useContext
// Crie um TextInput, ele lê um valor
// de número (quantidade de atividades hoje)
// Crie 3 componentes Leide, Filipe, Almir, e com useContext
// forneça para os 3 a quantidade de exercícios.
// (Use sua criatividade para mostrar como cada um anuncia
// a quantidade de exercícios).

import React, {useState, createContext} from "react"
import { View, Text, TextInput } from "react-native"
import { styles } from "../estilo/estilo";
import Leide from "./Leide"
import Almir from "./Almir"
import Filipe from "./Filipe"

export const ContextAtv = createContext();    // ----> Este é o Context

export default function ContextAtividade(){   // ----> Este é o componente da atividade 
    // Criando um estado dados onde irá ter um pequeno conjunto
    // de valores que será atribuído ao contexto
    const[atividades, setAtividades] = useState(0);

    return(  // Dentro do Provider irão os componentes que poden receber este context e o layout returnado
        <View style={styles.container}>
            <ContextAtv.Provider value={ {atividades, setAtividades} }>
                <Leide />
                <Almir />
                <Filipe />
                <TextInput
                    style={styles.input}
                    placeholder='Digite quantas atividades'
                    onChangeText={
                    (value) => setAtividades(value)
                    }
                />
            </ContextAtv.Provider>
        </View>
    )
}