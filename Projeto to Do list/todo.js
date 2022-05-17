

function addTarefa (){
    let inTarefa = document.getElementById('inTarefa');
    let tarefa = inTarefa.value;
    let resp = document.querySelector('div.resposta');
        if( tarefa == ''){
            resp.innerHTML = `O campo está vazio, digite algo`
            inTarefa.focus();
            return;
        }else{
            resp. innerHTML = '';
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

}
function excluir () {
    tarefa.remove();
}