// script.js

document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
    // Usuario autenticado: mostrar el correo electrónico en lugar del botón de inicio de sesión
    const loginButtons = document.querySelectorAll("#login-button");

    loginButtons.forEach((button) => {
      button.innerHTML = `<a href="perfil.html" class="text-white hover:text-gray-200 font-medium">Account: ${loggedInUser}</a>`;
    });
  }
});
