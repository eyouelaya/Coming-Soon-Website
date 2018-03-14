<?php
    $name = $_GET['name'];
    $email = $_GET['email'];
    $msg = "Name ".$name." Email ".$email; 
    //replace with own email
    mail("eyouelaya@belmondocorp.com","email Notification","$msg");
?>
