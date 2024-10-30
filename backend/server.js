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

const {isAlnum, isEmail, isLen} = require("./strings_analyzer.js");

io.on('connection', (sock) => {
	

	sock.on("searchByName", (name) => {
		console.log("1");
		if(!db) return;
		console.log("2");
		if(isAlnum(name)){
			db.query("SELECT * FROM places WHERE name ='"+name+"'", (err, res) => {
				console.log("3");
				console.log(err);
				console.log(res);
				sock.emit("places", res);
			});
		}
	});
});

server.listen(PORT, () => {
	console.log("Work");
});