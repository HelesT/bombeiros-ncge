<?php
include("conecta.php");

$Conducao = $_POST['conducao'];
$FormaConducao = $_POST['FormaConducao'];

/* fazer banco de dados*/
/*$stmt = $pdo->prepare("INSERT INTO paciente
(nome_hospital_paciente, data_paciente, sexo_paciente,
nome_paciente, idade_paciente, rg_cpf_paciente,
fone_paciente, acompanhante_paciente, idade_acompanhante_paciente,
local_ocorrencia_paciente, n_usb_paciente, n_ocorr_paciente,
desp_paciente, h_ch_paciente, km_final_paciente,
cod_sia_sus_paciente, cod_ur_paciente, cod_ps_paciente) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");*/
$stmt->execute([
    $$Conducao, $FormaConducao,
]);
?>
