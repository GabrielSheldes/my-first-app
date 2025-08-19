import express from "express"
import http from "http"
import {Server} from "socket.io"

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log('um cliente se conectou');
    socket.on('join_room',(room)=>{
        socket.join(room);
        console.log(`cliente entrou no canal: $ {room}`)
        });
    socket.on('send_message',({room, message})=> {
        io.to(room).emit('receive_message', { room,msg:message})
    })
    socket.on(`disconect`, ()=> {
        console.log(`um cliente se conectou`)
    });
});

    server.listen(3000, ()=>{
        console.log(`Seridor rodando na porta 3000`);
    });

