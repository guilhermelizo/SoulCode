import React from 'react';
import { View, Text } from 'react-native';
import Agenda from './Agenda';
import AlteraState from './AlteraState';
import Carro from './Carro';
import Musica from './Musica';
import PessoaProps from './PessoaProps';
import Produto from './Produto';
import PropsParaState from './PropsParaState';
import Time from './Time';
import TrocaDados from './TrocaDados';
import Usuario from './Usuario';

 export default function Content(){
     return(
         <View> 
             <Text> Content: </Text>
            {/*               
             <Usuario nome="Guilherme" login="Guiga" dataCriacao="11/07/2021" />
             <Produto produto="Melancia" valorProduto="5,99" quantidadeEstoque="333" validade="20/07/2021" />
             <Agenda nome=" Jose " telefone="63554891" email="Jose@gmail.com" /> */}
             {/* <PropsParaState nome="Cadeira de Massagem" preco={800} parcelas={12} /> */}
             {/* <PessoaProps nome="Almir" habilidade="fazer café" gostaDe="Flutter" />
             <PessoaProps nome="pessoa2" habilidade="voar" gostaDe="ninguém" />
             <TrocaDados /> */}

             <Carro />
             <Text>-</Text>
             <Time time="Audax" pontos="50" golsMarcados="18" golsSofridos="10" />
             <Time time="ReciclagemFC" pontos="89" golsMarcados="20" golsSofridos="9" />
             <Time time="Varzea" pontos="30" golsMarcados="18" golsSofridos="30" />
             <Text>--</Text>
             <Musica nome="Musica" duracao="Duração" album="Album" />
             
         </View>
     )
 }