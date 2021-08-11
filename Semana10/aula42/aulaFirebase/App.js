import React from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import ListUsers from './src/componentes/ListUsers'
// import AddUsers from './src/componentes/AddUsers'
// import DeleteUsers from './src/componentes/DeleteUsers'
// import EditUsers from './src/componentes/EditUsers'
// import ListProdutos from './src/componentesAtividade/ListProdutos';
// import AddProdutos from './src/componentesAtividade/AddProdutos';
// import DeleteProdutos from './src/componentesAtividade/DeleteProdutos';
// import EditProdutos from './src/componentesAtividade/EditProdutos';

import ListFuncionarios from './src/componentesAtivFuncionarios/ListFuncionarios';
import AddFuncionarios from './src/componentesAtivFuncionarios/AddFuncionarios';
import DeleteFuncionarios from './src/componentesAtivFuncionarios/DeleteFuncionarios';
import EditFuncionarios from './src/componentesAtivFuncionarios/EditFuncionarios';


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName='ListUsers'>
        <Stack.Screen name='ListFuncionarios'  component={ListFuncionarios} />
        <Stack.Screen name='AddFuncionarios'    component={AddFuncionarios} />
        <Stack.Screen name='DeleteFuncionarios' component={DeleteFuncionarios} />
        <Stack.Screen name='EditFuncionarios'  component={EditFuncionarios} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}




// ATIVIDADE 1

// const Stack = createStackNavigator();

// export default function App(){
//   return(
//     <NavigationContainer>
//       <StatusBar />
//       <Stack.Navigator initialRouteName='ListUsers'>
//         <Stack.Screen name='ListProdutos'  component={ListProdutos} />
//         <Stack.Screen name='AddProdutos'    component={AddProdutos} />
//         <Stack.Screen name='DeleteProdutos' component={DeleteProdutos} />
//         <Stack.Screen name='EditProdutos'  component={EditProdutos} />
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   )
// }





// Exemplo do export (Componentes do adduser, delete, edit e list)

// export default function App(){
//   return(
//     <NavigationContainer>
//       <StatusBar />
//       <Stack.Navigator initialRouteName='ListUsers'>
//         <Stack.Screen name='ListUsers'  component={ListUsers} />
//         <Stack.Screen name='AddUsers'    component={AddUsers} />
//         <Stack.Screen name='DeleteUsers' component={DeleteUsers} />
//         <Stack.Screen name='EditUsers'  component={EditUsers} />
//       </Stack.Navigator>
//     </NavigationContainer>
    
//   )
// }

