// Stores the active TCP connection object.
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};
  
const handleUserInput = function(key) {
  key = key.toLowerCase();
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "m") {
    connection.write("Say: Master the computer skill!");
  }
  if (key === "h") {
    connection.write("Say: Hello, my friend!");
  }
  if (key === '\u0003') {
    console.log("Bye!");
    process.exit();
  }
};

module.exports = setupInput;

