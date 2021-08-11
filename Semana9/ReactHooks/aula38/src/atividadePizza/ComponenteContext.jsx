// * Criar um contexto que armazene um state de um Pizza (object) com as seguintes propriedades
//  * (sabor, ingredientes, valor, adicional, modoPagamento). Providencie(Provider) esses dados para dois componentes: 
// Pizza e Pagamento. Em Pizza mostre os dados (sabor, ingredientes e adicional) em Pagamento (valor e modoPagamento)
 
//  * 
//  */

import React, {useState, createContext} from "react"
import { View, Text, TextInput } from "react-native"
import { styles } from "../estilo/estilo";
import Pagamento from "./Pagamento";
import Pizza from "./Pizza";

export const ContextPizza = createContext();   

export default function ComponenteContext(){

    const[pizza, setPizza] = useState({
        sabor: "Mussarela",
        ingredientes: "Queijo",
        valor: "16,90",
        adicional: "chedar",
        modoPagamento: "Dinheiro",
    });

    return(  // Dentro do Provider irão os componentes que poden receber este context e o layout returnado
        <View style={styles.container}>
            <ContextPizza.Provider value={ {pizza, setPizza} }>
                <Pizza />
                <Pagamento />
                
            </ContextPizza.Provider>
        </View>
    )
    

};