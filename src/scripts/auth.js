document.addEventListener("DOMContentLoaded", function () {
  // Función de registro
  const registroForm = document.getElementById("registroForm");
  if (registroForm) {
    registroForm.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Formulario de registro enviado");

      const nombre = document.getElementById("nombre").value;
      const usuario = document.getElementById("usuario").value;
      const contrasena = document.getElementById("contrasena").value;

      // Validar datos (puedes añadir más validaciones según necesites)
      if (nombre === "" || usuario === "" || contrasena === "") {
        console.warn("Por favor, complete todos los campos.");
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Guardar usuario en LocalStorage
      const usuarioData = {
        nombre: nombre,
        contrasena: contrasena,
      };

      localStorage.setItem(usuario, JSON.stringify(usuarioData));
      console.log(`Usuario ${usuario} registrado con éxito.`);
      alert("Usuario registrado exitosamente.");

      // Limpiar formulario
      registroForm.reset();
      console.log("Formulario de registro reseteado");

      // Redirigir al login
      window.location.href = "/src/interfaces/login.html";
    });
  }

  // Función de login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Formulario de login enviado");

      const usuario = document.getElementById("usuario").value;
      const contrasena = document.getElementById("contrasena").value;

      // Validar datos
      if (usuario === "" || contrasena === "") {
        console.warn("Por favor, complete todos los campos.");
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Verificar usuario en LocalStorage
      const usuarioData = JSON.parse(localStorage.getItem(usuario));
      console.log(
        `Datos del usuario obtenidos de LocalStorage: ${JSON.stringify(
          usuarioData
        )}`
      );

      if (usuarioData && usuarioData.contrasena === contrasena) {
        console.log("Inicio de sesión exitoso.");
        alert("Inicio de sesión exitoso.");
        // Guarda el nombre de usuario en localStorage
        localStorage.setItem('currentUser', usuario);
  
        window.location.href = "/src/interfaces/userProfile.html";
      } else {
        console.error("Correo electrónico o contraseña incorrectos.");
        alert("Correo electrónico o contraseña incorrectos.");
      }

      // Limpiar formulario
      loginForm.reset();
      console.log("Formulario de login reseteado");
    });
  }
});
