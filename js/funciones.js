//Elementos a pintar
const sectionTareas = document.querySelector('.tareas');
const btnForm = document.querySelector('#btn-guardar');
const tareaInput = document.querySelector('#tareaInput');
//const prioridad = document.querySelector('#prioridad');


let idTarea = 2;

printTareas(tareas, sectionTareas);

btnForm.addEventListener('click', (event) => {
    tareas.push({
        titulo: tareaInput.value,
        prioridad: prioridad.value,
        id: idTarea++,
    });

    sectionTareas.innerHTML = '';
    printTareas(tareas, sectionTareas);
});

//INTRODUCCIÓN DE TAREAS
function printTareas(pTareas, pIntroduceTareas) {
    
    for (let tarea of tareas) {
        const nuevaTarea = printUnaTarea(tarea);
        pIntroduceTareas.appendChild(nuevaTarea);
        
    }
    
}
//Pintamos un elemento solo.
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

//FILTRADO DE TAREAS
const seleccionaPrioridad = document.querySelector('#busquedadPrioridad')

seleccionaPrioridad.addEventListener('change', getBusquedaPrioridad);

function getBusquedaPrioridad(event) {
    let busquedaPrioridad = seleccionaPrioridad.value;

    if (busquedaPrioridad == 'urgente') {
        let listaPrioridad = listaTareas.filter(tarea => tarea.prioridad == 'urgente');
        printTareas(listaPrioridad);
    } else if (busquedaPrioridad == 'diaria') {
        let listaPrioridad = listaTareas.filter(tarea => tarea.prioridad == 'diaria');
        printTareas(listaPrioridad);
    } else if (busquedaPrioridad == 'mensual') {
        let listaPrioridad = listaTareas.filter(tarea => tarea.prioridad == 'mensual');
        printTareas(listaPrioridad);
    } else {
        printTareas(listaTareas);
    }
}



//TAREA A BUSCAR

const inputTarea = document.querySelector('#busquedaInput');

inputTarea.addEventListener('keydown', getInputBusqueda)

listaTareas = 0;

function getInputBusqueda(event) {
    let inputBusqueda = inputTarea.value;
    if (inputBusqueda == '') {
        printTareas(listaTareas);
    } else {
        let searchByWord = listaTareas.filter(tarea => tarea.titulo.toLowerCase().includes(inputBusqueda.toLowerCase()));
        printTareas(searchByWord);
    }   
}
