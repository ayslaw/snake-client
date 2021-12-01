const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

 
  conn.setEncoding("utf8");
  
  
  conn.on('data',function(message){
    console.log(message);
  });


  conn.on('connect',function(){
    console.log("Successfully connected to game server");

    // push name to server:
    conn.write(`Name: AYF`);

    /*
    // using setInterval - moves snake up indefinitely
    setInterval(() => {
      conn.write(`Move: up`)
    }, 100);
    
    // using setTimeout - moves snake up incrementally
    // move snake up:
    setTimeout(() => {
      conn.write(`Move: up`)
    }, 250);
    // move snake left:
    setTimeout(() => {
      conn.write(`Move: left`)
    }, 300);
    // move snake up again:
    setTimeout(() => {
      conn.write(`Move: up`)
    }, 350);
    // move snake left again:
    setTimeout(() => {
      conn.write(`Move: left`)
    }, 400);
    
    // move snake up again:
    setTimeout(() => {
      conn.write(`Move: up`)
    }, 450);
    */



  });

  return conn;
};

module.exports = connect;