// Stores the active TCP connection object.
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
  
const handleUserInput = function() {
// your code here
  const stdin = process.stdin;
  //  const connect = require("./client");
  //  const conn = connect;
  const net = require("net");
  const { ip, port } = require("./constant");
  const conn = net.createConnection({
    host: ip,
    port: port,
  });
  stdin.on('data', (key) => {
    key = key.toLowerCase();
    if (key === "w") {
      setTimeout(() => {
        conn.write("Move: up");
      }, 5);
      key = "";
    } else if (key === "a") {
      setTimeout(() => {
        conn.write("Move: left");
      }, 5);
      key = "";
    } else if (key === "s") {
      setTimeout(() => {
        conn.write("Move: down");
      }, 5);
      key = "";
    } else if (key === "d") {
      setTimeout(() => {
        conn.write("Move: right");
      }, 5);
      key = "";
    } else if (key === "m") {
      setTimeout(() => {
        conn.write("Say: Master the computer skill!");
      }, 5);
      key = "";
    } else if (key === "h") {
      setTimeout(() => {
        conn.write("Say: Hello, my friend!");
      }, 5);
      key = "";
    } else if (key === '\u0003') {
      console.log("Bye!");
      process.exit();
    }
  });
  stdin.on('disconnect', function() {
    conn.write("Say: Bye!");
  });
};

module.exports = setupInput;

