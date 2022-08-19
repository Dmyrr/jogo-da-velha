var somMenu = new Audio();
var audioEntrar = new Audio();
var musicMenu = new Audio();
var musicJogo = new Audio();
var musicVitoria = new Audio();



somMenu.src = 'src/audio/menu-item.mp3';
somMenu.currentTime = 0;

audioEntrar.src = 'src/audio/menu-entrar.mp3';

musicMenu.src = 'src/audio/menu.mp3';
musicMenu.volume = 0.2;
musicMenu.loop = true;

musicJogo.src = 'src/audio/jogo.mp3';
musicJogo.volume = 0.2;
musicJogo.loop = true;

musicVitoria.src = 'src/audio/vitoria.mp3';


function somEntrar() {
    audioEntrar.play;
}
