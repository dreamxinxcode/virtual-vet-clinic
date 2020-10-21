const database = require("./database");
const apiRoutes = require("./apiRoutes");
const userRoutes = require("./userRoutes");
const fs = require("fs");
const cors = require("cors");

const { addUser, getUser, getUsersInRoom } = require("./chatUsers");

const path = require("path");

// =====================
const socket = require("socket.io");
const http = require("http");

const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();

// ==================== CREATE WEBSOCKET
const server = http.createServer(app);
const io = socket(server);

app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// /api/endpoints
const apiRouter = express.Router();
apiRoutes(apiRouter, database);
app.use("/api", apiRouter);

// /user/endpoints
const userRouter = express.Router();
userRoutes(userRouter, database);
app.use("/users", userRouter);

app.use(express.static(path.join(__dirname, "../public")));

app.get("/test", (req, res) => {
  res.send("🤗");
});

io.on("connect", (socket) => {
  console.log("New client connected to CHAT");
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    // notify when user diconnected
    console.log("Client disconnected");
  });
});

// ------------- DB RESET-------------------------------------

// READ FILE ===========
function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8",
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

// DB PART ========
Promise.all([
  read(path.resolve(__dirname, `sql/migrations/schema.sql`)),
  read(path.resolve(__dirname, `sql/migrations/seeds/seeds.sql`)),
])
  .then(([create, seed]) => {
    app.get("/api/debug/reset", (request, response) => {
      database.pool
        .query(create)
        .then(() => database.pool.query(seed))
        .then(() => {
          console.log("Database Reset");
          response.status(200).send("Database Reset");
        });
    });
  })
  .catch((error) => {
    console.log(`Error setting up the reset route: ${error}`);
  });

app.close = function () {
  return database.pool.end();
};

// ============== PORT ===================
const port = process.env.PORT || 8080;
server.listen(port, (err) =>
  console.log(err || `listening on port ${port} 😎`)
);

// Video CHAT, RTC
const videoUsers = {};

io.on("connection", (socket) => {
  if (!videoUsers[socket.id]) {
    videoUsers[socket.id] = socket.id;
    console.log("Connection to video chat with no user id", socket.id);
  }
  socket.emit("yourID", socket.id);
  io.sockets.emit("allUsers", videoUsers);
  socket.on("disconnect", () => {
    delete videoUsers[socket.id];
  });

  socket.on("callUser", (data) => {
    console.log("Connecting on event called callUser");
    io.to(data.userToCall).emit("hey", {
      signal: data.signalData,
      from: data.from,
    });
  });

  socket.on("acceptCall", (data) => {
    console.log("Accepting call on event acceptCall");
    io.to(data.to).emit("callAccepted", data.signal);
  });
});
