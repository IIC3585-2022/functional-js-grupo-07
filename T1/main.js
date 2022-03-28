const _ = require("lodash");
const prompt = require("prompt-sync")({ sigint: true });


function shot_value(shot){
    if (shot == "DB"){
        return 50;
    }else if(shot == "SB"){
        return 25;
    }
    return (shot[0]*shot[1]); 
}

function update_points(currentPoints, turn){
    currentPoints -= _.chain(turn).map(shot_value).sum();
    return Math.abs(currentPoints);
}

const get_players = () => {
    console.log("Ingresa los jugadores separados por una ´,´ (EJ: Matias,Jose,Pablo)");
    var playerNames = prompt();
    return playerNames.trim().split(",")
}

const init_players = (playerNames) => {
    var players = new Object();
    playerNames.map((x) => {players[x] = 501;});
    console.log("Juego inicializado con jugadores "+ Object.keys(players) +".");
    return players;
}

function * turn_generator(players) {
    //console.log(players)
    names = Array.from(Object.keys(players));
    var i = 0;
  
    while (true) {
      yield names[i];
      i++;
  
      if (i >= names.length){
        i = 0;
      }
    }
  }

const init_game = (players) => {
    var winner = true;
    const turnGen = turn_generator(players);
    while (winner){
        var currentPlayer = turnGen.next().value;
        var turn = prompt("Ingrese lanzamientos de " + currentPlayer + ": ");
        turn = JSON.parse(turn);
        players[currentPlayer] = update_points(players[currentPlayer], turn);
        console.log(currentPlayer + " queda con "+ players[currentPlayer] +" puntos");
        if (players[currentPlayer] == 0){
            console.log("y gana el juego. Felicitaciones "+ currentPlayer + " !!");
            winner = false;
            }
    }
}

// PIPE + LODASH
const _pipe = (op1, op2) => (arg) => op2(op1(arg));
const pipe = (...ops) => _.reduce(ops, _pipe);
const game = pipe(get_players, init_players, init_game);
game();
