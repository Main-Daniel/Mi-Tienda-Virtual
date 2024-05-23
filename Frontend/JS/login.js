document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    console.log(username);
    const password = document.getElementById("password").value;
    console.log(username);
    const loginError = document.getElementById("login-error");

    // Usuarios y contraseñas de ejemplo
    const validCredentials = {
      user1: "password1",
      user2: "password2",
    };

    if (validCredentials[username] && validCredentials[username] === password) {
      alert("Login exitoso");
      window.location.href = "ConsultarClientes.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
});