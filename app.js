// 1 - Obtenemos los elementos con los que vamos a trabajar.
const form = document.getElementById('agrFor'); // Referencia al formulario.
const lista = document.getElementById('lisTar');  // Referencia al contenedor de las listas a mostrar.
const botEli = document.getElementById('eliTar'); // Referencia al botón eliminar tareas.

// 2 - Aplicamos una acción a cada elemento.
form.addEventListener('submit', function(event){
    event.preventDefault(); // Cancela el evento por defecto, en este caso el envio del form.

    const nueTar = document.getElementById('tarea').value; // Referencia y toma el valor del input.

    // 1- Crea un nuevo elemento.
    const nueIte = document.createElement('li');
    // 2- Configura el nuevo elemento.
    nueIte.innerText = nueTar;
    nueIte.addEventListener('click', function(){
        nueIte.classList.toggle('completada');
    });
    // 3- Inserta el nuevo elemento al DOM.
    lista.appendChild(nueIte);

    document.getElementById('tarea').value = ''; // Vacia el imput.
});

botEli.addEventListener('click', function(){ 
    const tarCom = document.querySelectorAll('.completada'); // Referencia a todos los item.
    
    tarCom.forEach(function (tarCompletada){
        tarCompletada.remove();
    });

});