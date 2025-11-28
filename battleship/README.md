# Battleship Game

The Battleship Game is a classic strategy game implemented as a web application. Players can compete against a computer or another human player by strategically placing their ships on a grid and taking turns to attack the opponent's grid. The game ends when all ships of one player are sunk.

Live: <https://gofhilman.github.io/battleship/>

## Features

- **Single-player mode**: Play against a computer opponent with intelligent attack strategies, including the use of the Breadth-First Search (BFS) algorithm for targeted attacks.
- **Multiplayer mode**: Play against another human player on the same device.
- **Ship placement**: Drag and drop ships onto the grid or randomize their positions.
- **Game status tracking**: Visual indicators for hits, misses, and ship statuses.
- **Game reset**: Easily restart the game after completion.
- **Responsive design**: Optimized for various screen sizes.

## Tech Stack

- **Build Tools**: Webpack
- **Testing**: Jest
- **State Management**: PubSub-JS

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.
4. Open the application in your browser.

## How to Play

1. Choose the opponent type (computer or human).
2. Place your ships on the grid manually or use the randomize option.
3. Take turns attacking the opponent's grid.
4. The first player to sink all opponent ships wins.
