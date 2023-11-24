$(document).ready(function() {
    ChamarRegistro();
});

var inputGeralRegistro = document.getElementById('registro_geral');
var inputHiddenEditar = document.getElementById('idPaciente');
var painelEdicao = document.getElementById('painelEdicao');
var blackbg = document.getElementById('blackbg');
var nomeGeralPaciente = document.getElementById('nome_geral');
var registroGeralPaciente = document.getElementById('registro_geral');


{//------REQUISIÇÕES AJAX---------------------------------------

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

//-------EXCLUIR PACIENTES----------------------------------------

function ExcluirGeral(){
    var NomeGeral = $("#nome_geral").val();
    var RegistroGeral = $("#registro_geral").val();

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

function editarNome(){
    $.ajax({
        url: 'PHP/adm-editar-nome-paciente.php',
        method: 'POST',
        data: {
           nome: nomeGeralPaciente.value,
           id: registroGeralPaciente.value
        },
        dataType: 'json'
    }).done(function(){
        ChamarRegistro();
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
    });
};

}

{//-------FUNÇÕES LOCAIS-----------------------------------------

//Input Hidden valor = input Geral valor
inputGeralRegistro.addEventListener('input', function() {
    inputHiddenEditar.value = inputGeralRegistro.value;
});

//Aciona uma função dependendo da opção selecionada no editar geral
function selecionarOpcaoEditarGeral(select) {
    var opcaoSelecionada = select.value;
    if (opcaoSelecionada === "nome") {
        editarNome();
    } else if (opcaoSelecionada === "avancado") {
        if (inputGeralRegistro.value != ""){
            abrirPainelEdicao();
        }else{alert("Registro vazio ou inválido")}
    }
}

function abrirPainelEdicao(){
    painelEdicao.style.display = "flex";
    blackbg.style.display = "flex";
}

function blackBgNone(){
    painelEdicao.style.display = "none";
    blackbg.style.display = "none";
}

function valueSelectEdicaoGeral(select){
    select.value = "";
}

function MudarOrdemRegistro() {
    var divsPai = $('.exibir .div-pai');
    var divsArray = divsPai.toArray();
    divsArray = divsArray.reverse(); // Inverte a ordem do array
    $('.exibir').html(divsArray); // Atualiza o conteúdo do elemento .exibir
}

}