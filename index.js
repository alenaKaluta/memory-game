const cardValues = [
    'assets/cards-img/capsules',
    'assets/cards-img/dragee',
    'assets/cards-img/ingections',
    'assets/cards-img/ointment',
    'assets/cards-img/powder',
    'assets/cards-img/spray',
    'assets/cards-img/suppositories',
    'assets/cards-img/tablets'
];

const cards = [...cardValues, ...cardValues];


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createElement(tag, className, text) {
    const node = document.createElement(tag);
    if (className) {
        node.classList.add(className);
    }
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
}

const body = document.body;
const gameContainer = createElement('div', 'game-container');

const header = createElement('header', 'header');
const newGameBtn = createElement('button', 'button', 'New Game');
const leaderBoardBtn = createElement('button', 'button', 'Leader Board');

header.appendChild(newGameBtn);
header.appendChild(leaderBoardBtn);
gameContainer.appendChild(header);

const gameBoard = createElement('div', 'game-board');
gameContainer.appendChild(gameBoard);

const footer = createElement('footer', 'footer');

const stepBox = createElement('div', 'stat-wrapper');
const stepName = createElement('p', 'stat-label', 'Steps: ');
const stepCount = createElement('p', 'stat-value', '0');
stepBox.appendChild(stepName);
stepBox.appendChild(stepCount);

const pairsBox = createElement('div', 'stat-wrapper');
const pairsName = createElement('p', 'stat-label', 'pairs: ');
const pairsCount = createElement('p', 'stat-value', '0 of 8');
pairsBox.appendChild(pairsName);
pairsBox.appendChild(pairsCount);

footer.appendChild(stepBox);
footer.appendChild(pairsBox);

gameContainer.appendChild(footer);

body.appendChild(gameContainer);
