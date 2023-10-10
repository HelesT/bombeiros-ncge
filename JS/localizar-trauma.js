var ImagemAtual = "IMAGENS/Fraturas-Luxações-Entorses.png";

        function inserirImagem(event) {
            var DivDasImagens = document.getElementById("div_traumas_localizados");
            if (DivDasImagens.contains(event.target)) {
                // Obtenha as coordenadas do clique do mouse
                var x = event.clientX;
                var y = event.clientY;

                // Crie uma nova imagem
                var novaImagem = document.createElement("img");
                novaImagem.src = ImagemAtual; // Substitua pelo caminho da imagem que você deseja inserir
                novaImagem.style.position = "absolute";

                // Defina o tamanho da imagem
                novaImagem.style.width = "20px"; // Defina a largura desejada

                // Calcule a posição centralizada da imagem em relação ao mouse
                var offsetX = novaImagem.width / 5.5;
                var offsetY = novaImagem.height / 5.5;
                novaImagem.style.left = (x - offsetX) + "px";
                novaImagem.style.top = (y - offsetY) + "px";

                // Adicione a nova imagem à div de contêiner
                var imagemPosicao = document.getElementById("div_traumas_localizados");
                imagemPosicao.appendChild(novaImagem);

                // Adicionar um evento de clique para apagar a imagem
                novaImagem.addEventListener('click', function () {
                    imagemPosicao.removeChild(novaImagem);
                });
            }
        }

        function MudarImagemAnime() {
            ImagemAtual = "anime.gif";
        }

        function MudarImagemSussy() {
            ImagemAtual = "among-us.gif";
        }