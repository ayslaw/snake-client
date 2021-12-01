let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    // \u0003 = ctrl+c. if user inputs ctrl+c, exit the game
    process.exit();
  
  
  }

  if (key === 'w') {
    connection.write("Move: up");
  }
  
  if (key === 's') {
    connection.write("Move: down");

  }
    if (key === 'a') {
      connection.write("Move: left");

    }
      if (key === 'd') {
        connection.write("Move: right");

      }

};




// binding movements to commands 

// up = 38;
// down = 40
// right = 39
//left = 37



module.exports = setupInput;