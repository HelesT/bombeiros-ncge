function AdicionarGeral(){

    var NomeGeral = $("#nome_geral").val();
    var SenhaGeral = $("#senha_geral").val();
    var AcessoGeral = $("#acesso_geral").val();

    console.log("Nome: " + NomeGeral);
    console.log("Senha: " + SenhaGeral);
    console.log("Acesso: " + AcessoGeral);

    $.ajax({
        url: 'PHP/adm-adicionar.php',
        method: 'POST',
        data: {
           nome: NomeGeral,
           senha: SenhaGeral,
           acesso: AcessoGeral
        },
        dataType: 'json'
    })
};

function EditarGeral(){
    var NomeGeral = $("#nome_geral").val();
    var SenhaGeral = $("#senha_geral").val();
    var AcessoGeral = $("#acesso_geral").val();

    console.log("Nome: " + NomeGeral);
    console.log("Senha: " + SenhaGeral);
    console.log("Acesso: " + AcessoGeral);

    $.ajax({
        url: 'PHP/adm-editar.php',
        method: 'POST',
        data: {
           nome: NomeGeral,
           senha: SenhaGeral,
           acesso: AcessoGeral
        },
        dataType: 'json'
    })
};

function ExcluirGeral(){
    var NomeGeral = $("#nome_geral").val();
    var SenhaGeral = $("#senha_geral").val();
    var AcessoGeral = $("#acesso_geral").val();

    console.log("Nome: " + NomeGeral);
    console.log("Senha: " + SenhaGeral);
    console.log("Acesso: " + AcessoGeral);

    $.ajax({
        url: 'PHP/adm-excluir.php',
        method: 'POST',
        data: {
           nome: NomeGeral,
           senha: SenhaGeral,
           acesso: AcessoGeral
        },
        dataType: 'json'
    })
}
