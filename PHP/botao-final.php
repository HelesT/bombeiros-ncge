<?php
include("conecta.php");
$RgCpfPaciente = $_POST['RgCpfPaciente'];

$stmt = $pdo->prepare("INSERT INTO paciente
(cpf_paciente
) VALUES 
(?)");
$stmt->execute([
    $RgCpfPaciente
]);
?>