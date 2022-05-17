let inTarefa = document.getElementById('inTarefa');
let tarefa = inTarefa.value;

function addTarefa (){
    let resp = document.querySelector('div.resposta');
    
    if(tarefa == ' '){
        resp.innerHTML = `Preencha o campo corretamente ..`;
        inTarefa.focus();
    }else{
        let ul = document.getElementById('lista');
        let li = document.createElement('li');
        let txt = document.createTextNode(tarefa);
        let btExcluir = document.createElement('button');
        let txtBt = document.createTextNode('Excluir');
        
        btExcluir.id = 'btExcluir';
    
        li.appendChild(txt);
        ul.appendChild(li);
        li.appendChild(btExcluir);
        btExcluir.appendChild(txtBt);

        inTarefa.value = '';
        inTarefa.focus();
    }

}
