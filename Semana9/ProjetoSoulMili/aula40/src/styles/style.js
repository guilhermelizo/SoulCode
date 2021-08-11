import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  // *******************************************************
  // ******************* HEADER / FOOTER *******************
  header:{
    borderWidth: 1,
  },

  corpoFooter:{
    borderTopWidth: 1,
    padding: 5,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
},
  
  // *******************************************************
  // ******************* APP CONFIGS ***********************
  
    corpoApp:{
      borderWidth: 1,
    },

    container:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 30,
    },

    corpoApp:{
      borderWidth: 1,
    },
  // ********************************************************
  // ********************* HOME *****************************

    containerhome:{
      borderWidth:1,
      flex: 1 , 
      alignItems: 'center', 
      justifyContent: 'center',
    }, 
    
    dadosBancarios:{
      width: '80%',
      borderWidth:1,
      margin: 10,
      padding: 10,

    },
  // ********************************************************
  // ********************* DICAS ****************************
    containerDicas:{
      borderWidth: 1,
      padding: 8,
      margin: 5,
    },

})