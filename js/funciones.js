//Elementos a pintar
const sectionTareas = document.querySelector('.tareas');
const btnForm = document.querySelector('#btn-guardar');
const tareaInput = document.querySelector('#tareaInput');
const prioridad = document.querySelector('#prioridad');

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

// btnForm.addEventListener('click', getDataForm);

// function getDataForm(event) {
//     event.preventDefault();
//     const tituloTarea = tareaInput.value;
//     const prioridadTarea = prioridad.value;

//     if (tituloTarea != "" && prioridadTarea != "") {
//         const newTarea = {
//             id: idTarea++,
//             titulo: tituloTarea,
//             prioridad: prioridadTarea
//         };
//         printTareas(tareas, newTarea);
//     } else {
//         alert("Debes rellenar todos los campos");
            
//     }
// }



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

// function filtrarTareas (pPrioridad, pTareas) {
//     let listaFiltrada = pTareas.filter (tarea => tarea.prioridad == pPrioridad);

//     return listaFiltrada;
// }

let seleccionaPrioridad = document.querySelector('#busquedaPrioridad');

seleccionaPrioridad.addEventListener('change', getBusquedaPrioridad);


function getBusquedaPrioridad(event) {
    let busquedaPrioridad = seleccionaPrioridad.value;

    if (busquedaPrioridad == 'urgente') {
        let listaPrioridad = listaTareas.filter(tarea => tarea.prioridad == 'urgente');
        printTareas(listaPrioridad);
    } else if (prioridad == 'diaria') {
        let listaPrioridad = listaTareas.filter(tarea => tarea.prioridad == 'diaria');
        printTareas(listaPrioridad);
    } else if (prioridad == 'mensual') {
        let listaPrioridad = listaTareas.filter(tarea => tarea.prioridad == 'mensual');
        printTareas(listaPrioridad);
    } else {
        printTareas(listaTareas);
    }
}

//TAREA A BUSCAR

const inputTarea = document.querySelector('#busquedaInput');

inputTarea.addEventListener('keydown', getInputBusqueda)

function getInputBusqueda(event) {
    let inputBusqueda = inputTarea.value;
    if (inputBusqueda == '') {
        printTareas(listaTareas);
    } else {
        let searchByWord = listaTareas.filter(tarea => tarea.titulo.toLowerCase().includes(inputBusqueda.toLowerCase()));
        printTareas(searchByWord);
    }   
}

// function searchByWord(pWord, pTareas) {
//     const listaFiltrada = pTareas.filter( tarea => {
//         return tarea.titulo.toLowerCase().includes(pWord);
//     })
//     return listaFiltrada;
// }