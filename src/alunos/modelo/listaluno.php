<?php

include('../../conexao/conn.php');
 

$sql = "SELECT * FROM alunos";
 

$resultado = mysqli_query($conecta, $sql);
 

if($resultado && mysqli_num_rows($resultado)>0){

while($linha = mysqli_fetch_assoc($resultado)){
$dados[] = array_map(null, $linha);
}
}else{
$dados = array('erro' => 'Não foi possível buscar resultados');
}
 
echo json_encode($dados);