<?php
    $name = $_GET['name'];
    $email = $_GET['email'];
    $msg = "Name ".$name." Email ".$email; 
    //replace with own email
    mail("smth@smth.com","email Notification","$msg");
    header('location: ../index.html');
?>
