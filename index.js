import io from "socket.io-client";

class LobbyClient {
  constructor(url, lobbyName, onReceive) {
    this._socket = io(url);

    this._socket.on("connect", () => {
      this._socket.emit("room", lobbyName);
    });

    this._socket.on("receive", (json) => {
      onReceive(json);
    });
  }

  send(json) {
    this._socket.emit("send", json);
  }

  leave() {
    this._socket.emit("disconnect");
  }
}

export default LobbyClient;
