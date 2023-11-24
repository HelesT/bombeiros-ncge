$(document).ready(function() {
    ChamarRegistro();
});

//-------EXIBIR PACIENTES----------------------------------------

function ChamarRegistro(){
    

    $.ajax({
        url: 'PHP/adm-chamar-paciente.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        $('.exibir').empty();

        for (var i = 0; i < result.length; i++) {
            $('.exibir').prepend('<div id="' + result[i].cpf_paciente + '" class="linha-tabela justify div-pai"><div class="space-evenly" style="width: 900px;"><input class="input-text-usuario" value="' + result[i].nome_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].data_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].cpf_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div></div><div class="space-evenly justify" style="width: 180px ;height: 100%; float: right;"><button class="centro" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(230, 154, 12);"><img src="IMAGENS/edit.png" width="15px"></button><button class="centro" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(199, 114, 114);"><img src="IMAGENS/lixo.png" width="13px"></button></div></div>');
        }
        
    }).fail(function(errorThrown) {
        ChamarRegistro();
        console.log(errorThrown);
    });
}

//-------ADICIONAR PACIENTES----------------------------------------

function AdicionarGeral(){

    var NomeGeral = $("#nome_geral").val();
    var RegistroGeral = $("#registro_geral").val();

    console.log("Nome: " + NomeGeral);
    console.log("Acesso: " + RegistroGeral);

    $.ajax({
        url: 'PHP/adm-adicionar-paciente.php',
        method: 'POST',
        data: {
           nome: NomeGeral,
           id: RegistroGeral
        },
        dataType: 'json'
    }).done(function(){
        ChamarRegistro();
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
        alert("Chave de Registro Indisponível!!");
    });
};

function ExcluirGeral(){
    var NomeGeral = $("#nome_geral").val();
    var RegistroGeral = $("#registro_geral").val();

    console.log("Nome: " + NomeGeral);
    console.log("Acesso: " + RegistroGeral);

    $.ajax({
        url: 'PHP/adm-excluir-paciente.php',
        method: 'POST',
        data: {
           nome: NomeGeral,
           id: RegistroGeral
        },
        dataType: 'json'
    }).done(function(){
        ChamarRegistro();
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
    });
}