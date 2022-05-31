let inAltura = document.getElementById('inAltura');
let inPeso = document.getElementById('inPeso');

let resp = document.querySelector('div.resposta');

function calcularPeso (){
    let altura = Number(inAltura.value);
    let peso = Number(inPeso.value);

    if(altura == '' || peso == ''){
        resp.innerHTML = `Algum campo está vazio, preencha o campos corretamente ..`
    }else{
        let calculoIMC = peso / (altura * altura); 
        let arredondado = parseFloat(calculoIMC.toFixed(2));

        if(arredondado < 18.5){
            resp.innerHTML = `<p>Seu IMC é: ${arredondado}</p> `;
            resp.innerHTML += `classificação: MAGREZA`
        }else if(arredondado == 18.5 || arredondado <= 24.9){
            resp.innerHTML = `<p>Seu IMC é: ${arredondado}</p>`;
            resp.innerHTML += `classificação: NORMAL`
        }else if(arredondado == 25.0 || arredondado <= 29.9){
            resp.innerHTML = `<p>Seu IMC é: ${arredondado}</p>`;
            resp.innerHTML += `classificação: SOBREPESO`
        }else if(arredondado == 30.0 || arredondado <= 39.9){
            resp.innerHTML = `<p>Seu IMC é: ${arredondado}</p>`;
            resp.innerHTML += `classificação: OBESIDADE`
        }else if(arredondado > 40.0){
            resp.innerHTML = `<p>Seu IMC é: ${arredondado}</p>`;
            resp.innerHTML += `classificação: OBESIDADE GRAVE`
        }
        
    }
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
        inAltura.value = '';
        inPeso.value = ''; 
    }
}
let btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', limpar);