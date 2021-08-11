import React, {useState, createContext} from "react"
import { View, Text } from "react-native"
import { styles } from "../estilo/estilo";
//importando aqui o componente ExUseContext.jsx
import ExUseContext from "./ExUseContext"



// Essa Constante aqui é responsável por criar o contexto que
// deve ser repassado aos componentes escolhidos
// seu nome é MeuContexto 
export const MeuContexto = createContext();


export default function ExCreateContext(){
    // Criando um estado dados onde irá ter um pequeno conjunto
    // de valores que será atribuído ao contexto
    const[dados, setDados] = useState({
        nome: "Soul",
        valor: 10,
    });


    //Dentro do return você irá observar que temos um componente chamado 
    //MeuContexto.Provider -> MeuContexto - é a constante que criamos no inicio do código
    // .Provider -> significa que esse é o provedor da informação.
    // A Props value -> Neste caso, está passando um conjunto de dados e uma função
    // onde apenas os componentes (e seus filhos) dentro do provider,
    // podem ter acesso aos dados.

    return(
        <View style={styles.container}>
            <MeuContexto.Provider value={ {dados, setDados} }>
                <ExUseContext />
            </MeuContexto.Provider>
        </View>
    )
}
