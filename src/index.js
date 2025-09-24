import './style.css';
import goblinImg from './img/goblin.png';


const gameContainer = document.getElementById('game-container');

const size = 4;

for (let i = 0; i < size * size; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  gameContainer.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');

const goblin = document.createElement('img');
goblin.src = goblinImg;
goblin.style.width = '80%';
goblin.style.height = '80%';

function placeGoblin() {
  const randomIndex = Math.floor(Math.random() * cells.length);
  const cell = cells[randomIndex];

  cell.appendChild(goblin);
}

placeGoblin();

setInterval(() => {
  placeGoblin();
}, 2000);