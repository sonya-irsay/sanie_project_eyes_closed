var fs = require('fs-extra'),
	glob = require("glob"),
	path = require("path");
var chokidar = require('chokidar');



module.exports = function(app, io){

	console.log("main module initialized");

		
	io.on("connection", function(socket){

		var watcher = chokidar.watch('public/images', {ignored: /^\./, persistent: true});
		watcher
		  .on('add', function(path) {
		  	console.log('File', path, 'has been added');
		  	io.sockets.emit('test', path);
		  })
		  .on('change', function(path) {console.log('File', path, 'has been changed');})
		  .on('unlink', function(path) {console.log('File', path, 'has been removed');})
		  .on('error', function(error) {console.error('Error happened', error);})


	});



// ------------- F U N C T I O N S -------------------



// - - - END FUNCTIONS - - - 
};
