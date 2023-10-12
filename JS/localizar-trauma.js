var ImagemAtual = "";

function inserirImagem(event) {
    var DivDasImagens = document.getElementById("div_traumas_localizados");
    if (DivDasImagens.contains(event.target)) {
        // Obtenha as coordenadas do clique do mouse em relação à div
        var x = event.clientX - DivDasImagens.getBoundingClientRect().left;
        var y = event.clientY - DivDasImagens.getBoundingClientRect().top;

        // Crie uma nova imagem
        var novaImagem = document.createElement("img");
        novaImagem.src = ImagemAtual;

        // Defina o tamanho da imagem
        novaImagem.style.width = "20px"; // Defina a largura desejada

        // Defina a posição da imagem exatamente onde o mouse foi clicado na div
        novaImagem.style.position = "absolute"; // Use "absolute" para posicionar em relação à div pai (div_traumas_localizados)
        novaImagem.style.left = x-11 + "px";
        novaImagem.style.top = y-11 + "px";
        novaImagem.style.zIndex = "1"; // Certifique-se de que o z-index seja maior

        // Adicione a nova imagem à div de contêiner
        DivDasImagens.appendChild(novaImagem);


        // Adicionar um evento de clique para apagar a imagem
        novaImagem.addEventListener('click', function () {
            DivDasImagens.removeChild(novaImagem);
        });
    }
}
function MudarImagemFratura(){
    ImagemAtual = "IMAGENS/Fraturas-Luxações-Entorses.png";
}
function MudarImagemFerimento(){
    ImagemAtual = "IMAGENS/Ferimentos-Diversos.png";
}
function MudarImagemHemorragia(){
    ImagemAtual = "IMAGENS/Hemorragias.png";
}
function MudarImagemQueimadura1(){
    ImagemAtual = "IMAGENS/Queimadura-de-1.png";
}
function MudarImagemQueimadura3(){
    ImagemAtual = "IMAGENS/Queimadura-de-3.png";
}
function MudarImagemQueimadura2(){
    ImagemAtual = "IMAGENS/Queimadura-de-2.png";
}
function MudarImagemEsviceracao(){
    ImagemAtual = "IMAGENS/Esviceração.png";
}
function MudarImagemFABFAF(){
    ImagemAtual = "IMAGENS/F.A.B-F.A.F.png";
}
function MudarImagemAmputacao(){
    ImagemAtual = "IMAGENS/Amputação.png";
}
var dadosLinhas = [];

        function adicionarLinhaTraumas() {
            // Recuperar a tabela e a área de corpo (tbody)
            var tabela = document.getElementById("tabela_de_traumas");
            var corpoTabela = tabela.getElementsByTagName("tbody")[0];

            // Criar uma nova linha (tr)
            var novaLinha = corpoTabela.insertRow();
            novaLinha.classList.add("estilo-linha-traumas"); // Adiciona a classe à linha

            // Inserir os valores nas novas células da linha a partir dos inputs
            var inputColuna1 = document.createElement("input");
            inputColuna1.type = "text";
            inputColuna1.classList.add("input-filho", "tamanho-coluna-traumas"); // Adiciona a classe ao input
            var coluna1 = novaLinha.insertCell(0);
            coluna1.appendChild(inputColuna1);

            var inputColuna2 = document.createElement("input");
            inputColuna2.type = "text";
            inputColuna2.classList.add("input-filho", "tamanho-coluna-traumas"); // Adiciona a classe ao input
            var coluna2 = novaLinha.insertCell(1);
            coluna2.appendChild(inputColuna2);

            var inputColuna3 = document.createElement("input");
            inputColuna3.type = "text";
            inputColuna3.classList.add("input-filho", "tamanho-coluna-traumas"); // Adiciona a classe ao input
            var coluna3 = novaLinha.insertCell(2);
            coluna3.appendChild(inputColuna3);

            var inputColuna4 = document.createElement("input");
            inputColuna4.type = "text";
            inputColuna4.classList.add("input-filho", "tamanho-coluna-traumas"); // Adiciona a classe ao input
            var coluna4 = novaLinha.insertCell(3);
            coluna4.appendChild(inputColuna4);
        }

        function ObterValoresTraumas() {
            var tabela = document.getElementById("tabela_de_traumas");
            var linhas = tabela.getElementsByTagName("tr");
        
            dadosLinhas = [];
        
            for (var i = 1; i < linhas.length; i++) {
                var colunas = linhas[i].getElementsByTagName("td");
                var linhaDados = [];
                for (var j = 0; j < colunas.length; j++) {
                    var input = colunas[j].querySelector("input");
                    if (input) {
                        linhaDados.push(input.value);
                    }
                }
                dadosLinhas.push(linhaDados.join(","));
            }
            var dados = dadosLinhas.join("; ");
            
            // Remova as ocorrências de ",,," e ";;;" da variável dados
            dados = dados.replace(/,,,;/g, '');
            dados = dados.replace(/,,,/g, '');
        
            console.log("Dados das Linhas: " + dados);
        }
        function limparTabelaTraumas() {
            var corpoTabela = document.getElementById("tbody_corpo");
            
            // Remover todas as linhas do corpo da tabela
            corpoTabela.innerHTML = "";
        }
