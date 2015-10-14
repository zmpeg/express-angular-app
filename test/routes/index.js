process.env.NODE_ENV = "test";

const assert = require('assert');
const routes = require("../../routes");

var req = {};
var res = {
    viewName: "",
    data : {},
    render: function(view, viewData) {
			this.viewName = view;
    }
};

describe('/index.html', function() {

	it("Should return the index template", function(done) {
		routes.index(req, res);
		assert.equal(res.viewName, "index");
		done();
	});

});