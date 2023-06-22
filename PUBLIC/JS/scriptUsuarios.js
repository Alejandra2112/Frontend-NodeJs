const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
const expresionTelefono = /^[0-9]{10}$/
const expresionDocumento = /^[0-9]{8,10}$/;
const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
const expresionpassword =  /^[a-zA-Z0-9]{8,}$/;
const expresionCpassword =  /^[a-zA-Z0-9]{8,}$/;

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const documento = document.getElementById('documento');
const email = document.getElementById('correo');
const password = document.getElementById('password');
const Cpassword = document.getElementById('confirmarPassword');

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

email.addEventListener('input', () => {
  if (expresionEmail.test(email.value)) {
    email.style.borderColor = 'green';
  } else {
    email.style.borderColor = 'red';
  }
});

password.addEventListener('input', () => {
  if (expresionpassword.test(password.value)) {
    password.style.borderColor = 'green';
  } else {
    password.style.borderColor = 'red';
  }
});

Cpassword.addEventListener('input', () => {
  if (expresionCpassword.test(Cpassword.value)) {
    Cpassword.style.borderColor = 'green';
  } else {
    Cpassword.style.borderColor = 'red';
  }
});
