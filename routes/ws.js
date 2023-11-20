const WebSocket = require("ws");
const uuidv4 = require("uuid").v4;

const wss1 = new WebSocket.WebSocketServer({ noServer: true });

wss1.on("connection", function connection(ws) {
  ws.on("error", console.error);
  console.log("連線成功");
  // ...
  const uuid = uuidv4();

  ws.uuid = uuid; //判斷用戶

  // 發出用戶
  const user = {
    context: "user",
    uuid,
  };
  ws.send(JSON.stringify(user));
});

module.exports = wss1;
