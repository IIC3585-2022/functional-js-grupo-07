import TileMap from "./TileMap.js";

const tileSize = 32;
const velocity = 2;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity);
const mspacman = tileMap.getMsPacman(velocity);
console.log(pacman);
const enemies = tileMap.getEnemies(velocity);

let gameOver = false;
let gameWin = false;

function gameLoop() {
  tileMap.draw(ctx);
  drawGameEnd();
  pacman.draw(ctx, pause(), enemies);
  mspacman.draw(ctx, pause(), enemies);
  enemies.forEach((enemy) => enemy.draw(ctx, pause(), pacman));
  checkGameOver();
  checkGameWin();
}

function checkGameWin() {
  if (!gameWin) {
    gameWin = tileMap.didWin();
    if (gameWin) {
      //gamewinsound
    }
  }
}

function drawGameEnd() {
  if (gameWin) {
    let text = "You Win!";
    ctx.fillStyle = "black";
    ctx.fillRect(0, canvas.height / 2 - 70, canvas.width, 90);

    ctx.font = "75px comic sans";
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.fillStyle = gradient;
    ctx.fillText(text, 10, canvas.height / 2);
  } else if (gameOver) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, canvas.height / 2 - 70, canvas.width, 90);

    ctx.font = "75px comic sans";
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.fillStyle = gradient;
    let text = "Game Over";
    ctx.fillText(text, 10, canvas.height / 2);
  } else {
    return;
  }
}

function checkGameOver() {
  if (!gameOver) {
    gameOver = isGameOver();
    if (gameOver) {
      //sonido perdi
    }
  }
}

function isGameOver() {
  return enemies.some(
    (enemy) => !pacman.powerDotActive && enemy.collideWith(pacman)
  );
}

function pause() {
  return !pacman.madeFirstMove || gameOver || gameWin;
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75);