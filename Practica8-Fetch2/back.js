var paises = document.getElementById("paises");

fetch("https://sistemasgeo.com/2022/fetch/paises.json")
.then( results => {
    console.log(response)

    response.json().then(function (datos) {
        datos.forEach( registro => {
            let nombre = document.createElement("p");
            nombre.textContent = "País: " + registro.CountryName + ", casos " + registro.cases
            paises.appendChild(nombre);
        })
    })
}) 