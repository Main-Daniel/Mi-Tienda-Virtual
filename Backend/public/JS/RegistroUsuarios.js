$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/api/users",
        success: function (data) {
            $.each(data, function (i, item) {
                let tr = $("<tr></tr>");
                tr.append($("<td></td>").text(item.cedula_cli));
                tr.append($("<td></td>").text(item.usuario_cli));
                tr.append($("<td></td>").text(item.email_cli));
                tr.append($("<td></td>").text(item.nombre_cli));
                tr.append($("<td></td>").text(item.telefono_cli));
                $("#myTable").append(tr);
            });
        }
    });
});

function validateFields() {
    if ($("#txtCedula").val().trim().length === 0) {
        alert("La cédula no puede ser vacía.");
        return false;
    } else if ($("#txtNombre").val().trim().length === 0) {
        alert("El nombre no puede ser vacío.");
        return false;
    } else if ($("#txtEmail").val().trim().length === 0) {
        alert("El correo electrónico no puede ser vacío.");
        return false;
    } else if ($("#txtTelefono").val().trim().length === 0) {
        alert("El teléfono no puede ser vacío.");
        return false;
    } else {
        return true;
    }
}

function sendData() {
    if (!validateFields()) {
        return;
    } else {
        let cedula = $("#txtCedula").val().trim();
        let nombre = $("#txtNombre").val().trim();
        let usuario = $("#txtUsuario").val().trim();
        let clave = $("#txtClave").val().trim();
        let email = $("#txtEmail").val().trim();
        let telefono = $("#txtTelefono").val().trim();

        let http = new XMLHttpRequest();
        let url = 'http://localhost:5000/api/users'; // Cambiado el endpoint
        let params = "cedula=" + cedula + "&" + "nombre=" + nombre + "&" + "usuario=" + usuario + "&" + "clave=" + clave + "&" +
                     "email=" + email + "&" + "telefono=" + telefono;
        http.open('POST', url, true);

        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                alert(http.responseText);
                location.reload(); // Recargar la página para actualizar la tabla
            }
        }
        http.send(params);
    }
}
