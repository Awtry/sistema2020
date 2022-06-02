<?php

    $usuario = "jveraadm";
    $contrasena = "vDaxc\$FN*NEAA#g.+M";
    try {
        $conn = new PDO('mysql:host=sistemasgeo.com;dbname=jvera',$usuario, $contrasena);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DLS EATS</title>

    <link rel="icon" type="image/png" href="imagenes/dlspizza-favicon.png">

    <!-- CSS personalizado -->
    <!--
    <link href="css/index.css" rel="stylesheet">
    -->
    
</head>
<body>
    <?php
        $seccion = (isset($_GET['seccion']) && $_GET['seccion'] != '') ? $_GET['seccion'] : 'inicio';
        $accion = (isset($_GET['accion']) && $_GET['accion'] != '') ? $_GET['accion'] : 'lista';
        include("menu/index.php");
        
  
        switch ($seccion) {
            case "inicio":
                include("inicio/index.php");
                include("productos/lista.php");
                break;
            case "aviso":
                include("aviso/index.php");
                break;
            case "terminos":
                include("terminos/index.php");
                break;
            case "acceso":
                include("acceso/index.php");
                break;
        }
 
        include("piedepagina/index.php");

    ?>


</body>
</html>

