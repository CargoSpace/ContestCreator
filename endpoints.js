
module.exports = function (app) {

	app.on('ticktock', function(){
		// console.log("ticking..");
	});

	app.get('/',function (req, res, next) {
		res.send("This is Cargo Space Challenge Remote Control");
	});

	app.get('/next_contest',function (req, res, next) {
		res.status(200);
		res.json({
			start_time: app.next_contest, 
			message: "Happy Coding (^-^)"
		});
	});

};