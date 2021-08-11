import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Imports do Tab Navigator
 import Ionicons from "react-native-vector-icons/Ionicons"  // Import dos icones utilizados na navegação
import Home from './src/components/Home';
import Deposito from './src/components/Deposito';
import Dicas from './src/components/Dicas';
import Header from './src/components/Header';
import Footer from './src/components/Footer';


const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Header />
      <StatusBar />
       {/*Tab.Navigator >> Tag de Navegação do TabNavigator + Parametro da pagina inicial (Rota inicial) */}
         {/* Tab.Screen >> Esta é a tab do TabNavigator para cada aba que for ser criada com o name (nome a mostrar) + Component(Caminho do componente que abrirá naquela tab) */}
          {/* A screenOptions é uma função que está retornando uma configuração */}
          
      <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={({route}) => ({
          tabBarIcon:({color, size}) =>{
            let iconName;

            switch(route.name){
              case 'Home':
                iconName = "home";
                break;
              case 'Deposito':
                iconName = 'list';
                break;
              case 'Dicas':
                iconName = 'grid';
                break;
            }

          return(
            <Ionicons name={iconName} size={size} color={color} />
          )
        },
      })}
          tabBarOptions={{
              activeTintColor: 'blue',
              inactiveTintColor: 'gray',
          }}
      >   
      
        <Tab.Screen name="Home" component={Home}/> 
        <Tab.Screen name="Deposito" component={Deposito}/>
        <Tab.Screen name="Dicas" component={Dicas}/>
      </Tab.Navigator>
      <Footer />  

    </NavigationContainer>
  )
}