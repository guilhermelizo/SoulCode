
// Crie uma função chamada aciona, que de acordo com o valor de 
//uma variavel global chamada 
// controlador faça as seguintes ações. através do onclick ative 
//a função no botão.
// controlador = 0.
//     se controlador for zero -> 
//         mude a cor de fundo da div id vermelha, para cor red, 
//         mude o valor de controlador para 1 
//     se controlador for 1 -> 
//         mude a cor de fundo da div id amarela, para cor yellow, 
//         mude o valor de controlador para 2
//     se controlador for 2 -> 
//         mude a cor de fundo da div id verde, para cor green, 
//         mude o valor de controlador para 0

// Detalhe apenas a div de cada condição deve ficar colorida, as outras não.


let controlador = 0;

//setTimeout(função, valorEmMilisegundos);
function aciona(){
        if(controlador ==0){
            document.getElementById("verde").style.backgroundColor= '#3E3E3E';
            document.getElementById("vermelho").style.backgroundColor= 'red';
            controlador = 1;
            setTimeout(aciona, 6000)
        }
        else if(controlador == 1){
            document.getElementById("vermelho").style.backgroundColor= '#3E3E3E';
            document.getElementById("amarelo").style.backgroundColor= 'yellow';
            controlador = 2;
            setTimeout(aciona, 2000)
        }
        else{
            document.getElementById("amarelo").style.backgroundColor= '#3E3E3E';
            document.getElementById("verde").style.backgroundColor= 'green';
            controlador = 0;
            setTimeout(aciona, 1000)
        }
}


