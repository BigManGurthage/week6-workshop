module.exports = function(io) {
    io.on('connection', (socket) => {
      console.log('A user connected');
  
      socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  