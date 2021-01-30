let sectionTareas =document.querySelector('#tareas');

const printTarea = function (pTareas) {
    sectionTareas.innerHTML = "";
    for (let tarea of pTareas) {
        sectionTareas.innerHTML += `<article>
        <h1>Nombre de tarea</h1><button id="eliminar">ELIMINAR</button>
    </article>`;
    }
}
