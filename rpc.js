var rpc = require('node-json-rpc');
var config = require('./config');
var client = new rpc.Client(config.rpc);

module.exports = function(callback){
	client.call({
		"jsonrpc": "2.0", 
		"method": "create_contest", 
		"params": [], 
		id: 0
	}, function (error, response) {
	    if (error) {
	    	callback(error);
	    } else {
	    	callback(null, res);
	    }
	});
}