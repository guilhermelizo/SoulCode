import React, {useReducer} from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../estilo/estilo";

// Função redutora (reducer)
// valor inicial

// 1°. Criar a função redutora
// 2°. Definir valor inicial
// 3°. Criar o useReducer

// {action: 'incrementar'}

export default function ExUseReducer(){
    
    function reducer(state, action){ //nós definimos as ações
        switch(action.tipo){
            case 'inc':
                return state + action.valor;
            case 'dec':
                return state - action.valor;
            case 'zerar':
                return 0;
                
        }
    }
    // Uma forma de fazer o SWITCH acima utilizando IF ELSE:

    // if (action.tipo === "inc") {
    //   return state + action.valor;
    // } else if (action.tipo === "dec") {
    //   return state - action.valor;
    // } else if (action.tipo === "zerar") {
    //   return 0;
    // } else if (action.tipo === "mult") {
    //   return state * action.valor;
    // } else if (action.tipo === "pot") {
    //   return Math.pow(state, action.valor);
    // } else if (action.tipo === "div") {
    //   return state / action.valor;
    // }


        // Outro exemplo, agora utilizando o Reduce:
        
    // const reduce = {
    //   inc: (state, valor) => state + valor,
    //   dec: (state, valor) => state - valor,
    //   zerar: () => 0,
    //   mult: (state, valor) => state * valor,
    //   pot: (state, valor) => Math.pow(state, valor),
    //   div: (state, valor) => state / valor,
    // };

    // return reduce[action.tipo](state, action.valor);



    const valorInicial =0;  //segundo passo, definindo valor inicial
    const [quantidade, dispatch] = useReducer(reducer, valorInicial);

    return(
        <View style={styles.container}>
            <Text>UseReducer</Text>
            <Text>{quantidade}</Text>
            <Button title="Incrementar" onPress={() => dispatch({tipo: 'inc', valor: 1})} />
            <Button title="Decrementar" onPress={() => dispatch({tipo: 'dec', valor: 2})} />
            <Button title="Zerar"       onPress={() => dispatch({tipo: 'zerar'})} />
        </View>
    )
}



