// Criar uma função que soma + 1 em uma variável global count

let cont = 0;

let contador = () => {
    document.getElementById('contador').innerHTML = 
    cont;
    cont++
    setTimeout(contador, 500);
}