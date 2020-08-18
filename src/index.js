const app = require('./app');
const http = require('http');
const socketio = require('socket.io');




app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);
const io = socketio.listen(server);
app.use(express.static(path.join(__dirname.'public')));

require('./sockets')(io);
require('./database');


server.listen(app.get('port'), () =>{
  console.log(`server on port ${app.get('port')}`);
});

main();