import express from 'express';
import socket from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = require('http').Server(app)

const io = socket(server, {
    cors: {
        origin: '*',
    }
});

app.use(chatApp(io))

let Port = process.env.PORT || 6000;

server.listen(Port, () => {
    console.log('listening on '+Port);
});
