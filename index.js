// index.js
const WebSocket = require('ws');
const Game = require('./game');

const wss = new WebSocket.Server({ port: 8080 });
const game = new Game();

wss.on('connection', ws => {
  ws.send(JSON.stringify({ type: 'init', board: game.board }));

  ws.on('message', message => {
    const { player, character, move } = JSON.parse(message);
    const result = game.moveCharacter(player, character, move);

    if (result.error) {
      ws.send(JSON.stringify({ type: 'error', message: result.error }));
    } else {
      wss.clients.forEach(client => {
        client.send(JSON.stringify({ type: 'update', board: result.board, nextTurn: result.nextTurn }));
      });

      const winner = game.checkGameOver();
      if (winner) {
        wss.clients.forEach(client => {
          client.send(JSON.stringify({ type: 'gameover', winner }));
        });
      }
    }
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
