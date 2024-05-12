import express from 'express';
import { WebSocketServer } from 'ws';
const app = express();
// const WebSocket=require('WebSocket');


const server= app.listen('6969',()=>{
    console.log('app is runnig at 6969')
})

const wss=new WebSocketServer({ server });

console.log(wss);

wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        console.log("data from client"+ data);
        ws.send("thankssskkkskks")

    })

})