<?php
    $email = $_GET['email']; 
    mail("eyouel@belmondocorp.tech","Notfication Request", $email);
    header("..index.html"); 
?>
