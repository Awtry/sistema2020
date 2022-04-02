var paises = document.getElementById("paises");

fetch("datosGlobales.json")
.then( response => {
    console.log(response)

    response.json().then(datos => {
        let contador = 1
        datos.forEach( registro => {
            let renglon = document.createElement("div")
            renglon.className = "row border bg-light text-dark m-2";
            paises.appendChild(renglon);

            let columna = document.createElement("div")
            renglon.className = "col-12";
            renglon.appendChild(columna);

            let nombre = document.createElement("p")
            nombre.textContent = contador + " -> " + registro.CountryName;
            columna.appendChild(nombre);

            contador ++
        })
    })
}) 