<?php

include('../../conexao/conn.php');
session_start();
 

$sql = "SELECT * FROM disciplina WHERE id_alunos=".$_SESSION['id']."";
 

$resultado = mysqli_query($conecta, $sql);
 

if($resultado && mysqli_num_rows($resultado)>0){

while($linha = mysqli_fetch_assoc($resultado)){
$dados[] = array_map(null, $linha);
}
}else{
$dados = array('erro' => 'Não foi possível buscar resultados');
}
 
echo json_encode($dados);