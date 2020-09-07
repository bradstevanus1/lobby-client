# lobby-client

A small wrapper around websockets that handles realtime connections to online lobbies. The [lobby-server](https://www.npmjs.com/package/lobby-server "Lobby Server NPM Package") is needed to manage the pool of lobbies. When instantiating the LobbyClient below, the address and port that the lobby-server is listening on must be specified.

## Installation

```bash
npm install lobby-client
```

## Usage

```javascript
import LobbyClient from "lobby-client";

const lobby = LobbyClient(
  "https://somelobbyserver.com:3000", // specify address and port of the lobby server
  "Chess Game 123", // Join lobby with this name or create one if it did not exist
  (json) => {
    // callback to specify what to do when other clients send json
    movePiece(json);
  }
);

// Later, we can send any valid json to other clients in the lobby (objects, strings)
// We send our client's chess move in this example
lobby.send({ startX: 0, startY: 1, endX: 0, endY: 3 });

// Disconnects explicitly from the lobby
// Websockets are also closed after a long period of inactivity, which is handled by socket.io
lobby.leave();
```

## Contributing

Pull requests are welcome. An issue can be opened for larger changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
