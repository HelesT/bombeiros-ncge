<?php
include("conecta.php");

$nome = $_POST['nome'];
$senha = $_POST['senha'];
$acesso = $_POST['acesso'];

$stmt = $pdo->prepare("INSERT INTO cadastro
(cod_cadastro, senha_cadastro, nome_cadastro) VALUES 
(?, ?, ?)");
$stmt->execute([
    $acesso, $senha, $nome 
]);

if ($stmt->rowCount() >= 1) {
    echo json_encode(array('success' => true));
}else {
    echo json_encode(array('error' => 'Chave de Acesso Indisponível'));
}
?>