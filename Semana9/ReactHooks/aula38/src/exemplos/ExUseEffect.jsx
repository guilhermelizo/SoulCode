import React, {useState, useEffect} from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../estilo/estilo";

export default function ExUseEffect(){
    const[count, setcount] = useState(0);
    const [verifica, setVerifica] = useState('Renderizou, me chamou!');

    //useEffect( // função anonima )
    useEffect(
        () =>{
            // Todos os comandos que queremos executar na montagem e atualização do componente vão aqui
            
            setVerifica(`Estou com o valor count: ${count}x`)
        },[count] // Este colchete é para impedir o state de executar mais de uma vez, esperando assim sofrer alteração para ser executado de novo (prevenção de looping infinito)  ((Ele não é obrigatório, utiliza-se só nesses casos de prevenção))
    )  
    console.log(verifica)


    return(
        <View style={styles.container}>
            <Text style={styles.subtitleDark}> Exemplo de Use Effect </Text>
            <Text> Effect: {verifica}</Text>
            <Text>Meu state {count} </Text>

            <Button title="Clica" onPress={()=> setcount(count+1)} />
            <Button title="Limpar" onPress={()=> setcount(0)} />
        </View>
    )
}
