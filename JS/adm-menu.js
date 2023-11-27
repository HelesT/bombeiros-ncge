//CADASTRO BOMBEIROS
//CADASTRO PACIENTES

//CADASTRO BOMBEIROS-----------------------------------------------------------------//
$(document).ready(function() {
    ChamarRegistro();
});

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

function ExcluirGeral(idExcluir){
    var AcessoGeral;

    if(idExcluir != 0){
        AcessoGeral = idExcluir
    }else{
        AcessoGeral = $("#acesso_geral").val();
    }

    $.ajax({
        url: 'PHP/adm-excluir.php',
        method: 'POST',
        data: {
           acesso: AcessoGeral
        },
        dataType: 'json'
    }).done(function(response){
        if ('error' in response) {
            console.log('Erro: ' + response.error);
        } else {
            console.log('Sucesso: ', response);
            ChamarRegistro();
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log('Erro na requisição:', errorThrown);
        alert("Ops, achamos um erro!\n1.Bombeiros com pacientes vinculado não podem ser excluidos\n2.Em caso de persistencia chame o responsável pela base de dados");
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
            $('.exibir').prepend('<div id="' + result[i].cod_cadastro + '" class="linha-tabela justify div-pai"><div class="space-evenly" style="width: 900px;"><input class="input-text-usuario" value="' + result[i].nome_cadastro + '" id="nomeEspecifico' + result[i].cod_cadastro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].senha_cadastro + '" id="senhaEspecifico' + result[i].cod_cadastro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].cod_cadastro + '" id="codigoEspecifico' + result[i].cod_cadastro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div></div><div class="space-evenly justify" style="width: 180px ;height: 100%; float: right;"><button class="centro" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(230, 154, 12); cursor: pointer;" onclick="editarNomeEspecificdo(' + result[i].cod_cadastro + ')"><img src="IMAGENS/edit.png" width="15px"></button><button class="centro" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(199, 114, 114); cursor: pointer;" onclick="ExcluirGeral(' + result[i].cod_cadastro + ')"><img src="IMAGENS/lixo.png" width="13px"></button></div></div>');
        }
        
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
    });
}

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

function executarSelect(){
    var select = document.getElementById("select_adm");
    var OpcaoSelecionada = select.options[select.selectedIndex].value;

    if (OpcaoSelecionada === "opcao_nome") {
        
        $.ajax({
            url: 'PHP/adm-chamar-registro-nome.php',
            method: 'GET',
            dataType: 'json'
        }).done(function(result){
            $('.exibir').empty();
        
            for (var i = 0; i < result.length; i++) {
                $('.exibir').prepend('<div id="' + result[i].cod_cadastro + '" class="linha-tabela justify div-pai"><div class="space-evenly" style="width: 900px;"><input class="input-text-usuario" value="' + result[i].nome_cadastro + '" id="nomeEspecifico' + result[i].cod_cadastro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].senha_cadastro + '" id="senhaEspecifico' + result[i].cod_cadastro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].cod_cadastro + '" id="codigoEspecifico' + result[i].cod_cadastro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div></div><div class="space-evenly justify" style="width: 180px ;height: 100%; float: right;"><button class="centro" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(230, 154, 12); cursor: pointer;" onclick="editarNomeEspecificdo(' + result[i].cod_cadastro + ')"><img src="IMAGENS/edit.png" width="15px"></button><button class="centro" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(199, 114, 114); cursor: pointer;" onclick="ExcluirGeral(' + result[i].cod_cadastro + ')"><img src="IMAGENS/lixo.png" width="13px"></button></div></div>');
            }
                
        }).fail(function(errorThrown) {
            console.log(errorThrown);
        }); 

    }else if(OpcaoSelecionada === "opcao_nada"){
        ChamarRegistro()
    }
}

function MudarOrdemRegistro() {
    var divsPai = $('.exibir .div-pai');
    var divsArray = divsPai.toArray();
    divsArray = divsArray.reverse(); // Inverte a ordem do array
    $('.exibir').html(divsArray); // Atualiza o conteúdo do elemento .exibir
}

function editarNomeEspecificdo(id){
    var nomeEspId = document.getElementById("nomeEspecifico" + id)
    var senhaEspId = document.getElementById("senhaEspecifico" + id)
    var codeEspId = document.getElementById("codigoEspecifico" + id)
    
    if (nomeEspId.readOnly === true) {
       
        nomeEspId.classList.toggle("input-text-usuario-active");
        nomeEspId.classList.remove("input-text-usuario");
        nomeEspId.removeAttribute("readonly");
    
        senhaEspId.classList.toggle("input-text-usuario-active");
        senhaEspId.classList.remove("input-text-usuario");
        senhaEspId.removeAttribute("readonly");
    } else {
        nomeEspId.classList.toggle("input-text-usuario");
        nomeEspId.classList.remove("input-text-usuario-active");
        nomeEspId.readOnly = true;
        
        senhaEspId.classList.toggle("input-text-usuario");
        senhaEspId.classList.remove("input-text-usuario-active");
        senhaEspId.readOnly = true;

        $.ajax({
            url: 'PHP/adm-editar-especifico.php',
            method: 'POST',
            data: {
               acesso: codeEspId.value,
               nome: nomeEspId.value,
               senha: senhaEspId.value
            },
            dataType: 'json'
        }).done(function(response){
            if(response.success){
                alert("Edição Realizada!")
            }

        }).fail(function(errorThrown) {
            console.log(errorThrown);

        });

    }
    
    

    
}
//CADASTRO PACIENTES-----------------------------------------------------------------//


