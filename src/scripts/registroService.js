// Función para registrar un nuevo usuario
function registrarUsuario(nombre, correo, contrasena) {
  // Verificar si el correo ya está registrado
  if (correoRegistrado(correo)) {
    alert(
      "El correo electrónico ya está registrado. Por favor, intenta con otro."
    );
    return false;
  }

  // Crear objeto con los datos del usuario
  const usuario = {
    nombre: nombre,
    correo: correo,
    contrasena: contrasena,
  };

  // Guardar el usuario en localStorage (convertir a cadena JSON)
  localStorage.setItem(correo, JSON.stringify(usuario));

  // Mostrar alerta de registro exitoso
  alert("Registro exitoso. Serás redirigido al inicio de sesión.");
  redirigirALogin(); // Redirigir al usuario al inicio de sesión

  return true;
}

// Función para verificar si el correo ya está registrado
function correoRegistrado(correo) {
  return localStorage.getItem(correo) !== null;
}

// Función para redirigir al usuario al inicio de sesión
function redirigirALogin() {
  window.location.href = "/src/interfaces/login.html"; // Redirigir a la página de inicio de sesión
}

// Manejar el evento submit del formulario de registro
document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Llamar a la función de registro de usuario
    registrarUsuario(nombre, correo, contrasena);
  });
