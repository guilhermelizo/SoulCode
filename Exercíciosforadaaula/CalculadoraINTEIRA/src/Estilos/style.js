import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    calculadoraCorpo:{                  // <<<-  Classe CSS Criada
        height: 500,
        width: 500,
        backgroundColor: 'blue',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 2,
    },      // <<- As classes são separadas por vírgula, assim como suas propriedades

    container:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 30,
    },

    visor: {
        width: 350,
        height: 50,
        borderWidth: 2,
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        margin: 6,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
    },

    visorInput: {
        width: 340,
        height: 35,
        borderWidth: 1,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        margin: 6,
        borderRadius: 10,
    },

    linha: {
        width: 350,
        height: 50,
        borderWidth: 2,
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        margin: 2,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
    },

    buttonLinha: {
        flex: 1,
        backgroundColor: 'antiquewhite',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 50,
    },

    visorAB:{
        borderWidth: 1,
        borderRadius: 10,
        margin: 2,
        backgroundColor: 'white',
        textAlign: 'center',
    },


    header:{
        width: 500,
        height: 100,
        marginTop: 50,
        backgroundColor: 'antiquewhite',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderTopStartRadius: 15,
        borderTopRightRadius: 50,
        
    },

    footer:{
        width: 500,
        height: 100,
        backgroundColor: 'antiquewhite',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 60,
    },

})