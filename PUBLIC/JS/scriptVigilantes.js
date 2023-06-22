const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
const expresionTelefono = /^[0-9]{10}$/;
const expresionDocumento = /^[0-9]{8,10}$/;
const expresionNombre =/^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/


const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const documento = document.getElementById('numero');
const email = document.getElementById('correo');


nombre.addEventListener('input', () => {
  if (expresionNombre.test(nombre.value)) {
    nombre.style.borderColor = 'green';
  } else {
    nombre.style.borderColor = 'red';
  }
});

apellido.addEventListener('input', () => {
  if (expresionApellido.test(apellido.value)) {
    apellido.style.borderColor = 'green';
  } else {
    apellido.style.borderColor = 'red';
  }
});
email.addEventListener('input', () => {
  if (expresionEmail.test(email.value)) {
    email.style.borderColor = 'green';
  } else {
    email.style.borderColor = 'red';
  }
});

telefono.addEventListener('input', () => {
  if (expresionTelefono.test(telefono.value)) {
    telefono.style.borderColor = 'green';
  } else {
    telefono.style.borderColor = 'red';
  }
});

documento.addEventListener('input', () => {
  if (expresionDocumento.test(documento.value)) {
    documento.style.borderColor = 'green';
  } else {
    documento.style.borderColor = 'red';
  }
});

const fechaNacimiento = document.getElementById('fechaNacimiento'); // Referencia al campo de fecha de nacimiento

fechaNacimiento.addEventListener('input', () => {
  const fechaNacimientoValue = fechaNacimiento.value;

  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();
  const anioNacimiento = new Date(fechaNacimientoValue).getFullYear();
  const edad = anioActual - anioNacimiento;

  if (edad >= 18) {
    fechaNacimiento.style.borderColor = 'green';
  } else {
    fechaNacimiento.style.borderColor = 'red';
  }
});
