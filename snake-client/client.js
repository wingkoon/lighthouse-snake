const net = require("net");
const { ip, port } = require("./constant");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: ip,
    port: port,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
  // code that does something when the connection is first established
    conn.write("Name: KWL");
    conn.write("Say: IP: " + ip);
  });
  conn.on("data", (data) => {
    console.log("Server says:", data);
    console.log("Bye!");
    process.exit();
  });
  return conn;
};

module.exports = connect;
