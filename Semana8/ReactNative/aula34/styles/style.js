import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewHeader:{                  // <<<-  Classe CSS Criada
        height:60,
        backgroundColor: 'blue',
        justifyContent:'center',
        alignItems: 'center'
    },      // <<- As classes são separadas por vírgula, assim como suas propriedades
                   
    textHeader:{
        color:'white',
        fontWeight:'bold',
        fontSize: 18
    },
    
    contentGL: {
        backgroundColor:'purple',
        height: 650,
        justifyContent:'center',
        alignItems:'center',
    },
    textLight:{
        color:'white',
    },

    containerGL: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
      },

      footerGL:{
        height:60,
        backgroundColor: 'blue',
        justifyContent:'center',
        alignItems: 'center'
      },

      viewContent: {
        backgroundColor: 'antiquewhite',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 25,
        borderRadius: 80,
      },

      
})