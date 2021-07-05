
    let dolar = parseFloat(0.20);
    let euro  = parseFloat(0.17);

  funcaomonetaria = () =>{
      let monetario = document.getElementById("moedas").value;

      let resultado = parseFloat(document.getElementById("valorreal").value);

      if(monetario == "dolar"){
         resultado = dolar*resultado;
        document.getElementById("resultadomonetario").value = resultado.toFixed(2);
      } else if (monetario == "euro"){
        resultado = euro*resultado;
        document.getElementById("resultadomonetario").value = resultado.toFixed(2)
      } else{
        document.getElementById("resultadomonetario").value = "Escolha uma opção válida";
      }

  }
//////////////////////////////////////////
//////////////// TEMPERATURA ////////////
  let tempfar = parseFloat(32);
  let tempkel = parseFloat(273.15);

  funcaotemperatura = () =>{
    let valortemp = document.getElementById("temperaturas").value;

    let resultadotemp = parseFloat(document.getElementById("valortemperatura").value);

    if(valortemp == "fahrenheit"){
      resultadotemp = parseFloat(resultadotemp * (9/5)) + tempfar;
      document.getElementById("resultadotemperatura").value = resultadotemp.toFixed(2);
    } else if (valortemp == "kelvin"){
      resultadotemp = resultadotemp + tempkel;
      document.getElementById("resultadotemperatura").value = resultadotemp.toFixed(2);
    } else{
      document.getElementById("resultadotemperatura").value = "Escolha uma opção válida";
    }

}

 
