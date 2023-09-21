<?php
include("conecta.php");

$EmergenciaRegistro = $_POST['EmergenciaRegistro'];

$stmt = $pdo->prepare("INSERT INTO emergencias
(tipo_emergencia) VALUES 
(?)");
$stmt->execute([
    $EmergenciaRegistro
]);
?>