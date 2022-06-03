function addTarefa() {
    let inTarefa = document.getElementById('inTarefa');
    let tarefa = inTarefa.value;
    let resp = document.querySelector('div.resposta');

    while (tarefa == '') {
        resp.innerHTML = `O campo está vazio, digite algo`
        inTarefa.focus();
        return;
    }

    resp.innerHTML = '';

    let lista = document.getElementById('lista');
    let li = document.createElement('li');
    let txt = document.createTextNode(tarefa);

    let checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';

    li.appendChild(checkbox);
    li.appendChild(txt);
    lista.appendChild(li);

    inTarefa.value = '';
    inTarefa.focus();
}
function excluir() {
    let checkbox = document.getElementsByTagName('input');
    let li = document.getElementsByTagName('li');
    let lista = document.getElementById('lista');
    let tam = checkbox.length;


    var aux = -1;

    for (let i = 0; i < tam; i++) {
        if (checkbox[i].checked) {
            aux = i;
            lista.removeChild(li[0]);
            break;
        }

    }

}
let btExcluir = document.getElementById('btExcluir');
btExcluir.addEventListener('click', excluir);



