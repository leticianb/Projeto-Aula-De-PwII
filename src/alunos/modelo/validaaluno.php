<?php

session_start();



if($_SESSION['id']){
  
    $dados = array('return' => true);
}
else{
    $dados = array('return' => false);
}
echo json_encode($dados);