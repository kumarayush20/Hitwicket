# Hitwicket

# Turn-Based Chess-Like Game

This project is a turn-based, chess-like game implemented using JavaScript and WebSockets. The game features a 5x5 grid where two players (Player A and Player B) take turns to move their characters, aiming to eliminate the opponent's characters.

## Table of Contents
- Game Overview (#game-overview)
- Features (#features)
- Installation (#installation)
- Usage (#usage)
- Game Rules (#game-rules)
- Technologies Used (#technologies-used)
- Contributing (#contributing)
- License (#license)

## Game Overview

The game is played on a 5x5 grid where each player controls five characters:
- **Pawns (P1, P2, P3)**: Can move left, right, forward, or backward by one space.
- **Hero1 (H1)**: Can move horizontally or vertically by two spaces.
- **Hero2 (H2)**: Can move diagonally by two spaces.

The objective is to eliminate all of the opponent's characters. The game ends when one player has no characters left on the board.

## Features
- **Real-Time Multiplayer**: Two players can play against each other in real-time using WebSockets.
- **Turn-Based Gameplay**: The game enforces turn-based rules, ensuring fair play.
- **Move Validation**: The game only allows valid moves based on the character's type and current position.
- **Dynamic Interface**: The game board and move options are dynamically updated based on the game state.

## Installation

To run this game locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/turn-based-chess-like-game.git
    cd turn-based-chess-like-game
    ```

2. **Install dependencies**:
   - Navigate to the server directory (if applicable) and install the necessary dependencies:
     ```bash
     npm install
     ```

3. **Start the server**:
   - Start the WebSocket server (make sure it's running on port 8080 or change the code accordingly):
     ```bash
     npm start
     ```

4. **Open the game**:
   - Open `index.html` in your web browser to start the game.

## Usage

- **Starting the Game**: Player A starts by default. Moves can be made by clicking the appropriate move buttons that appear on the interface.
- **Making a Move**: Click on the move button corresponding to the character and the direction you want to move it.
- **Winning the Game**: The game continues until one player eliminates all the opponent's characters.

## Game Rules

1. **Board Setup**: Each player starts with three Pawns, one Hero1, and one Hero2.
2. **Character Movements**:
    - **Pawns (P)**:
      - Moves left, right, forward, or backward by one space.
    - **Hero1 (H1)**:
      - Moves horizontally or vertically by two spaces.
    - **Hero2 (H2)**:
      - Moves diagonally by two spaces.
3. **Turn-Based Play**: Players take turns to move one character.
4. **Win Condition**: A player wins when all of the opponent's characters are removed from the board.

## Technologies Used

- **JavaScript**: For game logic and client-side interactivity.
- **WebSockets**: For real-time communication between the client and server.
- **HTML/CSS**: For structuring and styling the game interface.
- **Node.js**: For running the WebSocket server.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request. 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

