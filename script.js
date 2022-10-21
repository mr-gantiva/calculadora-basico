const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnSumar = document.querySelector('#btnSumar');
const btnRestar = document.querySelector('#btnRestar');
const btnMultip = document.querySelector('#btnMultiplicar');
const btnDividir = document.querySelector('#btnDividir');
const pResult = document.querySelector('#result');

function btnSumarOnClick (){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = sumaInputs;
}

function btnRestarOnClick (){
    const sumaInputs = parseInt(input1.value) - parseInt(input2.value);
    pResult.innerHTML = sumaInputs;
}

function btnMultiplicarOnClick (){
    const sumaInputs = parseInt(input1.value) * parseInt(input2.value);
    pResult.innerHTML = sumaInputs;
}

function btnDividirOnClick (){
    const sumaInputs = parseInt(input1.value) / parseInt(input2.value);
    pResult.innerHTML = sumaInputs;
}


