<?php
include("conecta.php");

$Conducao = $_POST['conducao'];
$FormaConducao = $_POST['FormaConducao'];

/*fazer banco de dados*/
$stmt = $pdo->prepare("INSERT INTO forma_conducao
(conducao, forma_conducao) VALUES 
(?, ?)");*/
$stmt->execute([
    $$Conducao, $FormaConducao,
]);
?>
