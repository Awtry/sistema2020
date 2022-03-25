var paises = document.getElementById("paises");

fetch("datosGlobales.json")
.then( results => {
    console.log(response)

    

    response.json().then(datos => {
        let contador = 1
        datos.forEach( registro => {
            let renglon = document.createElement("div")
            renglon.className = "row border bg-light";
            paises.appendChil(renglon);

            let columna = document.createElement("div")
            renglon.className = "col-12";
            renglon.appendChil(columna);

            let nombre = document.createElement("p")
            nombre.textContent = contador + " " + registro.CountryName
            columna.appendChild(nombre);

            contador ++
        })
    })
}) 