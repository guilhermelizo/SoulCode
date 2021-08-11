import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/ComponentesDrawerNavigation/HomeScreen'
import Produtos from './src/ComponentesDrawerNavigation/Produtos'
import Detalhes from './src/ComponentesDrawerNavigation/Detalhes'

//import dos componentes do Navigator
// import Detalhes from './src/componentesNavigation/Detalhes'
// import Produtos from './src/componentesNavigation/Produtos'
// import HomeScreen from './src/componentesNavigation/HomeScreen'

//Imports do Tab Navigator
// import HomeScreen from './src/ComponentesTabNavigator/HomeScreen'
// import Detalhes from './src/ComponentesTabNavigator/Detalhes'
// import Produtos from './src/ComponentesTabNavigator/Produtos'
// import Ionicons from "react-native-vector-icons/Ionicons"  // Import dos icones utilizados na navegação




const Drawer = createDrawerNavigator(); // Const de criação do Drawer

export default function App(){
  return(
  <NavigationContainer>
    <StatusBar />
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Produtos" component={Produtos} />
      <Drawer.Screen name="Detalhes" component={Detalhes} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




//   Este é o return do Navigation:  (Stack Navigator)

//const de criação da navegação
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer style={styles.container}>
//       <StatusBar style="dark" />
//       <Text>FUNFO!</Text>

//       <Stack.Navigator initialRouteName='Home'>
      
//         <Stack.Screen name='Home'     component={HomeScreen} />
//         <Stack.Screen name='Detalhes' component={Detalhes} />
//         <Stack.Screen name='Produtos' component={Produtos} />

//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// }





// *********************************************************
// //Este é o do TabNavigator 

// const Tab = createBottomTabNavigator();

// export default function App(){
//   return(
//     <NavigationContainer>
//       <StatusBar />
//        {/*Tab.Navigator >> Tag de Navegação do TabNavigator + Parametro da pagina inicial (Rota inicial) */}
//          {/* Tab.Screen >> Esta é a tab do TabNavigator para cada aba que for ser criada com o name (nome a mostrar) + Component(Caminho do componente que abrirá naquela tab) */}
//           {/* A screenOptions é uma função que está retornando uma configuração */}
          
//       <Tab.Navigator 
//         initialRouteName="Home" 
//         screenOptions={({route}) => ({
//           tabBarIcon:({color, size}) =>{
//             let iconName;

//             switch(route.name){
//               case 'Home':
//                 iconName = "home";
//                 break;
//               case 'Produtos':
//                 iconName = 'list';
//                 break;
//               case 'Detalhes':
//                 iconName = 'grid';
//                 break;
//             }

//           return(
//             <Ionicons name={iconName} size={size} color={color} />
//           )
//         },
//       })}
//           tabBarOptions={{
//               activeTintColor: 'blue',
//               inactiveTintColor: 'gray',
//           }}
//       >   
      
//         <Tab.Screen name="Home" component={HomeScreen}/> 
//         <Tab.Screen name="Produtos" component={Produtos}/>
//         <Tab.Screen name="Detalhes" component={Detalhes}/>
//       </Tab.Navigator>

//     </NavigationContainer>
//   )
// }
