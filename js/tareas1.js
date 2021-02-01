
//Elementos a pintar
let sectionTareas = document.querySelector('.tareas');

//pintamos un elemento solo.
const printTareas = function (pTareas) {
    sectionTareas.innerHTML = "";
    pTareas.forEach(tarea => {
        printUnaTarea(tarea);        
    });
}
const printUnaTarea = function (pJsonTarea) {
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let div = document.createElement('div');
    //let button = document.createElement('button');


    //contenido
    let contenidoH2 = document.createTextNode(pJsonTarea.titulo);
    let contenidoDiv = document.createTextNode(`Eliminar Tarea`);

    h2.appendChild(contenidoH2);
    button.appendChild(contenidoButton);

    div.innerText = `<button id="btn-eliminar">ELIMINAR</button>`;
    div.classList.add('eliminar');
    div.dataset.id = pJsonTarea.id;
    div.addEventListener('click', deleteTarea);

    article.appendChild(h2);
    article.appendChild(div);

    sectionTareas.appendChild(article);
}
printTareas(tareas);

//Borrar tareas
function deleteTarea(event) {
    let id = parseInt(event.target.dataset.id);
    let article = event.target.parentNode;
    article.parentNode.removeChild(article);
}

//Pintar tareas
const inputTitulo = document.querySelector('#titulo');
const inputPrioridad = document.querySelector('#prioridad');
let idTarea = tareas.lenght;

//Botón
const btnForm = document.querySelector('#btn');

btnForm.addEventListener('click', getDataForm);

function getDataForm(event) {
    event.preventDefault();
    const tituloTarea = inputTitulo.value;
    const prioridadTarea = inputPrioridad.value;

    if (tituloTarea != "" && prioridadTarea != "") {
        const nuevaTarea = {
            id: ++idTarea,
            titulo: tituloTarea,
            prioridad: prioridadTarea
        };
        saveTarea(nuevaTarea);
    } else {
        document.write('Debes completar todos los campos');
    }
}


