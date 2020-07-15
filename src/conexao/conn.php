<?php
ini_set('display_errors', true);
error_reporting(E_ALL);

$hostname = "127.0.0.1";
$database = "projeto1.1";
$username = "root";
$password = "";

if($conecta = mysqli_connect($hostname, $username, $password, $database)){
    //echo "conexão com o banco de dados ".$database." efetuado com sucesso";
}
else{
    echo "erro".mysqli_connect_error();
}