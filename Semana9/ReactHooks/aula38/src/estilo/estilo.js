import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    titleDark:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    
    titleLight:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },

    subtitleDark:{
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },

    subtitleLight:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

    header:{
        flex: 1,
        backgroundColor: '#00BCD4',
        justifyContent: 'center',
        alignItems: 'center',
    },

    content:{
        flex: 9,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
    },

    input:{
        height: 30,
        width: '100%',
        borderWidth: 1,
        padding: 10,
        margin: 5,
    },

    container:{
        flex: 1,
        margin: 30,
        borderWidth: 1,
    },



})