function consultar() {
    var usuario = document.getElementById("txtNIT").value.trim();
    if (usuario.trim() == "") {
        usuario = "null";
    }
    var http = new XMLHttpRequest();
    var url = '/TiendaVirtualSB/consultarUsuarios';
    var params = "usuario=" + usuario;
    http.open('POST', url, true);
    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
        //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
            CreateTableFromJSON(http.responseText);
        }
    }
    http.send(params);
}

function CreateTableFromJSON(json_result) {
    const json_arr = JSON.parse(json_result);
    // EXTRACT VALUE FOR HTML HEADER.
    var col = [];
    for (var i = 0; i < json_arr.length; i++) {
        for (var key in json_arr[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.setAttribute("border", "1");
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1); // TABLE ROW.
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < json_arr.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = json_arr[i][col[j]];
        }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("dvResult");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
