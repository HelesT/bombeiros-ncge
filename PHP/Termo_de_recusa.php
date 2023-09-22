<?php
include("conecta.php");
$NomeTermoRecusa = $_POST['NomeTermoRecusa'];
$IdentidadeRecusa = $_POST['IdentidadeRecusa'];
$CpfRescusa = $_POST['CpfRescusa'];
$AssinaturaRecusa = $_POST['AssinaturaRecusa'];
$TestemunhaRecusa = $_POST['TestemunhaRecusa'];
$DocRecusa = $_POST['DocRecusa'];
$TestemunhaRecusa2 = $_POST['TestemunhaRecusa2'];
$DocRecusa2 = $_POST['DocRecusa2'];

$stmt = $pdo->prepare("INSERT INTO termo_recusa 
(nome_recusa, identidade_recusa, cpf_recusa, assinatura_recusa,
testemunha_recusa, doc_recusa, testemunha_recusa2, doc_recusa2) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
    $NomeTermoRecusa, $IdentidadeRecusa, $CpfRescusa, $AssinaturaRecusa,
    $TestemunhaRecusa, $DocRecusa, $TestemunhaRecusa2, $DocRecusa2
]);
?>