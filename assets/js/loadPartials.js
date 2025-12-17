// Función para cargar un archivo HTML externo (partial)
// y colocarlo dentro de un elemento por su ID
function loadPartial(id, file) {

  // fetch() solicita el archivo indicado en "file"
  // por ejemplo: "partials/header.html"
  fetch(file)

    // Cuando el archivo se carga correctamente,
    // la respuesta se convierte a texto (HTML)
    .then(response => response.text())

    // "data" contiene el HTML completo del archivo
    .then(data => {

      // Buscamos el elemento con el id recibido
      // y le insertamos el HTML cargado
      document.getElementById(id).innerHTML = data;
    })

    // Si ocurre algún error (archivo no encontrado, ruta incorrecta, etc.)
    // se muestra en la consola
    .catch(error => {
      console.error("Error cargando el archivo:", file, error);
    });
}

// Carga el header dentro del <div id="header"></div>
loadPartial("header", "partials/header.html");

// Carga el footer dentro del <div id="footer"></div>
loadPartial("footer", "partials/footer.html");
