const ws = new WebSocket('ws://localhost:8080');
let player = 'A';  // Player A starts by default

ws.onmessage = function(event) {
  const data = JSON.parse(event.data);
  
  if (data.type === 'init' || data.type === 'update') {
    renderBoard(data.board);
    document.getElementById('info').innerText = `Current Turn: Player ${data.nextTurn}`;
    generateMoveButtons(data.board); // Generate move buttons dynamically based on the current board state
  }

  if (data.type === 'error') {
    alert(data.message);
  }

  if (data.type === 'gameover') {
    alert(`Game Over! Player ${data.winner} wins!`);
    location.reload();  // Restart game on game over
  }
};

function renderBoard(board) {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';
  
  board.forEach(row => {
    row.forEach(cell => {
      const cellElement = document.createElement('div');
      cellElement.className = 'cell ' + (cell ? (cell.startsWith('A-') ? 'player-a' : 'player-b') : 'empty');
      cellElement.innerText = cell ? cell.split('-')[1] : '';
      boardElement.appendChild(cellElement);
    });
  });
}

function sendMove(character, move) {
  ws.send(JSON.stringify({ player, character, move }));
}

document.getElementById('move-buttons').addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const [character, move] = e.target.dataset.move.split(':');
    sendMove(character, move);
  }
});

function generateMoveButtons(board) {
  const moveButtons = document.getElementById('move-buttons');
  moveButtons.innerHTML = ''; // Clear any existing buttons

  const moves = {
    'P': ['L', 'R', 'F', 'B'],
    'H1': ['L', 'R', 'F', 'B'],
    'H2': ['FL', 'FR', 'BL', 'BR']
  };

  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell && cell.startsWith(`${player}-`)) {
        const character = cell.split('-')[1];
        const type = character.charAt(0);

        moves[type].forEach(move => {
          const button = document.createElement('button');
          button.dataset.move = `${character}:${move}`;
          button.innerText = `${character} ${move}`;
          moveButtons.appendChild(button);
        });
      }
    });
  });
}
s