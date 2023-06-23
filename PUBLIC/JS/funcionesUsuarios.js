const url = 'https://backnodejsapptower.onrender.com/api/usuarios/usuarios';

const listarUsuarios = async () => {
  let body = document.getElementById('contenido');
  if (body) {
    let mensaje = '';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const usuarios = data.usuario; // Asegúrate de que la estructura de datos sea correcta
        usuarios.map((usuario) => {
          const fechaA = new Date(usuario.fecha).toLocaleDateString();
        
          mensaje += `<tr><td>${usuario.tipo_documento}</td>` +
            `<td>${usuario.documento}</td>` +
            `<td>${usuario.nombre}</td>` +
            `<td>${usuario.apellido}</td>` +
            `<td>${usuario.correo}</td>` +
            `<td>${usuario.telefono}</td>` +
            `<td>${usuario.rol}</td>` +
            `<td>${usuario.estado ? 'Activo' : 'Inactivo'}</td>`+
            `<td>${fechaA} 
            </td>` +
            `<td>
              <a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(usuario)})'><i class = "fe fe-edit fe-24"></i></a>
              <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${usuario._id}")'><i class = "fe fe-delete fe-24"></i></a>
            </td></tr>`;
        });
        body.innerHTML = mensaje;
      })
  }
};

listarUsuarios();

const IniciarSesion = async (e) => {
    e.preventDefault();
    let contrasena = document.getElementById('contrasena').value;
    let usuario = document.getElementById('usuario').value;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const usuarios = data.usuario;
        const usuarioEncontrado = usuarios.find(u => (u.documento.toString() === usuario || u.correo === usuario) && u.password === contrasena);
        if (usuarioEncontrado) {
          window.location.href = 'usuariosL';
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Inicio de sesión fallido',
            
          });
        }
      });
  };
  
  
if(document.querySelector('#inicioSesion'))
{
    document.querySelector('#inicioSesion')
    .addEventListener('click', IniciarSesion)
}

const registrarUsuario = async () => {
  // Captura de valores de datos enviados desde el formulario
  let tipo_documento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let password = document.getElementById('password').value;
  let confirmarPassword = document.getElementById('confirmarPassword').value;
 

  let usuario = {
    tipo_documento: tipo_documento,
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    password: password
  };
  if (tipo_documento !== '' && documento !== '' && nombre !== '' && apellido !== '' && correo !== '' && telefono !== '' && password !== '' ){
  if ((password.length > 0 && confirmarPassword.length > 0) && (password === confirmarPassword)) {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(usuario),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(response => response.json())
      .then(json => {
        alert(json.usuario);
      });
    } else {
      alert('El password y la confirmación del Password no coinciden. Por favor verifique');
    }
  } else {
    alert('Tienes los campos vacíos');
    
  }
};

if(document.querySelector('#btnRegistrar'))
{
    document.querySelector('#btnRegistrar')
    .addEventListener('click', registrarUsuario)
}



const registrarUsuarioF = async () => {
  // Captura de valores de datos enviados desde el formulario
  let tipo_documento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let password = document.getElementById('password').value;
  let confirmarPassword = document.getElementById('confirmarPassword').value;
  let rol = document.getElementById('rol').value;

  let usuario = {
    tipo_documento: tipo_documento,
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    password: password,
    rol: rol
  };

  if (tipo_documento !== '' && documento !== '' && nombre !== '' && apellido !== '' && correo !== '' && telefono !== '' && password !== '' && rol !== '') {
    if (password.length > 0 && confirmarPassword.length > 0 && password === confirmarPassword) {
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(usuario),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then(response => response.json())
        .then(json => {
          Swal.fire({
            title: json.usuario,
            icon: 'success'
          }).then(() => {
            window.location.href = 'usuariosL';
          });
        })
        .catch(() => {
          Swal.fire({
            title: 'El password y la confirmación del Password no coinciden. Por favor verifique',
            icon: 'error'
          });
        })
        .catch(() => {
          Swal.fire({
            title: 'Tienes los campos vacíos',
            icon: 'error'
          });
        });
    } else {
      Swal.fire({
        title: 'El password y la confirmación del Password no coinciden. Por favor verifique',
        icon: 'error'
      });
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Tienes campos vacios',
      text: 'Por favor, completa los campos vacios'
    });
  }
};

  
if(document.querySelector('#btnRegistrarF')){
  document.querySelector('#btnRegistrarF')
  .addEventListener('click', (e) => {
  e.preventDefault();
  registrarUsuarioF(); 
})
}



const eliminar = (_id) => {
    Swal.fire({
      title: '¿Está seguro de realizar la eliminación?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Captura de valores de datos enviados desde el formulario
        let usuario = {
          _id: _id
        };
  
        fetch(url, {
          method: 'DELETE',
          mode: 'cors',
          body: JSON.stringify(usuario),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => {
          if (json.mensaje) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: json.mensaje
            });
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Eliminación Exitosa',
              text: 'Se eliminó la reserva correctamente',
              timer: 2000, 
              timerProgressBar: true
            }).then(() => {
              location.reload();
            });
          }
        });
      }
    })
  }        
  
const editar = (usuario) => {
  let _id =  document.getElementById('_id').value = '';
  let tipo_documento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let rol = document.getElementById('nombrerol').value;
  let estado = document.getElementById('estado').value;
  

  document.getElementById('_id').value = usuario._id
  document.getElementById('tipoDocumento').value = usuario.tipo_documento;
  document.getElementById('documento').value = usuario.documento;
  document.getElementById('nombre').value = usuario.nombre;
  document.getElementById('apellido').value = usuario.apellido;
  document.getElementById('correo').value = usuario.correo;
  document.getElementById('telefono').value = usuario.telefono;
  document.getElementById('nombrerol').value = usuario.rol;
  document.getElementById('estado').value = usuario.estado

}
const actualizarUsuario = async() => {
  let tipo_documento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let rol = document.getElementById('nombrerol').value;
  let estado = document.getElementById('estado').value;
  

  let usuario = {
    _id: document.getElementById('_id').value,
    tipo_documento: tipo_documento,
    estado: estado, 
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    rol: rol,
    tipoModificacion: 'Unitaria'
  };

  console.log(usuario)
  

  if (documento !== '' && tipo_documento !== '' && estado !== '' && nombre !== '' && apellido !== '' && correo 
  !== '' && telefono !== '' && rol !== '') {
    fetch(url, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(usuario),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      
    .then(response => response.json())
    .then(json => {
        Swal.fire({
          icon: 'success',
          title: 'Usuarios',
          text: json.usuario,
          allowOutsideClick: true, 
          willClose: () => {
            window.location.href = "usuariosL"; 
          }
        });
      });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Tienes campos vacios',
      text: 'Por favor, completa los campos obligatorios'
    });
  }
}


const editarButton = document.querySelector('#btnActualizar');
if (editarButton) {
    editarButton.addEventListener('click', actualizarUsuario);
}
