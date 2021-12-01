const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 165.227.47.243
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // data event;
  conn.on('data',function(message){
    console.log(message);
  });

  // connect event
  conn.on('connect', function())
  

  return conn;

};

module.exports = connect;
// module.exports - net;