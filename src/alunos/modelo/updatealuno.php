<?php
 
 
include('../../conexao/conn.php');
 
$nome = $_REQUEST['nome'];
$curso = $_REQUEST['curso'];
$tipo = $_REQUEST['tipo'];
$id = $_REQUEST['id'];
 
 
if(strlen($id) == 0 || strlen($nome) == 0 || strlen($curso) == 0){
$dados = array(
'tipo' => 'alert-warning',
'mensagem' => 'Por favor preencha todo o formulário!'
);
}else{

$sql = "UPDATE alunos SET nome='".$nome."', curso='".$curso.", tipo=".$tipo." WHERE id=".$id."";

if(mysqli_query($conecta, $sql)){
$dados = array(
'return'=> true
);
}else{
$dados = array(
'return'=>false);
}
}
 
echo json_encode($dados);