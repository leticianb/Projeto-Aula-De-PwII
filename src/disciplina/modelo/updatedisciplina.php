<?php
 
 
include('../../conexao/conn.php');
 
$nome = $_REQUEST['nome'];
$professor = $_REQUEST['professor'];
$nota = $_REQUEST['nota'];
$id = $_REQUEST['id'];
 
 
if(strlen($id) == 0 || strlen($professor) == 0){
$dados = array(
'tipo' => 'alert-warning',
'mensagem' => 'Por favor preencha todo o formulário!'
);
}else{

$sql = "UPDATE disciplina SET nome='".$nome."', professor='".$professor."', nota='".$nota."' WHERE id=".$id."";

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