process.env.NODE_ENV = "test";

function Request() {};
function Response() {
	this.viewName = "";
	this.data = {};
};

Response.prototype.render = function(view, viewData) {
	this.viewName = view;
}

exports.Response = Response;
exports.Request = Request;
