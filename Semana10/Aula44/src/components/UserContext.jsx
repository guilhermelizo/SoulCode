import { createContext } from 'react';

/**
 * UserContext seá um contexto criado para podermos repassar
 * as funções e objetos para outras páginas sem a necessidade de props.
 * Os componentes, login e userVirew precisam enchergar algumas funções de App.
 * Em App o provider estará ativo para que possa repassar essas informações.
 * 
 * O CreateContext não está dentro de App, devido ao problema relacionado aos 
 * ciclos de componentes.
 * Onde App está chamando 'Login' e 'Principal', e ao chamarmos o createContext dentro
 * do App, é como se o App estivesse chamando a si mesmo em seus filhos, o que
 * gera um ciclo.
 * 
 */


 export const UserContext = createContext();