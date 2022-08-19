
var somBola = new Audio();
var somXis = new Audio();


somBola.src = 'src/audio/o.mp3';
somXis.src = 'src/audio/x.mp3';
somBola.volume = 0.2;
somXis.volume = 0.2;

var round = 1;
var vencedor = 0;

function numeroRandom() {
    var x = Math.trunc(Math.random() * 9 + 1);
    return x;
}

function marcar(casa) {

    if (vencedor == 0) {
        var bg = window.getComputedStyle(casa).getPropertyValue("background-image");

        if (bg == "none") {
            casa.style.backgroundImage = "url(src/svg/x.svg)";
            somXis.play();
            round++;

            verificarFinal();

            setTimeout(vezCPU, 500);
        }
    } else {
        alert("Recomece o jogo!");
    }
}

function vezCPU() {
    if (vencedor == 0) {
        var parar = 0;

        do {
            var casaAleatoria = document.getElementById("c" + numeroRandom());
            var bgRandom = window.getComputedStyle(casaAleatoria).getPropertyValue("background-image");

            if (bgRandom != "none") {
                parar++;
            }

            if (parar == 100) {
                break;
            }
        } while (bgRandom != "none")

        if (bgRandom == "none") {
            casaAleatoria.style.backgroundImage = "url(src/svg/o.svg)";
            somBola.play();
            round--;
        }

        verificarFinal();
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
        setTimeout(ganhadorFinal, 800);
    } else {
        if (velha()) {
            setTimeout(deuVelha, 500);
        }
    }
}

function ganhadorFinal() {
    if (vencedor == 1) {
        document.getElementById("jogoDaVelha").innerHTML =
            `<div><div class="vencedor">O Vencedor é o <span>Player 1</span> !!!</div><a href="p1-vs-cpu.html"><div class="botao" onmouseover="somMenu.play()">Reiniciar</div></a></div>`;
    } else {
        document.getElementById("jogoDaVelha").innerHTML =
            `<div><div class="vencedor">O Vencedor foi a <span> CPU </span> !!!</div><a href="p1-vs-cpu.html"><div class="botao" onmouseover="somMenu.play()">Reiniciar</div></a></div>`;
    }

}

function deuVelha() {
    document.getElementById("jogoDaVelha").innerHTML =
        `<div><div class="vencedor">O Jogo deu <span>Velha</span> !!!</div><a href="p1-vs-cpu.html"><div class="botao" onmouseover="somMenu.play()">Reiniciar</div></a></div>`;

}


