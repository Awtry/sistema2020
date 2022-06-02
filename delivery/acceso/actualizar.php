<?php

  $nombre=$_POST["nombre"];
  $usuario=$_POST["usuario"];
  $contrasena=$_POST["contrasena"];
  $id=$_SESSION["id"];

  $consulta  = " UPDATE usuarios SET
                        nombreUsuario=?,
                        emailUsuario=?,
                        contrasenaUsuario=?
                        WHERE idUsuario=? ";
  $query = $conn->prepare($consulta);
  $query->bindParam(1, $nombre);
  $query->bindParam(2, $usuario);
  $query->bindParam(3, $contrasena);
  $query->bindParam(4, $id);
  $query->execute();

?>

  <h1>MI CUENTA</h1>
  <h2>Se guardaron los cambios de su cuenta.</h2>