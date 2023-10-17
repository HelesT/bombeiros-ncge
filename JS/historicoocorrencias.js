var menuIcons = document.getElementsByClassName("menu-icon");//TRAZ BARRA LATERAL PARA A TELA E A RETIRA
var barraLateral = document.querySelector(".barra-Lateral");

    for (var i = 0; i < menuIcons.length; i++) {
      menuIcons[i].addEventListener("click", function() {
        if (barraLateral.style.left === "-220px") {
          barraLateral.style.left = "0";
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