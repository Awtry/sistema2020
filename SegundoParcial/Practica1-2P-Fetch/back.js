var paises = document.getElementById("paises");

fetch("datos.json")
.then( response => {
    response.json().then(function (datos) {
        datos.forEach( registro => {
            var nombre = document.createElement("p");
            nombre.textContent = "\n País: " + registro.country + "\n, casos:  " + registro.cases + "\t \n"
            paises.appendChild(nombre);
        })
    })
}) 