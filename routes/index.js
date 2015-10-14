exports.index = function(req, res, next){
	var theerror = new Error("Unknown Endpoint");
	theerror.status = 500;
	next(theerror);
};