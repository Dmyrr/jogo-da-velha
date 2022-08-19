var somBola = new Audio();
var somXis = new Audio();


somBola.src = 'src/audio/o.mp3';
somXis.src = 'src/audio/x.mp3';
somBola.volume = 0.2;
somXis.volume = 0.2;

var round = 1;
var vencedor = 0;

function marcar(casa) {
    if (vencedor == 0) {
        var bg = window.getComputedStyle(casa).getPropertyValue("background-image");

        if (bg == "none") {
            if (round == 1) {
                casa.style.backgroundImage = "url(src/svg/x.svg)";
                somXis.play();
                round++;
            } else {
                casa.style.backgroundImage = "url(src/svg/o.svg)";
                somBola.play();
                round--;
            }
            verificarFinal();
        }
    } else {
        alert("Recomece o jogo!");
    }
}

function velha() {
    var v = 0;
    var verificarCasa = null;

    for (var i = 0; i < 8; i++) {
        var l = i + 1;
        verificarCasa = window.getComputedStyle(document.getElementById("c" + l)).getPropertyValue("background-image");

        if (verificarCasa === "none") {
            v++;
        }
    }

    if (v === 0) {
        return true;
    } else {
        return false;
    }
}

function linhas(a, b, c) {
    var casa1 = window.getComputedStyle(document.getElementById("c" + a)).getPropertyValue("background-image");
    var casa2 = window.getComputedStyle(document.getElementById("c" + b)).getPropertyValue("background-image");
    var casa3 = window.getComputedStyle(document.getElementById("c" + c)).getPropertyValue("background-image");

    if ((casa1 == casa2) && (casa2 == casa3) && (casa1 != "none")) {
        if (casa1.indexOf("x.svg") >= 0) {
            vencedor = 1;
        } else {
            vencedor = 2;
        }

        function mudarCorBg(cor) {
            document.getElementById("c" + cor).style.backgroundColor = "#00ffff50";
        }

        mudarCorBg(a);
        mudarCorBg(b);
        mudarCorBg(c);

        return true;
    } else {
        return false;
    }
}

function verificarFinal() {
    if (linhas(1, 2, 3) || linhas(4, 5, 6) || linhas(7, 8, 9) || linhas(1, 4, 7) || linhas(2, 5, 8) || linhas(3, 6, 9) || linhas(1, 5, 9) || linhas(3, 5, 7)) {
        setTimeout(ganhadorFinal, 1000);
        return;
    } else {
        if (velha()) {
            setTimeout(deuVelha, 500);
        }
    }
}

function ganhadorFinal() {
    document.getElementById("jogoDaVelha").innerHTML =
        `<div><div class="vencedor">O Vencedor é o <span>Player ${vencedor}</span> !!!</div><a href="p1-vs-p2.html"><div class="botao" onmouseover="somMenu.play()">Reiniciar</div></a></div>`
}

function deuVelha() {
    document.getElementById("jogoDaVelha").innerHTML =
        `<div><div class="vencedor">O Jogo deu <span>Velha</span> !!!</div><a href="p1-vs-cpu.html"><div class="botao" onmouseover="somMenu.play()">Reiniciar</div></a></div>`;

}
