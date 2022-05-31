let inAltura = document.getElementById('inAltura');
let inPeso = document.getElementById('inPeso');

let resp = document.querySelector('div.resposta');

function calcularPeso (){
    let altura = Number(inAltura.value);
    let peso = Number(inPeso.value);

    let calculoIMC = peso / (altura * altura); 
    resp.innerHTML = `${calculoIMC}`;
}
let btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularPeso);

function limpar (){
    let altura = Number(inAltura.value);
    let peso = Number(inPeso.value);

    resp.innerHTML = '';

    if(altura == '' || peso == ''){
        resp.innerHTML = `Os campos já estão vazios ..`
    }else{
        inAltura.value = ' ';
        inPeso.value = ' '; 
    }
}
let btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', limpar);