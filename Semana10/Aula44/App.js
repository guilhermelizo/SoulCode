import React, {useState} from 'react';
import { StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/Login';
import Principal from './src/components/Principal';
// importando o UserContext
import {UserContext} from './src/components/UserContext';

export default function App() {
  //verifica se está logado
  const [isLogged, setIsLogged] = useState(false);
  //recebe o usuario logado
  const [user, setUser] = useState(null);

  const logado = async (u) =>{
      setIsLogged(true); // alterando para Principal
      setUser(u); // passando os dados do u (usuario) para user
  }

  const deslogado = async () => {
      setIsLogged(false); // voltando para Login
      setUser(null) // eu retiro o state de usuário
  }

  return (
    <NavigationContainer>
      <StatusBar/>
      <UserContext.Provider value={{logado, deslogado, user}} >
        {  isLogged ? <Principal /> : <Login />  }
      </UserContext.Provider>
    </NavigationContainer>
  );
}







// import React, {useState} from 'react';
// import { StatusBar } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import Principal from './src/components/Principal';
// import Login from './src/components/Login';
// //arquivo que inicia um determinado contexto para ser Providenciado
// import { UserContext } from './src/components/UserContext'

// export default function App(){
//   /**
//    * isLogged >> Constante(State) que sera utilizada para realizar a troca de telas
//    * a Login e Principal.
//    * Enquanto estiver falso, significa que não tem login sendo realizado. Logo,
//    * ficará preso na tela de Login até logar.
//    * Quando o usuário logar, o estate será mudado para true revelando a tela principal 
//    * 
//    */
//   const [isLogged, setIsLogged] = useState(false);
// // Se for isLogged for falso (não está logado), renderizará a tela de login. Se for verdadeiro, logado
//   /**
//    * user >>> Constante que irá armazenar os dados do usuário logado na autenticação
//    */
//   const [user, setUser] = useState(null);
//   /**
//    * logado >>> Função assincrona para realizar as trocas de estados quando o usuário logar.
//    * Alterando o isLogged para true e repassando o usuário logado.
//    * caso queira ver os dados do user, use console.loge para ver o objeto montado
//    */
//   const logado= async (u) => {
//     setIsLogged(true); // Alterando para Principal
//     setUser(u); // passando os dados do u )usuario) para user
//     /**
//      * deslogado >>> Função assincrona para realizar o desligamento do usuário, colocando
//      * o user como null.
//      * e isLogged para false, fazendo a tela de login ser mostrada novamente
//      */
//     const deslogado = async () =>{
//       setIsLogged(false);  // Voltando para login
//       setUser(null);  // Retirado o state de usuário
//     }
//     /**
//      * o return >>>> Dentro do return renderizável, teremos um contexto sendo utilizado, ele foi
//      * importado na linha 8.
//      * O Contexto irá disponibilizar um objeto contendo o {user, logado e deslogado} para quem
//      * estiver dentro do contexto
//      * ------------
//      * condição de renderização, isLogged é usado para definir qual tela deve ser mostrada.
//      * 
//      * Por Default, a tela de login será mostrada, quando um login for realizado, será
//      * trocada para a Principal.
//      * Se o usuário fechar o App, com o usuário logado, quando abrir novamente
//      * já irá para a Principal, devido ao registro de login
//      */
//     return(
//       <NavigationContainer>
//         <StatusBar />
//         <UserContext.Provider value={{logado, deslogado, user}}> //O provider é o que vai levar as informações para os outros componentes
//           {isLogged && user ? <Principal /> : <Login />}
//         </UserContext.Provider>
//       </NavigationContainer>
//     );
//   }
// }


