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