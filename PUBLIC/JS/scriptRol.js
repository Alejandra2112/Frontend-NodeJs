const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
const espresionDescripcion = /^[\s\S]*$/;

const nombre = document.getElementById('nombrerol')
const descripcion = document.getElementById('descripcion')


descripcion.addEventListener('input', () => {
  if (espresionDescripcion.test(descripcion.value)) {
    descripcion.style.borderColor = 'green';
  } else {
    descripcion.style.borderColor = 'red';
  }
});

nombre.addEventListener('input', () => {
  if (expresionNombre.test(nombre.value)) {
    nombre.style.borderColor = 'green';
  } else {
    nombre.style.borderColor = 'red';
  }
});

function validarPermisos() {
  const checkboxes = document.querySelectorAll('#permisos input[type="checkbox"]');
  let alMenosUnoSeleccionado = false;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      alMenosUnoSeleccionado = true;
    }
  });

  if (!alMenosUnoSeleccionado) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Debes seleccionar al menos un permiso.'
    });
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Permisos seleccionados correctamente.'
    });
 
  }
}

