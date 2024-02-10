<?php

//Incluir a conexão
include("conexao.php");

//Conexão
$conexao = mysqli_connect($url, $usuario, $senha, $base);

//Sql
$sql = "SELECT * FROM cursos";

//Executar
$executar = mysqli_query($conexao, $sql);

//Vetor
$cursos = [];

//índice
$indice = 0;

//Laço
while($linha = mysqli_fetch_assoc($executar)){
    $cursos[$indice]['idCurso'] = $linha['idCurso'];
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

    $indice++;
}

//JSON
echo json_encode(['cursos'=>$cursos]);


?>