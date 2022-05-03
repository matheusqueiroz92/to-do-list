window.onload = function listaDeTarefas () {
    const listaTarefas = document.getElementById("lista-tarefas");
    const tarefa = document.getElementById("texto-tarefa");
    const btn = document.getElementById("criar-tarefa");

    btn.addEventListener('click', function(){
        let item = document.createElement('li');
        item.innerText = tarefa.value;
        item.id = tarefa.value;
        item.className = 'cor-inicial';
        tarefa.value = '';
        tarefa.focus();
        listaTarefas.appendChild(item);
    });

    listaTarefas.addEventListener('click', function(e) {
        let elementos = document.querySelectorAll('li');
        elementos.forEach(element => {
            element.style["color"] = "black";
            element.style["background-color"] = "white";
        });
        let clickItem = e.target.id;
        let alteraBack = document.getElementById(clickItem);
        alteraBack.style.backgroundColor = "gray";
    });

    let contadorClicks = 0;

    listaTarefas.addEventListener('dblclick', function(e){
        if (contadorClicks == 0) {
            let elementos = document.querySelectorAll('li');
            let dbClick = e.target.id;
            let riscaItem = document.getElementById(dbClick);
            riscaItem.className = 'completed';
            contadorClicks += 1;
        } 
        else {
            let elementos = document.querySelectorAll('li');
            let dbClick = e.target.id;
            let riscaItem = document.getElementById(dbClick);
            riscaItem.className = '';
            contadorClicks -= 1;
        }
    });
}