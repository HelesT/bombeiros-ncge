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
    }).done(function(){
        ChamarRegistro();
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
        alert("Chave de Acesso Indisponível!!");
    });
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
    }).done(function(){
        ChamarRegistro();
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
    });
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
    }).done(function(){
        ChamarRegistro();
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
    });
}

function ChamarRegistro(){
    

    $.ajax({
        url: 'PHP/adm-chamar-registro.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        $('.exibir').empty();

        for (var i = 0; i < result.length; i++) {
            $('.exibir').prepend('<div id="' + result[i].cod_cadastro + '" class="linha-tabela justify"><div class="space-evenly" style="width: 900px;"><input class="input-text-usuario" value="' + result[i].nome_cadastro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].senha_cadastro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].cod_cadastro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div></div><div class="space-evenly justify" style="width: 250px ;height: 100%; float: right;"><button style="width: 20px; height: 20px; background-color: black;"></button><button style="width: 20px; height: 20px; background-color: black;"></button><button style="width: 20px; height: 20px; background-color: black;"></button></div></div>');
        }
        
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
    });
}
$(document).ready(function() {
    ChamarRegistro();
});


var menuIcons = document.getElementsByClassName("menu-icon");//TRAZ BARRA LATERAL PARA A TELA E A RETIRA
var barraLateral = document.querySelector(".barra-Lateral");

    for (var i = 0; i < menuIcons.length; i++) {
      menuIcons[i].addEventListener("click", function() {
        if (barraLateral.style.left === "-220px") {
          barraLateral.style.left = "70px";
        } else {
          barraLateral.style.left = "-220px";
        }
      });
    }

document.addEventListener("click", function(event) {//TRAZ BARRA LATERAL PARA A TELA E A RETIRA
var isClickedInsideBarraLateral = barraLateral.contains(event.target);
var isClickedMenuIcon = event.target.classList.contains("menu-icon");
  
      if (!isClickedInsideBarraLateral && !isClickedMenuIcon) {
        barraLateral.style.left = "-220px";
      }
    });

var menuIcons = document.getElementsByClassName("menu-icon");

    for (var i = 0; i < menuIcons.length; i++) {//MUDA A OPACIDADE DA IMAGEM APÓS O CLIQUE
      menuIcons[i].addEventListener("click", function(event) {
        var clickedIcon = event.target;
        clickedIcon.classList.add("clicked");

        setTimeout(function() {
          clickedIcon.classList.remove("clicked");
        }, 100); // Remove a classe "clicked" após 1 milisegundo (100 milissegundos)
      });
    }