soma = () =>{
    let v1 = parseInt(document.getElementById("valorA").value);
    let v2 = parseInt(document.getElementById("valorB").value);
    
    document.getElementById('resultado').innerHTML= `
    ${v1} + ${v2} = ${v1+v2}
    `
}

subtrai = () =>{
    let v1 = parseInt(document.getElementById("valorA").value);
    let v2 = parseInt(document.getElementById("valorB").value);
    
    document.getElementById('resultado').innerHTML= `
    ${v1} - ${v2} = ${v1-v2}
    `
}

multiplica = () =>{
    let v1 = parseInt(document.getElementById("valorA").value);
    let v2 = parseInt(document.getElementById("valorB").value);
    
    document.getElementById('resultado').innerHTML= `
    ${v1} x ${v2} = ${v1*v2}
    `
}

divide = () =>{
    let v1 = parseInt(document.getElementById("valorA").value);
    let v2 = parseInt(document.getElementById("valorB").value);
    
    document.getElementById('resultado').innerHTML= `
    ${v1} / ${v2} = ${v1/v2}
    `
}

porcentagem = () =>{
    let v1 = parseInt(document.getElementById("valorA").value);
    let v2 = parseInt(document.getElementById("valorB").value);
    
    document.getElementById('resultado').innerHTML= `
    ${v1} % ${v2} = ${v1%v2}
    `
}

aoquadradoA = () =>{
    let v1 = parseInt(document.getElementById("valorA").value);
    
    let quadradoA = Math.pow(v1,2)

    document.getElementById('resultado').innerHTML= `
    ${v1}² = ${quadradoA}
    `
}

aoquadradoB = () =>{
    let v2 = parseInt(document.getElementById("valorB").value);
    
    let quadradoB = Math.pow(v2,2)

    document.getElementById('resultado').innerHTML= `
    ${v2}² = ${quadradoB}
    `
}

elevadoAB = () =>{
    let v1 = parseInt(document.getElementById("valorA").value);
    let v2 = parseInt(document.getElementById("valorB").value);
    
    let quadradoAB = Math.pow(v1,v2)

    document.getElementById('resultado').innerHTML= `
    ${v1} ^ ${v2} = ${quadradoAB}
    `
}
