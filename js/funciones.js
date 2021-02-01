function saveTarea(pTarea) {

    let duplicado = tareas.some(tarea => tarea.titulo === pTarea.titulo && tarea.prioridad === pPrioridad.prioridad);

    if (!duplicado) {
        tareas.push(Ptarea);
        printUnaTarea(pTarea);
        console.log(tareas);
    } else {
        alert('Tarea duplicada');
    }
}