const prompt = require("prompt-sync")({ sigint: true });

function crearIterador(arreglo){
    var siguienteIndice = 0;

    return {
       next: function(){
           return siguienteIndice < arreglo.length ?
               {value: arreglo[siguienteIndice++], done: false} :
               {done: true};
       }
    }
}


function ValueShot(shot){

    if (shot == "DB"){
        return 50;
    }else if(shot == "SB"){
        return 25;
    }else{
        return (shot[0]*shot[1]);
    }   
}

function UpdatePoints(value, turn){
    var iterador = crearIterador(turn);
    value -= ValueShot(iterador.next().value);
    value -= ValueShot(iterador.next().value);
    value -= ValueShot(iterador.next().value);
    if (value < 0 ){
        value *= -1
    }
    return value;
}

function initPlayers() {
    var players = new Object();
    var names = Array.from(arguments)
  
    names.map((x) => {players[x] = 501;});
  
    console.log("Juego inicializado con jugadores "+ Object.keys(players) +".");
    return players;
  }

  function * turno(players) {
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
  

async function main(){
  
    var players = await initPlayers("Jaime", "Clara");
    var winner = true;
    const turnoGen = turno(players);
    while (winner){
        var currentPlayer = turnoGen.next().value;
        var turn = prompt("Ingrese lanzamientos de " + currentPlayer + ": ");
        turn = JSON.parse(turn);
        players[currentPlayer] = await UpdatePoints(players[currentPlayer], turn);
        console.log(currentPlayer + " queda con "+ players[currentPlayer] +" puntos");
        if (players[currentPlayer] == 0){
            console.log("y gana el juego. Felicitaciones "+ currentPlayer + " !!");
            winner = false;
            }
    }
}

main("Jaime", "Clara");