const lista = document.getElementById("lista-tareas");
const mensajeCarga = document.getElementById("mensaje-carga");
const mensajeError = document.getElementById("mensaje-error");

async function obtenerTareasCompletadas() {
    try {
        const res =await fetch("https://jsonplaceholder.typicode.com/todos");

        if(!res.ok) {
            throw new Error("Error en la carga de datos");
            
        }
        const tareas = await res.json();
        const completadas = tareas.filter(t => t.completed);

        completadas.forEach(tarea => {
            const li = document.createElement("li");
            li.textContent = tarea.title;
            lista.appendChild(li);
            
        });
    }  catch (error) {
        mensajeError.textContent = error.message;
    }  finally  {
        mensajeCarga.style.display = "none";
    }
    
}

obtenerTareasCompletadas();