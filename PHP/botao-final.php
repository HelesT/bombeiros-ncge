<?php
include("conecta.php");
$RgCpfPaciente = $_POST['RgCpfPaciente'];

$stmt = $pdo->prepare("INSERT INTO paciente (cpf_paciente) VALUES (?)");
$executou = $stmt->execute([$RgCpfPaciente]);

echo json_encode(["sucesso" => $executou]);
?>