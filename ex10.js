let jogos = ['Minecraft', 'Hollow Knight', 'Enigma Do Medo'];
let jogoFavorito = 'Enigma Do Medo';
let lista = jogos.length;

for (let i = 0; i < lista; i++) {
    if (jogos[i] == jogoFavorito) {
        console.log(`ele está na posição ${i + 1}`)
    }
}