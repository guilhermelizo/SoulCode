// Exercício de useReducer
// Crie o exemplo acima e adicione as ações de: multiplicar por 2,
// elevar ao quadrado usando Math.pow, dividir por 5.
// Talvez: generalize a ação para passar o valor para incrementar no estado,
// e nas outras ações.

// inc
// dec
// zerar
// multiplicar por 2
// Math.pow ao quadrado (2)
// dividir por 5
// Deixar dinamico passando objeto como ação.

import React, {useReducer} from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../estilo/estilo";

export default function UseReducerAtividade(){
    function reducer(state, action){
        switch(action.tipo){
            case 'inc':
                return state + action.valor;
            case 'dec':
                return state - action.valor;
            case 'zerar':
                return 0;
            case 'mult':
                return state * 2  
            case 'quadrad':
                return Math.pow(state, 2) 
            case 'divid':
                return state / 5;       
        }
    }

    const valorInicial = 0;
    const [quantidade, dispatch] = useReducer(reducer, valorInicial);

    return(
        <View style={styles.container}>
            <Text> ATIVIDADE REDUCER </Text>
            <Text>{quantidade}</Text>

            <Button title="Incrementar" onPress={() => dispatch({tipo: 'inc', valor: 1})} />
            <Button title="Decrementar" onPress={() => dispatch({tipo: 'dec', valor: 1})} />
            <Button title="Zerar"       onPress={() => dispatch({tipo: 'zerar'})} />
            <Text>---</Text>
            <Button title="Multiplicar" onPress={() => dispatch({tipo: 'mult', valor: 1})} />
            <Button title="Ao Quadrado" onPress={() => dispatch({tipo: 'quadrad', valor: 1})} />
            <Button title="Divid por 5" onPress={() => dispatch({tipo: 'divid', valor: 1})} />




        </View>
    )

}