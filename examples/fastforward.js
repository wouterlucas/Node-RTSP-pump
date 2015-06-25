//test client for pump.js
var net = require('net');

//RTSP messages
var msg = 'PLAY * RTSP/1.0\n';
msg+='CSeq: 3\n';
msg+='Session: 1413923045784\n'
msg+='Scale: 2.0\n'
msg+='\r\n';

var socket = net.connect(5554, 'localhost', testClient);

function testClient(){
	//wait for conncetion
	console.log('Succesfully connected to Pump');

	function end(){
		console.log('stopping...')
		socket.end(function(){
			console.log('connection closed');
		});
	}

	//send RTSP message
	socket.write(msg, function(){
		console.log('succesfull send: ' + msg);
		setTimeout(end, 10*1000);
	});

	socket.on('data', function(data){
		console.log('Got response:');
		console.log(data.toString());
	});
	

}