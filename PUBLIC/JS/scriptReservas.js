const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
const expresionVehiculo = /^[a-zA-Z0-9]+$/
const expresionCapacidad = /^[0-9]+$/
const expresionParqueadero = /^[a-zA-Z0-9]+$/


const nombre = document.getElementById('propietario');
const vehiculo = document.getElementById('vehiculo');
const capacidad = document.getElementById('capacidad');
const parqueadero= document.getElementById('parqueadero');

nombre.addEventListener('input', () => {
  if (expresionNombre.test(nombre.value)) {
    nombre.style.borderColor = 'green';
  } else {
    nombre.style.borderColor = 'red';
  }
});

vehiculo.addEventListener('input', () => {
  if (expresionVehiculo.test(vehiculo.value)) {
    vehiculo.style.borderColor = 'green';
  } else {
    vehiculo.style.borderColor = 'red';
  }
});

capacidad.addEventListener('input', () => {
  if (expresionCapacidad.test(capacidad.value)) {
    capacidad.style.borderColor = 'green';
  } else {
    capacidad.style.borderColor = 'red';
  }
});

parqueadero.addEventListener('input', () => {
  if (expresionParqueadero.test(parqueadero.value)) {
    parqueadero.style.borderColor = 'green';
  } else {
    parqueadero.style.borderColor = 'red';
  }
});


const fechaInput = document.getElementById('fechaFin');

fechaInput.addEventListener('input', () => {
  const fechaIngresada = new Date(fechaInput.value);
  const fechaActual = new Date();

  fechaInput.style.borderColor = fechaIngresada >= fechaActual ? 'green' : 'red';
});
