var id;
let contador = 0;
let contadorRegre = 1000;

function contadores() {
    let elemento = document.querySelector('span#contador');
    let radio = document.getElementsByName('contadorRadio');
    if (radio[0].checked) {
        id = setInterval(() => elemento.innerHTML = contador++, 100);
    } else {
        id = setInterval(() => elemento.innerHTML = contadorRegre--, 100);
    }
}
function pararContagem() {
    clearInterval(id);
}
function recomecar() {
    contadorRegre = 0;
    contador = 0;
}























