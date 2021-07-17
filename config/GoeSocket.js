const SocketEngine = require("../engine/socket/SocketEngine");

class GOESocket {

    static initializeSocket (server) {
        const io = require("socket.io")(server);
        io.on('connection', function(socket) {
            console.log('GOELog: Socket connection established with id : ', socket.id);
            socket.on('dataFromClient', function() {
                console.log('GOELog: Data from client recieved');
            });
            SocketEngine.pushDataToClient(socket);
        });
        console.log('GOELog: Socket ready for connection');
    }
}

module.exports = GOESocket;