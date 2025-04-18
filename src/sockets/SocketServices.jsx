// services/socketService.js
import { io } from 'socket.io-client';

const SOCKET_URL = ''; // Replace with your server

let socket =  null 

export const initiateSocket = () => { //initilize the sockets
  socket = io(SOCKET_URL, { //io is comes from socket library create new socket connection to server
    transports: ['websocket'], //force to connect to websockets
  });
  console.log(' Socket connected');
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    console.log(' Socket disconnected');
  }
};

export const subscribeToMessages = (callback) => {
  if (!socket) return;
  socket.on('receive_message', callback); //receive messege server -> client 
};

export const sendMessage = (message) => {
  if (socket && message.trim()) {
    socket.emit('send_message', message); // emmit messege client -> server
  }
};

export const getSocket = () => socket; // it return currect socket object



//Broadcasting (emit to multiple clients at once). when to use chat apps, notifications, multiplayer games
//tcp Allows direct communication with TCP servers (like IoT devices, custom low-level services).
//socket.io:
//Cross-platform support: Works well across different platforms, including web and mobile (React Native).
//Automatic reconnection: Socket.IO has automatic reconnection support, so if the connection drops, it will try to reconnect automatically.

