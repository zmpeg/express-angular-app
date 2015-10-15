process.env.NODE_ENV = "test";

function Request(body) {
  this.body = body;
};
function Response() {
	this.viewName = "";
	this.data = {};
  this.json = function(data) {
    this.data = data;
  };
};

Response.prototype.render = function(view, viewData) {
	this.viewName = view;
}

exports.Response = Response;
exports.Request = Request;
