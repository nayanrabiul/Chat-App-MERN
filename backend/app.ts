import express from 'express';
import socket from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = require('http').createServer(app);

const io = socket(server, {
    cors: {
        origin: '*',
    }
});
io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('message', (message) => {
        console.log('Received message:', message);
        //emit the message to who is sending the message
        socket.emit('message', message);
        // io.emit('message', message); // Broadcast the message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

let Port = process.env.PORT || 5000;

server.listen(Port, () => {
    console.log('listening on *:3000');
});
