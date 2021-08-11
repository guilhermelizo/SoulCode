import React, {useState, createContext, useCallback, useEffect, useMemo, useReducer} from 'react';
import { Text, View, ScrollView } from 'react-native';
import ExCreateContext from '../exemplos/ExCreateContext';
import ExUseCallback from '../exemplos/ExUseCallback';
import ExUseEffect from '../exemplos/ExUseEffect';
import ExUseMemo from '../exemplos/ExUseMemo';
import ExUseReducer from '../exemplos/ExUseReducer';
import ExUseState from '../exemplos/ExUseState';
import ExUseState2 from '../exemplos/ExUseState2';
import { styles } from '../estilo/estilo';
//Imports da atividade do Almir \/
import Leide from '../atividadeAlmir/Leide';
import Filipe from '../atividadeAlmir/Filipe';
import Almir from '../atividadeAlmir/Almir';
import ContextAtividade from '../atividadeAlmir/ContextAtividade';

import ComponenteContext from '../atividadePizza/ComponenteContext'
import AtividadeEffect from '../exemplos/atividadeEffect/Atividade';
import UseReducerAtividade from '../exemplos/UseReducerAtividade';


export default function Content(){
    return (
        <View style={styles.content}>
            <ScrollView>
                <Text style={styles.titleDark}>Área de Exemplos:</Text>
                {/* <ExUseMemo /> */}
                {/* <ExUseCallback /> */}
                {/* <ExUseState /> */}
                {/* <ExUseState2 /> */}
                {/* <ExCreateContext /> */}
                {/* <ContextAtividade /> */}
                {/* <ComponenteContext /> */}
                
                <ExUseReducer />
                <UseReducerAtividade />

                {/* <ExUseEffect /> */}
                {/* <AtividadeEffect /> */}

            </ScrollView>
        </View>
    )
}