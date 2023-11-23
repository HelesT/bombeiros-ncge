<?php
include("conecta.php");

$stmt = $pdo->prepare('SELECT paciente.cpf_paciente, paciente.nome_paciente, tabela_paciente.data_paciente FROM paciente
INNER JOIN tabela_paciente ON paciente.cpf_paciente = tabela_paciente.cpf_paciente');
$stmt->execute();

$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>