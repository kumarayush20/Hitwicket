class Game {
    constructor() {
      this.players = {};
      this.board = this.initializeBoard();
      this.currentTurn = 'A'; // A starts first
    }
  
    initializeBoard() {
      const emptyRow = [null, null, null, null, null];
      const playerARow = ['A-P1', 'A-P2', 'A-H1', 'A-H2', 'A-P3'];
      const playerBRow = ['B-P1', 'B-P2', 'B-H1', 'B-H2', 'B-P3'];
      
      return [playerBRow, emptyRow.slice(), emptyRow.slice(), emptyRow.slice(), playerARow];
    }
  
    moveCharacter(player, character, move) {
      if (this.currentTurn !== player) {
        return { error: "It's not your turn!" };
      }
  
      const position = this.findCharacterPosition(player, character);
      if (!position) {
        return { error: "Invalid character!" };
      }
  
      const [row, col] = position;
      const newPosition = this.calculateNewPosition(character, move, row, col);
      if (this.isValidMove(newPosition, player)) {
        this.updateBoard(row, col, newPosition);
        this.currentTurn = this.currentTurn === 'A' ? 'B' : 'A';
        return { board: this.board, nextTurn: this.currentTurn };
      } else {
        return { error: "Invalid move!" };
      }
    }
  
    findCharacterPosition(player, character) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (this.board[i][j] === `${player}-${character}`) {
            return [i, j];
          }
        }
      }
      return null;
    }
  
    calculateNewPosition(character, move, row, col) {
      const moves = {
        'P': { 'L': [0, -1], 'R': [0, 1], 'F': [-1, 0], 'B': [1, 0] },
        'H1': { 'L': [0, -2], 'R': [0, 2], 'F': [-2, 0], 'B': [2, 0] },
        'H2': { 'FL': [-2, -2], 'FR': [-2, 2], 'BL': [2, -2], 'BR': [2, 2] }
      };
  
      const type = character.charAt(1);
      const [dr, dc] = moves[type][move];
      return [row + dr, col + dc];
    }
  
    isValidMove([newRow, newCol], player) {
      if (newRow < 0 || newRow > 4 || newCol < 0 || newCol > 4) return false;
      const destination = this.board[newRow][newCol];
      return destination === null || destination.charAt(0) !== player;
    }
  
    updateBoard(oldRow, oldCol, [newRow, newCol]) {
      const character = this.board[oldRow][oldCol];
      this.board[oldRow][oldCol] = null;
      this.board[newRow][newCol] = character;
    }
  
    checkGameOver() {
      const aExists = this.board.flat().some(cell => cell && cell.startsWith('A-'));
      const bExists = this.board.flat().some(cell => cell && cell.startsWith('B-'));
      if (!aExists) return 'B';
      if (!bExists) return 'A';
      return null;
    }
  }
  
  module.exports = Game;
  