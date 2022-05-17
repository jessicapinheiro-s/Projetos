let inTarefa = document.getElementById('inTarefa');
let tarefa = inTarefa.value;
let resp = document.querySelector('div.resposta');

function validarEntrada (){
    while (tarefa == ''){
        resp.innerHTML = `O campo está vazio, digite algo`
        inTarefa.focus();
        return;
    }
}
function addTarefa () {
    resp.innerHTML = '';
    
    let lista = document.getElementById('lista');
    let li = document.createElement('li');
    let txt = document.createTextNode(tarefa);
    let btExcluir = document.createElement('button');
    let txtBt = document.createTextNode('Excluir');
    
    let checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';

    btExcluir.id = 'btExcluir';

    li.appendChild(checkbox);
    li.appendChild(txt);
    lista.appendChild(li);
    li.appendChild(btExcluir);
    btExcluir.appendChild(txtBt);

    inTarefa.value = '';
    inTarefa.focus();
}
function excluir() {
    let checkbox = document.getElementsByTagName('input');
    let lista = document.getElementById('lista');
    let li = document.getElementsByTagName('li');
    
    if(checkbox[0].checked){
        if(lista.parentNode){
            lista.parentNode.removeChild(li);
        }
    }

    let rem = lista.removeChild(li);

}
let btExcluir = document.getElementById('btExcluir');
btExcluir.addEventListener('click', excluir);


