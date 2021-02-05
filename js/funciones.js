//pintamos un elemento solo.
function printTareas(pTareas, pSeccionTareas) {
    for (let tarea of tareas) {
        const newTarea = printUnaTarea(tarea);
        pSeccionTareas.appendChild(newTarea);
    }
}
function printUnaTarea(pTarea) {
    let div = document.createElement('div'); 
    switch (pTarea.prioridad) {
        case 'mensual':
            div.style.backgroundColor = 'green';
            break;
        case 'diaria':
            div.style.backgroundColor = 'yellow';
            break;
        case 'urgente':
            div.style.backgroundColor = 'red';
            break;
    }
    

    let p = document.createElement('p');
    p.innerText = pTarea.titulo;

    let button = document.createElement('button');
    button.innerText = 'ELIMINAR';

    button.addEventListener('click', (event) => {
        let position = tareas.findIndex(tarea => { return tarea.id === pTarea.id
        });
        tareas.splice(position, 1)
        div.remove();
    })
    div.appendChild(p);
    div.appendChild(button);
    
    return div;    
}
