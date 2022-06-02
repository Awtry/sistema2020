<h2>NUESTROS PRODUCTOS</h2>
    <?php
        $consulta  = " SELECT * FROM producto";
        $query = $conn->prepare($consulta);
        $query->execute();
        while($registro = $query->fetch()) {
            include("productos/tarjeta.php");
        }
    ?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Listado
    </body>
    </html>