import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    // ****************************************************************
    // ***************** >>>>> APP <<<<<<  ****************************
    //*****************************************************************
    corpoAPP:{
        backgroundColor: 'antiquewhite',
        borderWidth:1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // ****************************************************************
    // ***************** HEADER / FOOTER ******************************
    //*****************************************************************
    corpoHeader:{
        width: 400,
        padding: 20,
        borderWidth: 1,
        backgroundColor: '#32753F',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText:{
        width: 400,
        height: 60,
        padding: 15,
        borderWidth: 1,
        backgroundColor: '#2AEBD6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        fontSize: 18,
    },
    

    corpoFooter:{
        padding:20,
        width: 400,
        borderWidth:1,
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoFooter:{
        fontStyle: 'italic',
        color: 'white',
    },

    textoFooter2:{
        fontSize: 19,
        color: 'white',
    },

    // ****************************************************************
    // *******************>>>>>> CONTENT  *****************************
    //*****************************************************************
    corpoContent:{
        borderWidth:1,
        backgroundColor: 'black',
    },
    // ****************************************************************
    // ******************* COMPONENTE IMC *****************************
    //*****************************************************************
    corpoIMC:{                  
        height: 400,
        width: 400,
        backgroundColor: 'green',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius:80
    }, 

    corpoIMCFundo:{          
        height: 400,
        width: 400,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 2,
    },     

    visor: {
        width: 330,
        height: 50,
        borderWidth: 2,
        backgroundColor: '#9f19',
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        margin: 6,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
    },

    visorInput: {
        width: 320,
        height: 35,
        borderWidth: 1,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        margin: 6,
        borderRadius: 10,
    },

    visorMensagem: {
        width: 320,
        height: 45,
        borderWidth: 1,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        margin: 6,
        borderRadius: 10,
    },

    linha: {
        width: 330,
        height: 50,
        borderWidth: 2,
        backgroundColor: '#9f19',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        margin: 2,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
    },

    visorAB:{
        width: 150,
        borderWidth: 1,
        borderRadius: 1,
        margin: 2,
        backgroundColor: 'white',
        textAlign: 'center',
    },

    btnCalc:{
        width: 10,
        borderWidth: 2,
    },  

    // ****************************************************************
    // ***************** COMPONENTE INFORMAÇÃO ************************
    //*****************************************************************

    corpoINFO:{                  
        width: 400,
        backgroundColor: '#11A83C',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 1,
        display:'flex',
        padding: 10,
    }, 
    

    tituloINFO:{
        margin: 10,
        fontWeight: '600',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

    autorINFO:{
        margin: 5,
        textAlign:'center',
        fontSize: 19,
    },

    conteudoINFO:{
        width: 380,
        margin: 5,
        padding: 10,
        textAlign:'center',
        fontSize: 17,
        borderRadius: 20,
        backgroundColor: 'antiquewhite',
        
    },

})