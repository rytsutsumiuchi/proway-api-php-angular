<?php 

//Variáveis
$url = "localhost";
$usuario = "root";
$senha = "";
$base = "api";

//Conexão
$conexao = mysqli_connect($url, $usuario, $senha, $base);

//Arrumar caractrees especiais
mysqli_set_charset($conexao, "utf8");

?>