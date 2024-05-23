function validateFields() {
    if (document.getElementById("txtNIT").value.trim().length === 0) {
        alert("El NIT no puede ser vacío.");
        return false;
    } else if (document.getElementById("txtNombre").value.trim().length === 0) {
        alert("El nombre no puede ser vacío.");
        return false;
    } else if (document.getElementById("txtDireccion").value.trim().length === 0) {
        alert("La dirección no puede ser vacía.");
        return false;
    } else if (document.getElementById("txtTelefono").value.trim().length === 0) {
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
        var nit = document.getElementById("txtNIT").value.trim();    
        var direccion = document.getElementById("txtDireccion").value.trim();
        var email = document.getElementById("txtEmail").value.trim();
        var nombre = document.getElementById("txtNombre").value.trim();
        var telefono = document.getElementById("txtTelefono").value.trim();

        var http = new XMLHttpRequest();
        var url = '/TiendaVirtualSB/registrarCliente';
        var params = "cedula_cli=" + nit + "&" + "direccion_cli=" + direccion + "&" + "email_cli=" + email + "&" + 
                     "nombre_cli=" + nombre + "&" + "telefono_cli=" + telefono;
        http.open('POST', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
        }
        http.send(params);
    }
}
