import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Informacao from './Informacao';
import ComponenteIMC from './ComponenteIMC';
import { style } from './estilos/estilo';
import { StatusBar, View } from 'react-native';

export default function Conteudo() {
    return(
        <View style={style.corpoContent}>
            
            <Informacao titulo="Seja bem vindo!" autor="Aqui você encontrará as melhores informações para sua saúde." conteudo="Confira abaixo!" />
            <Informacao titulo="Você sabia que...." autor="Por: Eustácio Silva" conteudo="Você Sabia que o alongamento matinal melhora até mesmo a coordenação motora?" />
            <Informacao titulo="O que é e para que serve o IMC?" autor="IMC ou Índice de Massa Corporal" conteudo="é um cálculo que serve para avaliar se a pessoa está dentro do seu peso ideal em relação à altura. Assim, de acordo com o valor do resultado de IMC, a pessoa pode saber se está dentro do peso ideal, acima ou abaixo do peso desejado." />
            <ComponenteIMC />
            <Informacao titulo="O importante é começar!" autor="Por: Selma Costa." conteudo="O ideal é que se comece aos poucos, com atividades mais leves e mais duradouras. Em casa, sem o uso de equipamentos, há uma série de exercícios para se fazer que usam apenas o peso do corpo. Alguns exemplos são agachamentos, que podem ser feitos de diversas formas diferentes, abdominais, que há também uma variedade grande de movimentos a serem executados, saltos, polichinelos e suas variações, entre outros." />
            <Informacao titulo="Respiração correta é importante para a atividade física." autor="Por: André Baioff." conteudo="A respiração é uma ferramenta vital para o bom desempenho em atividades físicas. O ato de inspirar e expirar de maneira ritmada e consciente faz o oxigênio levar nutrientes para as células e auxilia a musculatura no momento dos exercícios. Por outro lado, o gás carbônico é liberado após o processo. Essa troca é de extrema importância para os músculos, que ganham mais resistência." />
        </View>
    )
}



/// Nota -> Não esquecer de chamar os componentes aqui 
// (Provavelmente os 3 informação será em c (flex))

// 2) Componente Content que chama os componentes da aplicação.

// 6) Dentro do Content você deve chamar os seguintes
// componentes:
//                 6.1
// Informação – Passando na props textos de boas vindas ao app.
//                 6.2
// Informação – Mostrando alguma curiosidade pela props
//                 6.3
// Informação – Apresentação do Imc – dados relacionados ao imc
//                 6.4 Imc
//                 6.5
// Informação – Dicas de exercícios físicos
//                 6.6
// Informação – Dicas de exercícios físicos