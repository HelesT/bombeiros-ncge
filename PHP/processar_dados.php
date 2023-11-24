<?php
// Verifica se os dados foram enviados pelo formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se todos os campos necessários foram preenchidos
    if (isset($_POST['tabela']) && isset($_POST['coluna']) && isset($_POST['novo_valor'])) {
        $tabela = $_POST['tabela'];
        $coluna = $_POST['coluna'];
        $novo_valor = $_POST['novo_valor'];

        // Conexão com o banco de dados (substitua pelas suas credenciais)
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "ncge_bombeiros";

        // Criando a conexão
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verifica a conexão
        if ($conn->connect_error) {
            $response = array("success" => false, "message" => "Conexão falhou: " . $conn->connect_error);
        } else {
            // Query SQL para atualização
            $sql = "UPDATE $tabela SET $coluna = '$novo_valor' WHERE cpf_paciente = '5'";

            if ($conn->query($sql) === TRUE) {
                $response = array("success" => true, "message" => "Registro atualizado com sucesso!");
            } else {
                $response = array("success" => false, "message" => "Erro na atualização do registro: " . $conn->error);
            }
        }

        $conn->close(); // Fecha a conexão com o banco de dados

        // Envia a resposta como JSON
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        echo "Por favor, preencha todos os campos.";
    }
}
?>
