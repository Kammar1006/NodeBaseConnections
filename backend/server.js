/*
    Created by Kammar1006
*/

const opt = require('../opt.json');
const PORT = opt.port;

const express = require('express');
	const http = require('http');
	const socketio = require('socket.io');

	const db = (opt.db_on) ? require('./db.js') : false;
	
	const app = express();
	app.use(express.static(`${__dirname}/../frontend`));
	
	const server = http.createServer(app);
	const io = socketio(server, {
		cookie: true,
	});

	let roomsTab = [];

	io.on('connection', (sock) => {
        
    });

    server.listen(PORT, () => {
		console.log("Work");
	});