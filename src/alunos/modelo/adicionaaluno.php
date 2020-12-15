<?php
 
 
include('../../conexao/conn.php');
 
$nome = $_REQUEST['nome'];
$curso = $_REQUEST['curso'];
$senha = $_REQUEST['senha'];
$senha=md5($senha);
$tipo = $_REQUEST['tipo'];
 
 
if(strlen($nome) == 0 || strlen($curso) == 0){
$dados = array(
'tipo' => 'alert-warning',
'mensagem' => 'Por favor preencha todo o formulário!'
);
}else{
$arquivo_tmp = $_FILES['foto']['tmp_name'];
$nomefoto = $_FILES['foto']['name'];
$extensao = pathinfo($nomefoto, PATHINFO_EXTENSION);
$extensao = strtolower($extensao);

if(strstr('.jpg;.jpeg;.gif;.png', $extensao)){

    $novonome = uniqid(time()).'.'.$extensao;
$destino='img/'.$novonome;

if(@move_uploaded_file($arquivo_tmp, $destino)){
   
    $sql = "INSERT INTO alunos (nome, curso, senha, tipo, foto) VALUES ('".$nome."', '".$curso."', '".$senha."', ".$tipo.", '".$novonome."')";

    if(mysqli_query($conecta, $sql)){
    $dados = array(
    'tipo' => 'alert-success',
    'mensagem' => 'O aluno '.$nome.', foi salvo com sucesso!'
    );
    
    }else{
    $dados = array(
    'tipo' => 'alert-danger',
    'mensagem' => 'Deu ruim....'.mysqli_error($conecta)
    );
}
    
}else{
    $dados = array(
        'tipo' => 'alert-danger',
        'mensagem' => 'não foi possivel salvar o arquivo no servidor'
    ); 
}
}else{
    $dados = array(
        'tipo' => 'alert-danger',
        'mensagem' => 'tipo de imagem não aceito'
    );
}


}
 
echo json_encode($dados);