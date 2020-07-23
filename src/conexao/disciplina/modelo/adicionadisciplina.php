<?php
include("../../../conexao/conn.php");
$nome = $_REQUEST['nome'];
$professor = $_REQUEST['professor'];
$nota = $_REQUEST['nota'];
//echo "disciplina: ".$nome." professor: ".$professor." nota:".$nota;
if(strlen($nome)== 0 || strlen($professor)==0 ){
echo "Existem campos em branco. tente novamente";
}
else{
    $sql = "INSERT INTO disciplina (nome, professor, nota) VALUES ('".$nome."', '".$professor."', '".$nota."')";
    if(mysqli_query($conecta, $sql)){
        echo "A disciplina ".$nome. " foi salva com sucesso";
    }
    else{
        echo " deu ruim".mysqli_error($conecta);
    }

}