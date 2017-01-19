
module.exports = function (app) {

	app.on('ticktock', function(){
		// console.log("ticking..");
	});

	app.get('/',function (req, res, next) {
		res.send("Cargo Space Contest Creator");
	});

	app.get('/next_contest',function (req, res, next) {
		res.status(200);
		res.json({
			start_time: app.next_contest, 
			message: "Happy Coding Cargo Space Challengers (^-^)",
			server_time: new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString(),
		});
	});

};