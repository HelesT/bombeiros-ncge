<?php
// Verifica se os dados foram enviados pelo formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se todos os campos necessários foram preenchidos
    if (isset($_POST['tabela']) && isset($_POST['coluna']) && isset($_POST['novo_valor'])) {
        $tabela = $_POST['tabela'];
        $coluna = $_POST['coluna'];
        $novo_valor = $_POST['novo_valor'];
        $valor_id = $_POST['id_paciente'];

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
            // Query SQL para verificar se a linha existe
            $select_query = "SELECT * FROM $tabela WHERE cpf_paciente = '$valor_id'";
            $result = $conn->query($select_query);

            if ($result->num_rows > 0) {
                // Se a linha existir, execute uma operação de UPDATE
                $update_query = "UPDATE $tabela SET $coluna = '$novo_valor' WHERE cpf_paciente = '$valor_id'";
                if ($conn->query($update_query) === TRUE) {
                    $response = array("success" => true, "message" => "Registro atualizado com sucesso!");
                } else {
                    $response = array("success" => false, "message" => "Erro na atualização do registro: " . $conn->error);
                }
            } else {
                // Se a linha não existir, execute uma operação de INSERT
                $insert_query = "INSERT INTO $tabela (cpf_paciente, $coluna) VALUES ('$valor_id', '$novo_valor')";
                if ($conn->query($insert_query) === TRUE) {
                    $response = array("success" => true, "message" => "Registro inserido com sucesso!");
                } else {
                    $response = array("success" => false, "message" => "Erro na inserção do registro: " . $conn->error);
                }
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
