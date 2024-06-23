// Función para realizar el inicio de sesión
function iniciarSesion(correo, contrasena) {
  // Obtener el usuario del localStorage
  const usuarioGuardado = localStorage.getItem(correo);

  // Verificar si el usuario existe y la contraseña es correcta
  if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado);
    if (usuario.contrasena === contrasena) {
      // Iniciar sesión exitosa
      alert("Inicio de sesión exitoso.");
      redirigirALanding(); // Redirigir al usuario a la página principal
      return true;
    } else {
      // Contraseña incorrecta
      alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
      return false;
    }
  } else {
    // Usuario no encontrado
    alert("El correo electrónico ingresado no está registrado.");
    return false;
  }
}

// Función para redirigir al usuario a la página principal
function redirigirALanding() {
  window.location.href = "/src/index.html"; // Cambiar a la ruta correcta de tu página principal
}

// Manejar el evento submit del formulario de inicio de sesión
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    // Obtener los valores del formulario
    const correo = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Llamar a la función de inicio de sesión
    iniciarSesion(correo, contrasena);
  });
