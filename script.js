function agregarTarea() {
  let nuevaTarea = document.getElementById("nuevaTarea").value;

  if (nuevaTarea === "") {
    alert("Agrega una tarea");
    return;
  }

  let nuevaTareaElemento = document.createElement("li");
  nuevaTareaElemento.textContent = nuevaTarea + " ";

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = function () {
    nuevaTareaElemento.remove();
  };

  nuevaTareaElemento.appendChild(botonEliminar);

  document.getElementById("listaTareas").appendChild(nuevaTareaElemento);

  document.getElementById("nuevaTarea").value = "";
}
