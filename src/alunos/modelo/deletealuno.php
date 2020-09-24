<?php
 
 
include('../../conexao/conn.php');
 

$id = $_REQUEST['id'];
 
 
if(strlen($id) == 0 ){
$dados = array(
'tipo' => 'alert-warning',
'mensagem' => 'id informado inválido');
}else{

$sql = "DELETE FROM alunos WHERE id=".$id."";

if(mysqli_query($conecta, $sql)){
    $dados = array(
        'tipo' => 'alert-success',
        'mensagem' => 'registro excluido com sucesso');
}else{
    $dados = array(
        'tipo' => 'alert-warning',
        'mensagem' => 'erro');
}
}
 
echo json_encode($dados);