<?php
 
 
include('../../conexao/conn.php');

$id = $_REQUEST['id'];
$senha = $_REQUEST['senha'];
$senha = md5($senha);

$sql = "SELECT * FROM alunos WHERE id = ".$id." AND senha='".$senha."'";
 

$resultado = mysqli_query($conecta, $sql);
if($resultado && mysqli_num_rows($resultado)>0){
    while($lista)
   while($dados = mysqli_fetch_array($resultado)){
    session_start();
    $_SESSION['id'] = $dados['id'];
    $_SESSION['nome'] = $dados['nome'];
    $_SESSION['curso'] = $dados['curso'];
   }
 
    $dados = array('result'=> true);
}
else{
    $dados= array('result'=> false);
}

echo json_encode($dados);
