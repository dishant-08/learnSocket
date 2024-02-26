// import Express from "express";

// import { Server } from "socket.io";
// import cors from "cors";
// import { createServer } from "http";
// const app = Express();
// // app.use(
// //   cors({
// //     origin: "*",
// //   })
// // );

// const server = createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// app.get("/", (req, res) => {
//   res.send("Hellow");
// });

// io.on("connect", (socket) => {
//   console.log("User Connected", socket.id);
// });

// app.listen(3000, () => {
//   console.log("Server is running");
// });
import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors()); // Enable CORS for all routes

const server = http.createServer(app);
const io = new SocketIOServer(
  server,

  {
    cors: {
      origin: "*",
    },
  }
);

io.on("connect", (socket) => {
  console.log("User Connected", socket.id);
  socket.emit("welcm", `Welcome! ${socket.id}`);
  socket.on("msg", (s) => {
    // Use socket.broadcast.emit to broadcast to all clients except the sender
    socket.broadcast.emit("respond", s);
  });
});

// Your socket.io server logic here

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
