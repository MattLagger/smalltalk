import * as express from "express";
import * as http from "http";
import * as socketio from "socket.io";

const app = express.default();

app.get("/", (_req, res) => {
  res.send({ uptime: process.uptime() });
});

const server = http.createServer(app);
const io = new socketio.Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("room", (room) => {
    console.log("connected on ", room);
    socket.join(room);
  });
});

app.post("/send", (_req, res) => {
  io.emit("Hello There");
  return res.json({ msg: "its alive" });
});

server.listen(4004, () => {
  console.log("Running at localhost:4004");
});
